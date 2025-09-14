<?php
session_start();

// Protect page: only allow students
if (!isset($_SESSION['role']) || $_SESSION['role'] !== 'student') {
    header("Location: login.php");
    exit();
}

$username = $_SESSION['username'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Student Dashboard - Boolean University</title>
<style>
body { font-family: Arial, sans-serif; background: #f4f6f8; margin:0; }
.dashboard-header { background: #0077cc; color: #fff; padding: 20px; display: flex; justify-content: space-between; align-items: center; }
.dashboard-header h1 { margin: 0; }
.logout-btn { background: #fff; color: #0077cc; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer; text-decoration: none; font-weight: bold; }
.logout-btn:hover { background: #e6e6e6; }

.dashboard-container { max-width: 1200px; margin: 30px auto; padding: 0 20px; }

.project-section { margin-top: 20px; }
.project-section h2 { margin-bottom: 15px; }

.card-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; }
.card { background: #fff; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); padding: 20px; cursor: pointer; transition: transform 0.2s ease; }
.card:hover { transform: translateY(-5px); }
.card h3 { margin-top: 0; }
.card p { color: #555; }

.modal { display: none; position: fixed; z-index: 999; left: 0; top: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); }
.modal-content { background: #fff; margin: 10% auto; padding: 20px; max-width: 600px; border-radius: 8px; position: relative; }
.close-btn { position: absolute; top: 10px; right: 15px; font-size: 20px; cursor: pointer; }
</style>
</head>
<body>

<div class="dashboard-header">
    <h1>Welcome, <?php echo htmlspecialchars($username); ?>!</h1>
    <a class="logout-btn" href="logout.php">Logout</a>
</div>

<div class="dashboard-container">
    <div class="project-section">
        <h2>Web Development Project</h2>
        <div class="card-grid">
            <div class="card" onclick="openModal('modal1')"><h3>HTML Module</h3><p>Learn structure and semantics of web pages.</p></div>
            <div class="card" onclick="openModal('modal2')"><h3>CSS Module</h3><p>Design layouts, styles, and responsive pages.</p></div>
            <div class="card" onclick="openModal('modal3')"><h3>JavaScript Module</h3><p>Add interactivity and dynamic behavior to your pages.</p></div>
            <div class="card" onclick="openModal('modal4')"><h3>PHP Module</h3><p>Handle server-side logic and form submissions.</p></div>
        </div>
    </div>
</div>

<!-- Modals -->
<div id="modal1" class="modal"><div class="modal-content"><span class="close-btn" onclick="closeModal('modal1')">&times;</span><h3>HTML Module</h3><p>Details: Learn HTML tags, structure, and best practices. Build your first web page.</p></div></div>
<div id="modal2" class="modal"><div class="modal-content"><span class="close-btn" onclick="closeModal('modal2')">&times;</span><h3>CSS Module</h3><p>Details: Style your web pages, use Flexbox/Grid, and create responsive designs.</p></div></div>
<div id="modal3" class="modal"><div class="modal-content"><span class="close-btn" onclick="closeModal('modal3')">&times;</span><h3>JavaScript Module</h3><p>Details: Add interactivity, form validation, and dynamic DOM changes.</p></div></div>
<div id="modal4" class="modal"><div class="modal-content"><span class="close-btn" onclick="closeModal('modal4')">&times;</span><h3>PHP Module</h3><p>Details: Process forms, manage sessions, and connect to databases.</p></div></div>

<script>
function openModal(id) { document.getElementById(id).style.display='block'; }
function closeModal(id) { document.getElementById(id).style.display='none'; }
window.onclick = function(e) {
    document.querySelectorAll('.modal').forEach(modal => {
        if(e.target == modal) modal.style.display='none';
    });
}
</script>

</body>
</html>
