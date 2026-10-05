// Execution Context, Hoisting & Scope
// var nama = 'Sandhika';
// console.log(nama);

// creation phase pada global Context
// nama var = undifined
//  nama function = fn()
// Hoisting
// window = global object
// this = window

// console.log(sayHello());

// var nama = 'Sandhika';
// var umur = 33;

// function sayHello(){
//     console.log(`Halo, nama saya ${nama} ,saya ${umur} tahun.`);
// }



function satu() {
    var nama = 'Sandhika';
    console.log(nama);
}

function dua() {
    console.log(nama);
}

console.log(nama); // A. "undefined" karena variabelnya udah ada kotaknya, tapi isinya masih kosong
var nama = 'Erik'; // B. "Nah sekarang kotaknya diisi Erik"
satu();            // C. "Manggil function satu. Di dalemnya ada Sandhika sendiri" -> Sandhika
dua('Doddy');      // D. "Manggil function dua. Di dalemnya ga ada siapa2, jadi dia lari keluar nyari. Nemu Erik" -> Erik
console.log(nama); // E. "Cek lagi ke rumah besar, masih ada Erik ga?" -> Erik