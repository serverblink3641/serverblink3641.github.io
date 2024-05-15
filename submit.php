<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];

    // Validate email (you may want to use a more robust validation)
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Handle invalid email
        echo "Invalid email format";
        exit();
    }

    // Save email to a text file (you may want to store it in a database instead)
    $file = 'emails.txt';
    $current = file_get_contents($file);
    $current .= $email . "\n";
    file_put_contents($file, $current);

    // Redirect or send response back to the client
    header('Location: success.html');
    exit();
}
?>
