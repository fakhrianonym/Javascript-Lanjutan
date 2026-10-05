// // html fragments
// const mhs = {
//     nama : 'Muhammad Fakhri',
//     umur : 25,
//     nrp : '1234567890',
//     email : 'fakhri@gmail.com',
// };

// const el =`<div class="mhs">
//     <h2>Nama : ${mhs.nama}</h2>
//     <span class="nrp"> ${mhs.nrp}</span>
// </div>`;

// document.body.innerHTML = el;
// document.querySelector('.mhs').innerHTML = el;

// 2.Looping
// const mhs = [
//     {
//         nama : 'Muhammad Fakhri',
//         email : 'fakhri@gmail.com',
//     },
//     {
//         nama : 'doody ferdiansyah',
//         email : 'ferdiansyah@gmail.com',
//     },
//     {
//         nama :  'erik',
//         email : 'erik@gmail.com',
//     }
// ];

// const el = `<div class="mhs">
// ${mhs.map(m => `<ul>
//     <li>Nama : ${m.nama}</li>
//     <li>Email : ${m.email}</li>
//     </ul>`).join('')};

// </div>`;

// document.body.innerHTML = el;


// 3.Nested
// Html Fragments bersarang

const mhs = {
    nama : 'Muhammad Fakhri',
    semester : 5,
    mataKuliah : 
    ['Rekayasa Web',
     'Analisis dan Perancangan Sistem Informasi',
     'Perancangan Sistem Informasi',
     'Perancangan Sistem Berorientasi Object', 
    ]
};

function cetakMataKuliah(mataKuliah) {
    return `
    <ol>
    ${mataKuliah.map(m => `<li>${m}</li>`).join('')}
    </ol>
    `;
}

const el = `<div class="mhs">
    <h1>${mhs.nama}</h1>
    <span class="semester">Semester : ${mhs.semester}</span>
    <h4>Mata Kuliah: </h4>
    ${cetakMataKuliah(mhs.mataKuliah)}
</div>`;

document.body.innerHTML = el;
