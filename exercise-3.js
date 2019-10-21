var nama = 'Ahmad';
var peran = 'Penyihir';

if (nama !== '') {
  if (peran === 'Ksatria' || peran === 'ksatria') {
    console.log('Selamat datang di Dunia Proxytia, ' + nama + '\nHalo ' + peran + ' ' + nama + ', kamu dapat menyerang dengan senjatamu!')
  } else if (peran === 'Tabib' || peran === 'tabib') {
    console.log('Selamat datang di Dunia Proxytia, ' + nama + '\nHalo ' + peran + ' ' + nama + ', kamu akan membantu temanmu yang terluka.')
  } else if (peran === 'Penyihir' || peran === 'penyihir') {
    console.log('Selamat datang di Dunia Proxytia, ' + nama + '\nHalo ' + peran + ' ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!')
  } else {
    console.log('Halo ' + nama + ', Pilih peranmu untuk memulai game!')
  }
} else {
  console.log('Nama harus diisi!');
}