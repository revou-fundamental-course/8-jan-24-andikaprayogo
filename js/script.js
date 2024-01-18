function showResult(id, result) {
  document.getElementById(id).innerHTML = result;
}

function tampilkanPersegi() {
  document.getElementById("persegi").style.display = "block";
  document.getElementById("persegiPanjang").style.display = "none";
}

function tampilkanPersegiPanjang() {
  document.getElementById("persegi").style.display = "none";
  document.getElementById("persegiPanjang").style.display = "block";
}

function hitungLuasPersegi() {
  var sisi = document.getElementById("sisi").value;
  var luas = sisi * sisi;
  showResult("resultPersegi", "Luas Persegi: " + luas);
}

function hitungKelilingPersegi() {
  var sisi = document.getElementById("sisi").value;
  var keliling = 4 * sisi;
  showResult("resultPersegi", "Keliling Persegi: " + keliling);
}

function hitungLuasPersegiPanjang() {
  var panjang = document.getElementById("panjang").value;
  var lebar = document.getElementById("lebar").value;
  var luas = panjang * lebar;
  showResult("resultPersegiPanjang", "Luas Persegi Panjang: " + luas);
}

function hitungKelilingPersegiPanjang() {
  var panjang = parseFloat(document.getElementById("panjang").value);
  var lebar = parseFloat(document.getElementById("lebar").value);

  if (isNaN(panjang) || isNaN(lebar)) {
    showResult(
      "resultPersegiPanjang",
      "Masukkan nilai yang valid untuk panjang dan lebar."
    );
    return;
  }

  var keliling = 2 * (panjang + lebar);
  showResult("resultPersegiPanjang", "Keliling Persegi Panjang: " + keliling);
}
