// mendapatkan elemen form login
const formLogin = document.querySelector('.form');

// menambahkan event listener pada saat form login dikirim
formLogin.addEventListener('submit', function(event) {
  // mencegah form login dikirim dengan metode bawaan browser
  event.preventDefault();

  // mendapatkan nilai input username dan password dari form login
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  // memeriksa apakah informasi login yang dimasukkan pengguna benar
  if(username === 'Naijutek' && password === 'Nai123') {
    alert('Yey Bener!');
    // mengarahkan pengguna ke halaman dashboard setelah login berhasil
    window.location.href = 'Dashboard.html';
  } else {
    alert('Salah huuuuu!');
  }
});