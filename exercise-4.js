var tanggal = 1;
var bulan = 12;
var tahun = 1993;
var validasi = false;

switch (true) {
  case tanggal >= 1 && tanggal <= 31 && bulan >= 1 && bulan <= 12 && tahun >= 1900 && tahun <= 2200:
    validasi = true;
    break;
  default:
    validasi = false;
}

switch (bulan) {
  case 1:
    bulan = 'Januari';
    break;
  case 2:
    bulan = 'Februari';
    break;
  case 3:
    bulan = 'Maret';
    break;
  case 4:
    bulan = 'April';
    break;
  case 5:
    bulan = 'Mei';
    break;
  case 6:
    bulan = 'Juni';
    break;
  case 7:
    bulan = 'Juli';
    break;
  case 8:
    bulan = 'Agustus';
    break;
  case 9:
    bulan = 'September';
    break;
  case 10:
    bulan = 'Oktober';
    break;
  case 11:
    bulan = 'November';
    break;
  case 12:
    bulan = 'Desember';
    break;
  default:
    validasi = false;
}


// use switch case
switch (true) {
  case validasi:
    console.log(tanggal + ' ' + bulan + ' ' + tahun);
    break;
  default:
    console.log('Harap masukkan angka yang benar \n Tanggal : 1 - 31 \n Bulan : 1 - 12 \n Tahun : 1900 - 2200');
}


// without switch case
// validasi ? console.log(tanggal + ' ' + bulan + ' ' + tahun) : console.log('Harap masukkan angka yang benar \n Tanggal : 1 - 31 \n Bulan : 1 - 12 \n Tahun : 1900 - 2200');