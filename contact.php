<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(strip_tags(trim($_POST["name"])));
    $email = htmlspecialchars(strip_tags(trim($_POST["email"])));
    $message = htmlspecialchars(strip_tags(trim($_POST["message"])));

    $to = "ncortes@illustracoder.com";
    $subject = "New Contact Form Submission";

    $headers = "From: ncortes@illustracoder.com\r\n"; // Usar tu correo principal aquí
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

    $email_body = "Name: $name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Message:\n$message\n";

    if (mail($to, $subject, $email_body, $headers)) {
        // Enviar respuesta en formato JSON
        echo json_encode(["status" => "success", "message" => "Thank you! Your message has been sent."]);
    } else {
        // Enviar respuesta en formato JSON
        echo json_encode(["status" => "error", "message" => "Oops! Something went wrong, and we couldn't send your message."]);
    }
}

?>





?>

