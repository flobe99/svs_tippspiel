<?php

// Einstellung der HTTP-Header für CORS (Cross-Origin Resource Sharing)
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Methods, Access-Control-Allow-Origin');

// Überprüfung, ob die Anfrage eine POST-Anfrage ist
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405); // Methode nicht erlaubt
    echo json_encode(array('message' => 'Methode nicht erlaubt'));
    exit;
}

// Datenbankverbindung herstellen
require_once 'config.php';

try {
    $conn = new PDO('mysql:host=' . DB_HOST . ';dbname=' . DB_NAME, DB_USER, DB_PASS);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    http_response_code(500); // Interner Serverfehler
    echo json_encode(array('message' => 'Datenbankverbindung fehlgeschlagen: ' . $e->getMessage()));
    exit;
}



// Daten vom Request holen
$data = json_decode(file_get_contents('php://input'), true);

// Überprüfen, ob JSON korrekt dekodiert wurde
if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400); // Schlechte Anfrage
    echo json_encode(array('message' => 'Ungültiges JSON-Datenformat', 'error' => json_last_error_msg()));
    exit;
}

// Überprüfen, ob alle erforderlichen Felder gesendet wurden
if (!isset($data['person_id']) || !isset($data['Endplazierung_1']) || !isset($data['Endplazierung_2'])) {
    http_response_code(400); // Schlechte Anfrage
    echo json_encode(array('message' => 'Fehlende Parameter'));
    exit;
}

// Überprüfen, ob die person_id und spiel_id gültig sind
$checkQuery = "SELECT _id FROM Personen WHERE _id = :person_id";
$stmt = $conn->prepare($checkQuery);
$stmt->bindParam(':person_id', $data['person_id']);
$stmt->execute();
if ($stmt->rowCount() == 0) {
    http_response_code(404); // Nicht gefunden
    echo json_encode(array('message' => 'Ungültige person_id'));
    exit;
}

// Tipps in die Datenbank einfügen
$query = "INSERT INTO `Endplazierung` (`personen_id`, `Endplazierung_1`, `Endplazierung_2`) VALUES (:person_id, :Endplazierung_1, :Endplazierung_2)";
$stmt = $conn->prepare($query);

// Binden der Parameter
$stmt->bindParam(':person_id', $data['person_id']);
$stmt->bindParam(':Endplazierung_1', $data['Endplazierung_1']);
$stmt->bindParam(':Endplazierung_2', $data['Endplazierung_2']);

// Versuch, die Daten einzufügen
if (!$stmt->execute()) {
    http_response_code(500); // Interner Serverfehler
    echo json_encode(array('message' => 'Endplazierung Tipp konnte nicht gespeichert werden'));
    exit;
}


http_response_code(201); // Erfolgreich erstellt
echo json_encode(array('message' => 'Endplazierung Tipps erfolgreich gespeichert'));

?>
