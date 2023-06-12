<?php
  $conn = NULL;
  try {
    $conn = new PDO("mysql:host=containers-us-west-133.railway.app;port=7107;dbname=railway;charset=utf8", 
    'root', 'CcOIMxa4vjpMWOkXWCEd');

    if(isset($_GET['id'])) {
      $id = $_GET['id'];
      $sql = "SELECT * FROM characters WHERE id=$id";
    } else {
      $sql = "SELECT * FROM characters";
    }

    $stm = $conn->prepare($sql);
    $stm->execute();
    $resultSet = $stm->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($resultSet);
  } catch(PDOException $e) {
    echo "Error ".$e->getMessage();
  }
?>


