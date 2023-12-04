<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = sanitizeInput($_POST['name']);
    $site = sanitizeInput($_POST['site']);
    $tel = sanitizeInput($_POST['tel']);
    $consent = isset($_POST['consent']);

    if (!empty($name) && !empty($site) && !empty($tel) && $consent) {
        $log = "Name: " . $name . "; Site: " . $site . "; Tel: " . $tel . "\n";
        file_put_contents('feedback.log', $log, FILE_APPEND);
        echo "Спасибо за ваше сообщение!";
    } else {
        echo "Пожалуйста, заполните все поля и подтвердите согласие на обработку персональных данных.";
    }
} else {
    echo "Нет данных для обработки.";
}

function sanitizeInput($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>
