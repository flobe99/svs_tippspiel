<?php

// Decode the JSON input
$data = json_decode(file_get_contents('php://input'), true);

// Initialize the matches string
$matches = "";

// Loop through the matches and create the message
foreach ($data['tipps'] as $index => $match) {
    $spielNumber = $index + 1; // Spiel number starts from 1
    $heim = $match['heim'];
    $gast = $match['gast'];

    // Concatenate each match message with a newline character
    $matches .= "Spiel $spielNumber: $heim - $gast\n";
}

// Get the recipient email address
$to = $data['person_data']['mail'];
$subject = 'SV Sulmetingen Tippspiel 2024/ 2025';

// Create the full email message
$message = "Danke " . $data['person_data']['firstname'] . " " . $data['person_data']['lastname'] . " für die Teilnahme am Tippspiel.\n" .
           "Deine Tipps wurden erfolgreich gespeichert:\n\n" .
           "Du hast folgende Tipps abgegeben:\n" .
           $matches .
           "\nEndplazierung 1. Mannschaft Aufstiegsrunde: " . $data['endplazierung']['Endplazierung_1'] . "\n" .


// Set the email headers with proper character encoding
$headers = "From: info@svs-tippspiel.de\r\n" .
           "Reply-To: info@svs-tippspiel.de\r\n" .
           "X-Mailer: PHP/" . phpversion() . "\r\n" .
           "MIME-Version: 1.0\r\n" .
           "Content-Type: text/plain; charset=UTF-8\r\n";

// Send the email and check for success
if(mail($to, $subject, $message, $headers)) {
    echo "E-Mail erfolgreich gesendet.";
} else {
    echo "E-Mail konnte nicht gesendet werden.";
}

?>
