
// Object Literal
// Problem : Tidak Efektif
// let mahasiswa1 = {
//     nama : 'Sandhika',
//     energy : 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`halo ${this.nama}, selamat makan!`)
//     }
// }

// let mahasiswa2 = {
//     nama : 'Sandhika',
//     energy : 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`halo ${this.nama}, selamat makan!`)
//     }
// };


// function Declaration

// const methodMahasiswa = {
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`halo ${this.nama}, selamat makan!`)
//     },

//     main: function (jam) {
//         this.energi -= jam;
//         console.log(`halo ${this.nama}, selamat bermain!`)
//     },
//     tidur: function (jam) {
//         this.energi += jam * 2;
//         console.log(`halo ${this.nama}, selamat tidur!`)
//     }            
// };
// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
    
//     return mahasiswa;
// }
// let sandhika = Mahasiswa('Sandhika', 10);
// let doddy = Mahasiswa('Doddy', 20);



// function Mahasiswa(nama, energi) {
//    // let mahasiswa = Object.create(methodMahasiswa);
//    // let mahasiswa = {};
//    // let.this = object.create(Mahasiswa.prototype);
//    this.nama = nama;
//    this.energi = energi;
    
//     // return mahasiswa;
// };


// // Declaration Function
// function Mahasiswa(nama, energi) {
//    this.nama = nama;
//    this.energi = energi;
// };

// Mahasiswa.prototype.makan = function (porsi) {
//     this.energi += porsi;
//     return `halo ${this.nama}, selamat makan!`
// }

// Mahasiswa.prototype.main = function (jam) {
//     this.energi -= jam;
//     return `halo ${this.nama}, selamat bermain!`
// }

// Mahasiswa.prototype.tidur = function (jam) {
//     this.energi += jam * 2;
//     return `halo ${this.nama}, selamat tidur!`
// }

// let sandhika = new Mahasiswa('Sandhika',10);


// // versi class
// class Mahasiswa {
//     constructor(nama, energi) {
//         this.nama = nama;
//         this.energi = energi;
//     }

//     makan(porsi) {
//         this.energi += porsi;
//         return `halo ${this.nama}, selamat makan!`
//     }
//     main(jam) {
//         this.energi -= jam;
//         return `halo ${this.nama}, selamat bermain!`
//     }
//     tidur(jam) {
//         this.energi += jam * 2;
//         return `halo ${this.nama}, selamat tidur!`
//     }
// }


// let sandhika = new Mahasiswa('Sandhika',10);
// let doddy = new Mahasiswa('Doddy',20);

// Constructor Function
// keyword new
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`halo ${this.nama}, selamat makan!`)
//     }
//     this.main = function (jam) {
//         this.energi -= jam;
//         console.log(`halo ${this.nama}, selamat bermain!`)
//     }
// }

// let sandhika = new Mahasiswa('Sandhika', 10); 