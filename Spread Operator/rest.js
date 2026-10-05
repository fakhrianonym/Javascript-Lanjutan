// rest parameter

// function myFunc(...myArgs){
    // return  `a = ${a}, ${b}, myArgs = ${myArgs}`;
    // return myArgs;
    // return Array.from(arguments);
    // return [...arguments];

// }

// console.log(myFunc(1,2,3,4,5))

// function jumlahkan(...angka){
    // let total = 0;
    // for(const a of angka){
    //     total += a;
    // }

    // return total;
//     return angka.reduce((a,b) => a + b);

// }


// console.log(jumlahkan(1,2,3,4,5));

// array destructuring
// const kelompok1 = ['sandhikagalih', 'erwin', 'ewing', 'hendra', 'fauzan'];
// const [ketua, wakil,...anggota] = kelompok1;
// console.log(anggota);


// object destructuring
// const team = {
//     pm : 'sandhikagalih',
//     frontEnd1 : 'erwin',
//     frontEnd2 : 'ewing',
//     backEnd : 'hendra',
//     ux : 'tomi',
//     devOps : 'fauzan'
// }

// const {pm, ...myTeam} = team;
// console.log(myTeam)

// filtering
// function filterBy(type, ...values){
//  return values.filter(v => typeof v === type);
// }


// console.log(filterBy('boolean', 1,2, 'sandhika', false, 10, true, 'doddy'));