<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "rafif_DB";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}
class ProdukDataHandler {
    private $conn;

    public function __construct($conn) {
        $this->conn = $conn;
    }

    public function tambahData($nama_produk, $deskripsi_produk, $harga_produk, $jenis_produk, $foto_produk, $jenis_browser, $alamat_ip) {
        $target_dir = "img/";
        $target_file = $target_dir . basename($foto_produk["name"]);
        move_uploaded_file($foto_produk["tmp_name"], $target_file);

        $query = $this->conn->prepare("INSERT INTO produk (nama_produk, deskripsi_produk, harga_produk, jenis_produk, foto_produk, jenis_browser, alamat_ip) VALUES (?, ?, ?, ?, ?, ?, ?)");
        $query->bind_param("sssssss", $nama_produk, $deskripsi_produk, $harga_produk, $jenis_produk, $target_file, $jenis_browser, $alamat_ip);
        $query->execute();
        $query->close();
    }

    public function hapusData($id_produk, $alamat_ip) {
        $query = $this->conn->prepare("DELETE FROM produk WHERE id_produk = ? AND alamat_ip = ?");
        $query->bind_param("is", $id_produk, $alamat_ip);
        $query->execute();
        $query->close();
    }
}
?>

