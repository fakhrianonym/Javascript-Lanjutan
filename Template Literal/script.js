// 

// // embedded expvoid
// console.log(`${1 + 1}`)
// console.log(`${alert('halo!')}`);
// const x = 11;
// console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);


// html fragments
const mhs = {
    nama : 'Muhammad Fakhri',
    umur : 25,
    nrp : '1234567890',
    email : 'fakhri@gmail.com',
};

const el =`<div class="mhs">
    <h1>Nama : ${mhs.nama}</h1>
    <span class="nrp">${mhs.nrp}</span>
</div>`;

console.log(el);