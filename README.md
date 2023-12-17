Nama : Rafif Aditya
NIM : 121140090
Kelas : Pemrograman Web RA

# Instruksi Penggunaan Web

Berikut tahap dalam menggunakan web:

1. Install Xampp
2. Masukkan seluruh file kedalam direktori "..xampp/htdocs"
3. Import database pada folder "database" yang bernama "rafif_db.sql" ke dalam sistem database MySQL
4. Gunakan perintah SQL berikut: "CREATE DATABASE rafif_db" untuk membuat database. 

# Langkah Pembuatan Database dengan kode SQL

## 1.	Membuat database
CREATE DATABASE rafif_db;

## 2.	Membuat Tabel
CREATE TABLE `produk` (
  `id_produk` int(8) NOT NULL,
  `nama_produk` varchar(150) NOT NULL,
  `deskripsi_produk` varchar(150) NOT NULL,
  `harga_produk` int(150) NOT NULL,
  `jenis_produk` varchar(150) NOT NULL,
  `foto_produk` varchar(150) NOT NULL,
  `jenis_browser` varchar(200) NOT NULL,
  `alamat_ip` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


## 2. Input Data

INSERT INTO `produk` (`id_produk`, `nama_produk`, `deskripsi_produk`, `harga_produk`, `jenis_produk`, `foto_produk`, `jenis_browser`, `alamat_ip`) VALUES
(3, 'Coca Cola', 'Coca Cola 1,5 L', 14000, 'Minuman', 'img/cocacola.jpg', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36', '::1'),
(6, 'Chitato', 'Chitato Rasa Keju', 9000, 'Makanana', 'img/chitato.jpg', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36', '::1'),
(7, 'Sprite', 'Sprite Rasa Lemon 350ml', 6000, 'Minuman', 'img/sprite.jpg', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36', '::1'),
(8, 'Risol', 'Risol Mayo (isi 3)', 5000, 'Makanana', 'img/risol.jpg', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36', '::1'),
(9, 'Pena Joyko', 'Pena ukuran 0.38 mm', 3000, 'Alat Tulis', 'img/pena.png', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36', '::1'),
(10, 'Kertas Binder', 'Ukuran a4 (isi 100)', 5000, 'Alat Tulis', 'img/binder.jpg', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36', '::1');


## 3.  Menampilkan Data
SELECT * FROM `produk`

## 4. Mengedit Data
UPDATE `produk` SET `harga` = '7000' WHERE `produk`.`id_produk` = 3

## 5. Menghapus Data
DELETE FROM produk WHERE `produk`.`id_produk` = 3
