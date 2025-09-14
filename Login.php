<?php
session_start();

// Hardcoded credentials for testing
$users = [
    "student1" => ["password123", "student"],
    "faculty1" => ["pass456", "faculty"],
    "admin1" => ["admin789", "admin"]
];

$error = "";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';

    if (isset($users[$username]) && $users[$username][0] === $password) {
        $_SESSION['username'] = $username;
        $_SESSION['role'] = $users[$username][1];

        // Redirect based on role
        switch($_SESSION['role']){
            case "student":
                header("Location: Student.php");
                break;
            case "faculty":
                header("Location: Faculty.php"); // Optional for later
                break;
            case "admin":
                header("Location: Admin.php"); // Optional for later
                break;
        }
        exit();
    } else {
        $error = "Invalid username or password!";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Login - Boolean University</title>
<style>
body { font-family: Arial, sans-serif; background: #f4f6f8; display:flex; justify-content:center; align-items:center; height:100vh; margin:0;}
.login-container { background:#fff; padding:30px; border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,0.1); width:300px; text-align:center;}
input { width:100%; padding:10px; margin:10px 0; border-radius:5px; border:1px solid #ccc;}
button { width:100%; padding:10px; border:none; background:#0077cc; color:#fff; border-radius:5px; cursor:pointer; font-weight:bold;}
button:hover { background:#005fa3; }
p.error { color:red; }
</style>
</head>
<body>
<div class="login-container">
    <h2>Login</h2>
    <?php if($error) echo "<p class='error'>$error</p>"; ?>
    <form method="post">
        <input type="text" name="username" placeholder="Username" required><br>
        <input type="password" name="password" placeholder="Password" required><br>
        <button type="submit">Login</button>
    </form>
</div>
</body>
</html>
