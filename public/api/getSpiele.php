<?php

// Einstellung der HTTP-Header für CORS (Cross-Origin Resource Sharing)
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Methods, Access-Control-Allow-Origin');

// Überprüfung, ob die Anfrage eine GET-Anfrage ist
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
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

// Alle Spiele abrufen
$query = "SELECT * FROM Spiele";
$stmt = $conn->prepare($query);
$stmt->execute();

$spiele = $stmt->fetchAll(PDO::FETCH_ASSOC);

http_response_code(200); // OK
echo json_encode($spiele);

?>
