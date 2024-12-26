<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitização e validação dos dados do formulário
    $name = filter_var(trim($_POST['name']), FILTER_SANITIZE_STRING);
    $email = filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL);
    $subject = filter_var(trim($_POST['subject']), FILTER_SANITIZE_STRING);
    $message = filter_var(trim($_POST['message']), FILTER_SANITIZE_STRING);

    // Verifica se os campos obrigatórios estão preenchidos
    if ($name && $email && $subject && $message) {
        $to = "gilmar.shuenck93@gmail.com"; // Seu e-mail
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

        $body = "Você recebeu uma nova mensagem do formulário de contato:\n\n";
        $body .= "Nome: $name\n";
        $body .= "E-mail: $email\n";
        $body .= "Assunto: $subject\n";
        $body .= "Mensagem: $message\n";

        // Envia o e-mail e retorna status
        if (mail($to, $subject, $body, $headers)) {
            echo "<script>alert('Mensagem enviada com sucesso!'); window.history.back();</script>";
        } else {
            echo "<script>alert('Erro ao enviar a mensagem. Tente novamente mais tarde.'); window.history.back();</script>";
        }
    } else {
        echo "<script>alert('Por favor, preencha todos os campos corretamente.'); window.history.back();</script>";
    }
} else {
    echo "<script>alert('Acesso inválido.'); window.history.back();</script>";
}
?>
