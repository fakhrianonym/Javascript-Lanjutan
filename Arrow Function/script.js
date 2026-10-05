

// 3.1 Arrow Function
// const tampilNama = (nama) => {return `Halo, ${nama}`; }
// console.log('Daddy Ferdiayansah');

// const tampilNama = (nama, waktu) => {
//     return `selamat ${waktu}, ${nama}`;
// }
// console.log(tampilNama('erik', 'pagi'));


// // implisit return
// const tampilNama = nama => `Halo, ${nama}`;
// console.log(tampilNama('doddy Ferdiayansah'));

// const tampilNama = () => 'hello world!';
// console.log(tampilNama());


// let mahasiswa = ['Sandhika', 'Erwin', 'Erwin'];

// let jumlahHuruf = mahasiswa.map (function (nama) {
//     return nama.length;
// });
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map(nama => ({nama : nama, jumlahHuruf : nama.length}));
// console.table(jumlahHuruf)

// 3.2 Arrow Function
// Konsep this pada Arrow Function

// Constructor function
// const Mahasiswa = function(){
//     this.nama = 'Erwin';
//     this.umur = 20;
//     this.sayHello = function(){
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//     }
// }
// const erwin = new Mahasiswa();

// Arrow Function
// const Mahasiswa = function(){
//     this.nama = 'Erwin';
//     this.umur = 20;
//     this.sayHello = () => {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//     }
// }
// const erwin = new Mahasiswa();



// // Object Literal
// const mhs1 = {
//     nama : 'Erwin',
//     umur : 20,
//     sayHello : () => {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//     }
// }


// const Mahasiswa = function(){
//     this.nama = 'Erwin';
//     this.umur = 20;
//     this.sayHello = function(){
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//     }

//     setInterval(() =>{
//         console.log(this.umur++);
//     }, 500);
// }

// const erwin = new Mahasiswa();


const box = document.querySelector('.box');
box.addEventListener('click', function(){
    let satu = 'size';
    let dua = 'caption';

    if(this.classList.contains(satu)){
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua);
    },600);
}); 






























