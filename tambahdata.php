<?php
include 'connection.php';

session_start();

$dataHandler = new ProdukDataHandler($conn);

$nama_produk = $_POST['nama_produk'];
$deskripsi_produk = $_POST['deskripsi_produk'];
$harga_produk = $_POST['harga_produk'];
$jenis_produk = $_POST['jenis_produk'];

$jenis_browser = $_SERVER['HTTP_USER_AGENT'];

$alamat_ip = $_SERVER['REMOTE_ADDR'];

$dataHandler->tambahData($nama_produk, $deskripsi_produk, $harga_produk, $jenis_produk, $_FILES["foto_produk"], $jenis_browser, $alamat_ip);

$_SESSION['last_action'] = time();

$conn->close();
?>
