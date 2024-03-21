let judulNama;
let namaInput;
let judulNIM;
let nimInput;
let tombol;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  judulNama = createElement('h2',  'Hallo, tuliskan nama anda');
  judulNama.position(30, 15);
  namaInput = createInput();
  namaInput.position(30, 70);

  judulNIM = createElement('h2', 'Masukkan NIM Anda:');
  judulNIM.position(30, 70);
  nimInput = createInput();
  nimInput.position(30, 125);

  tombol = createButton('Masukkan');
  tombol.position(30, 160);
  tombol.mousePressed(sayHello);
}

function draw() {

}

function sayHello() {
  let pesan = 'Selamat datang ' + namaInput.value() + '! NIM Anda adalah ' + nimInput.value();
  let hello = createElement('h2', pesan);
  hello.position(30, 200);
}