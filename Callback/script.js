// Callback
// Synchronous Callback
// function halo(nama) {
//   alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(callback) {
//   const nama = prompt('Masukkan Nama : ');
//   callback(nama);
// }

// tampilkanPesan(nama =>  alert(`halo, ${nama}`));

// const mhs = [
//   {
//     "nama" : "Tomi Sutarji",
//     "nrp" : "12345678",
//     "email" : "omay123@gmail.com",
//     "jurusan" : "Teknik Informatika",
//     "idDosenWali" : 1
// },
// {
//     "nama" : "Ijum",
//     "nrp" : "12345677",
//     "email" : "Ijum123@gmail.com",
//     "jurusan" : "Teknik Informatika",
//     "idDosenWali" : 2
// },
// {
//     "nama" : "Eko Patrio",
//     "nrp" : "1234567899",
//     "email" : "ekopatrio1@gmail.com",
//     "jurusan" : "Teknik Informatika",
//     "idDosenWali" : 2
// }   
// ];
// console.log('mulai');
// mhs.forEach(m => {
//     for( let i = 0; i < 1000000; i++){
//         let date = new Date();
//     }
//     console.log(m.nama)
// });
// console.log('selesai');

// asynchronous Callback
// function getDataMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function(){
//         if(xhr.readyState === 4){
//             if(xhr.status === 200){
//                 success(xhr.response);
//             }else if (xhr.status === 404){
//                 error();
//         }
//     }
// }

// xhr.open('GET', url,);
// xhr.send();
// }
// console.log('mulai')
// getDataMahasiswa('data/mahasiswa.json', result => {
//     const mhs = (JSON.parse(result));
//     mhs.forEach(m => console.log(m.nama));
// }, () => {

// });
// console.log('selesai')

// JQuery
console.log('mulai');
$.ajax({
    url: 'data/mahasiswa.json',
    success : (mhs) => {
        mhs.forEach(m => console.log(m.nama));
    },
    error : (e) => {
        console.log(e.responseText);
    }   
});
console.log('selesai');