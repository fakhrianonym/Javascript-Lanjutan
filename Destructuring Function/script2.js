// destructuring

// function kalkulasi(a,b){
//     return [a + b, a- b, a * b, a / b];
// }

// const jumlah = penjumlahanPerkalian(2,3)[0];
// const kali = penjumlahanPerkalian(2,3)[1];

// const [jumlah, kali] = penjumlahanPerkalian(2,3);
// console.log(jumlah);
// console.log(kali);

// const [tambah, kurang, kali, bagi = 'tidak ada'] = kalkulasi(2,3);
// console.log(bagi);

// function kalkulasi(a,b){
//     return {
//         tambah : a + b,
//         kurang : a - b,
//         kali : a * b,
//         bagi : a / b
//     }
// }

// const {bagi, tambah, kurang, kali} = kalkulasi(2,3);
// console.log(bagi);

// destructuring function arguments
const mhs1 = {
    nama : 'Erwin',
    umur : 20,
    email : 'erwin@gmail.com',
    nilai: { 
        tugas : 80,
        uts : 85,
        uas : 75
    }
}

// function cetakMhs(mhs){
//  return `Nama : ${mhs.nama}, Umur : ${mhs.umur}`;
// }

// console.log(cetakMhs(mhs1));

function cetakMhs({nama, umur, nilai : {tugas, uts, uas}}){
 return `Nama : ${nama}, Umur : ${umur} nilai uas saya adalah ${uas}`;
}
console.log(cetakMhs(mhs1));
