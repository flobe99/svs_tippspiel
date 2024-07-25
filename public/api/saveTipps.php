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

// Überprüfen, ob die Daten ein Array sind
if (!is_array($data)) {
    http_response_code(400); // Schlechte Anfrage
    echo json_encode(array('message' => 'Ungültiges Datenformat'));
    exit;
}

foreach ($data as $tip) {
    // Überprüfen, ob alle erforderlichen Felder gesendet wurden
    if (!isset($tip['person_id']) || !isset($tip['spiel_id']) || !isset($tip['heim']) || !isset($tip['gast'])) {
        http_response_code(400); // Schlechte Anfrage
        echo json_encode(array('message' => 'Fehlende Parameter'));
        exit;
    }

    // Überprüfen, ob die person_id und spiel_id gültig sind
    $checkQuery = "SELECT _id FROM Personen WHERE _id = :person_id";
    $stmt = $conn->prepare($checkQuery);
    $stmt->bindParam(':person_id', $tip['person_id']);
    $stmt->execute();
    if ($stmt->rowCount() == 0) {
        http_response_code(404); // Nicht gefunden
        echo json_encode(array('message' => 'Ungültige person_id'));
        exit;
    }

    $checkQuery = "SELECT _id FROM Spiele WHERE _id = :spiel_id";
    $stmt = $conn->prepare($checkQuery);
    $stmt->bindParam(':spiel_id', $tip['spiel_id']);
    $stmt->execute();
    if ($stmt->rowCount() == 0) {
        http_response_code(404); // Nicht gefunden
        echo json_encode(array('message' => 'Ungültige spiel_id'));
        exit;
    }

    // Tipps in die Datenbank einfügen
    $query = "INSERT INTO Tipps (personen_id, spiele_id, Heim, Gast) VALUES (:person_id, :spiel_id, :heim, :gast)";
    $stmt = $conn->prepare($query);

    // Binden der Parameter
    $stmt->bindParam(':person_id', $tip['person_id']);
    $stmt->bindParam(':spiel_id', $tip['spiel_id']);
    $stmt->bindParam(':heim', $tip['heim']);
    $stmt->bindParam(':gast', $tip['gast']);

    // Versuch, die Daten einzufügen
    if (!$stmt->execute()) {
        http_response_code(500); // Interner Serverfehler
        echo json_encode(array('message' => 'Tipp konnte nicht gespeichert werden'));
        exit;
    }
}

http_response_code(201); // Erfolgreich erstellt
echo json_encode(array('message' => 'Tipps erfolgreich gespeichert'));

?>
