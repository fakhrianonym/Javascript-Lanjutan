// destructuring variable/ assignment

// destructuring array
// 
// const [salam, satu, dua, nama] = perkenalan;

// skipping items
// const [salam, , , nama] = perkenalan
// console.log(nama);

// // swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// return value pada function
// function coba(){
//     return [1,2];
// }

// const [a , b] = coba();
// console.log(a);


// rest parameter
// const [a,... values ] = [1,2,3,4,5];
// console.log(a);
// console.log(c); 

// destructuring object
// const mhs = {
//     nama : 'Erwin',
//     umur : 20
// }
// const {nama , umur} = mhs;
// console.log(nama);

// assignment tanpa deklarasi object
// ({nama,umur} = {nama : 'erwin', umur : 20 });
// console.log(nama);


// assignment ke variable baru
// const mhs = {
//     nama : 'Erwin',
//     umur : 20  
// }

// const {nama : n , umur: u} = mhs;
// console.log(u);


// memberikan default value
// const mhs = {
//     nama : 'Erwin',
//     umur : 20  
// }

// const {nama, umur, email = 'erwin@gmail.com'} = mhs;
// console.log(email);

// memberi nilai default + asign ke variable baru
// const mhs = {
//     nama : 'sandhikagalih',
//     umur : 33,
//     email : 'sandhikagalih@unpas.ac.id' 
// }

// const {nama: n, umur : u, emai : e ='emaildefault@.com'} = mhs;
// console.log(e);


// rest parameter
// const mhs = {
//     nama : 'Erwin',
//     umur : 20,
//     email : 'erwin@gmail.com'
// }

// const {nama, ...values} = mhs;
// console.log(values);


// mengambil field object, setelah dikirim sebagai parameter untuk function
const mhs = {
    id : 234,
    nama : 'Erwin',
    umur : 20,
    email : 'erwin@gmail.com'
}

function getIdMhs({id, nama , umur , email}){ 
    return id, nama , umur;
}

console.log(getIdMhs(mhs));