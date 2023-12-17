function tampilkanData() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", 'get_data.php', true);

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

        var cellImg = newRow.insertCell(0);

        var imgSrc = data[i].foto_produk ? data[i].foto_produk : 'img/image.jpg';

        cellImg.innerHTML = `<div style="text-align: center;"><img src="img/product.jpg" alt="${data[i].nama_produk}" style="max-width: 400px;"></div>`; 

        var cellData = newRow.insertCell(1);
        cellData.innerHTML = `
            <p> ${data[i].nama_produk}</p>
            <p> ${data[i].deskripsi_produk}</p>
            <p>${data[i].harga_produk}</p>
            <button onclick="tampilkanDetail(${i})">View</button>
            <div class="popup-content" id="popup${i}">
                <span class="close" onclick="tutupPopup(${i})">&times;</span>
                <img src="${imgSrc}" alt="${data[i].nama_produk}" style="max-width: 400px;">
                <p><strong>Nama:</strong> ${data[i].nama_produk}</p>
                <p><strong>Deskripsi:</strong> ${data[i].deskripsi_produk}</p>
                <p><strong>Harga:</strong> ${data[i].harga_produk}</p>
                <p><strong>Jenis:</strong> ${data[i].jenis_produk}</p>
            </div>
        `;
    }
}

function tampilkanDetail(index) {
    document.getElementById(`popup${index}`).style.display = "block";
}

function tutupPopup(index) {
    document.getElementById(`popup${index}`).style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    tampilkanData();
});