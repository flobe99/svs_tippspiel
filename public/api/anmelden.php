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

// Überprüfen, ob alle erforderlichen Felder gesendet wurden
if (!isset($data['firstname']) || !isset($data['lastname']) || !isset($data['mail']) || !isset($data['tipp_pate'])) {
    http_response_code(400); // Schlechte Anfrage
    echo json_encode(array('message' => 'Fehlende Parameter'));
    exit;
}

// Überprüfen, ob die E-Mail bereits verwendet wird

/*
$query = "SELECT p._id FROM Personen as p WHERE mail = :mail";
$stmt = $conn->prepare($query);
$stmt->bindParam(':mail', $data['mail']);
$stmt->execute();
if ($stmt->rowCount() > 0) {
    http_response_code(409); // Konflikt
    echo json_encode(array('message' => 'Diese E-Mail wird bereits verwendet'));
    exit;
}
    */

// Formulardaten in die Datenbank einfügen
$query = "INSERT INTO Personen (firstname, lastname, mail, tipp_pate, miscellaneous) VALUES (:firstname, :lastname, :mail, :tipp_pate, :miscellaneous)";
$stmt = $conn->prepare($query);

// Binden der Parameter
$stmt->bindParam(':firstname', $data['firstname']);
$stmt->bindParam(':lastname', $data['lastname']);
$stmt->bindParam(':mail', $data['mail']);
$stmt->bindParam(':tipp_pate', $data['tipp_pate']);
$stmt->bindParam(':miscellaneous', $data['miscellaneous']);

$last_id = NULL;

// Versuch, die Daten einzufügen
if ($stmt->execute()) {
    // Die ID der eingefügten Person zurückgeben
    $last_id = $conn->lastInsertId();
    http_response_code(201); // Erfolgreich erstellt
    echo json_encode(array('message' => 'Daten erfolgreich gespeichert', 'id' => $last_id));
} else {
    http_response_code(500); // Interner Serverfehler
    echo json_encode(array('message' => 'Daten konnten nicht gespeichert werden'));
}

?>
