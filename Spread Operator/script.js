// spread operator
// memecah iterable menjadi single element

// console.log(...mhs[0]);

// // menggabungkan 2 array
// const mhs = ['sandhikagalih', 'erwin', 'ewing'];
// const dosen = ['ade', 'hendra', 'wanda'];
// const orang  = [...mhs, 'aji',  ...dosen];
// // const orang = mhs.concat(dosen);
// console.log(orang);


// // mengcopy array
// const mhs = ['sandhikagalih', 'erwin', 'ewing'];
// // const mhs1 = mhs;
// // mhs[0] = 'fajar';

// const mhs1 = [...mhs];
// mhs1[0] = 'fajar';
// console.log(mhs);

// const liNama = document.querySelectorAll('li');
// // const mhs = [];
// // for (let i = 0; i < liNama.length; i++) {
// //     mhs.push(liNama[i].textContent);
// // }
// // console.log(mhs);
// const mhs = [...liNama].map(n => n.textContent);
// console.log(mhs)

const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;