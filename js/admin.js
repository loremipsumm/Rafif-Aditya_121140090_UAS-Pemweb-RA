function tambahData() {
    if (validasiForm()) {
        var nama_produk = document.getElementById("nama_produk").value;
        var deskripsi_produk = document.getElementById("deskripsi_produk").value;
        var harga_produk = document.getElementById("harga_produk").value;
        var jenis_produk = document.getElementById("jenis_produk").value;

        var fotoInput = document.getElementById("foto_produk");
        var foto_produk = fotoInput.files[0];

        var formData = new FormData();
        formData.append("nama_produk", nama_produk);
        formData.append("deskripsi_produk", deskripsi_produk);
        formData.append("harga_produk", harga_produk);
        formData.append("jenis_produk", jenis_produk);
        formData.append("foto_produk", foto_produk);

        var xhr = new XMLHttpRequest();
        xhr.open("POST", "tambahdata.php", true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                tampilkanData();
            }
        };

        xhr.send(formData);
    }
}

function tampilkanData() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "get_data.php", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);
            tampilkanDataDiTabel(data);
        }
    };

    xhr.send();
}

function tampilkanDataDiTabel(data) {
    var tabel = document.getElementById("tabelProduk").getElementsByTagName('tbody')[0];
    tabel.innerHTML = "";

    for (var i = 0; i < data.length; i++) {
        var newRow = tabel.insertRow(tabel.rows.length);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);
        var cell6 = newRow.insertCell(5);

        cell1.innerHTML = data[i].nama_produk;
        cell2.innerHTML = data[i].deskripsi_produk;
        cell3.innerHTML = data[i].harga_produk;
        cell4.innerHTML = data[i].jenis_produk;
        cell5.innerHTML = `<img src="${data[i].foto_produk}" alt="${data[i].nama_produk}" style="max-width: 100px;">`;

        cell6.innerHTML = `<button class="hapusDataButton" data-id="${data[i].id_produk}">Hapus</button>`;

        cell6.querySelector('.hapusDataButton').addEventListener('click', function (event) {
            var id_produk = event.target.getAttribute("data-id");
            hapusData(id_produk);
        });

    }
}

function hapusData(id_produk) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "delete_data.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            tampilkanData();
        }
    };

    xhr.send("id=" + id_produk);
}

function validasiForm() {
    var nama_produk = document.getElementById("nama_produk").value;
    var deskripsi_produk = document.getElementById("deskripsi_produk").value;
    var harga_produk = document.getElementById("harga_produk").value;
    var jenis_produk = document.getElementById("jenis_produk").value;

    if (nama_produk.trim() === "" || harga_produk.trim() === "" || jenis_produk.trim() === "" || deskripsi_produk.trim() === "") {
        alert("Harap isi semua field!");
        return false;
    }

    var fotoInput = document.getElementById("foto_produk");

    if (fotoInput.files.length === 0) {
        alert("Pilih foto!");
        return false;
    }

    return true;
}

function resetForm() {
    document.getElementById("produkForm").reset();
}

function simpanInfoSession() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "simpaninfo.php", true);
    xhr.send();
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) == 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}

function setLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function getLocalStorage(key) {
    return localStorage.getItem(key);
}

function removeLocalStorage(key) {
    localStorage.removeItem(key);
}

function setSessionStorage(key, value) {
    sessionStorage.setItem(key, value);
}

function getSessionStorage(key) {
    return sessionStorage.getItem(key);
}

function removeSessionStorage(key) {
    sessionStorage.removeItem(key);
}

document.getElementById("produkForm").addEventListener("submit", function (event) {
    event.preventDefault();
    tambahData();

    setLocalStorage("last_action", new Date().getTime());
});

document.addEventListener("DOMContentLoaded", function () {
    tampilkanData();
});

document.getElementById("resetFormButton").addEventListener("click", function () {
    resetForm();

    setCookie("last_action", new Date().getTime(), 1);
});

