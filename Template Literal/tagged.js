// Tagged Templates
// const nama = 'Sandhika Galih';
// const umur = 33;

// function coba (strings,...values){
// //    let result = ''
// //    strings.forEach((str,i) => {
// //    result += `${str} ${values[i] || '' }'`;
// // });
// //  return result;
//   return strings.reduce((result, str, i) => `${reult}${str}${values[i] || 
//     ''}`, '');
// }

// const str = coba`Halo, nama saya ${nama} , saya ${umur} tahun.`
// console.log(str);

// Highlight
// const nama = 'Sandhika Galih';
// const umur = 33;
// const email = 'sandhikagalih@gmail.com';
// const umur2 = umur + 1;

// function highlight(strings,...values){
//   return strings.reduce((result, str, i) => `${result}${str}<span class="h1"> 
//   ${values[i] || 
//     ''} </span>,`, '');
// }

// const str = highlight`Halo, nama saya ${nama} , saya ${umur} tahun. dan email saya ${email} dan tahun depan saya ber umur  ${umur2} `
// document.body.innerHTML = str;