// $.ajax({
//   url: 'http://www.omdbapi.com/?apikey=dca61bcc&s=avengers',
//   success: movies => console.log(movies)
// });

// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if (xhr.status === 200) {
//     if (xhr.readyState === 4) {
//       console.log(JSON.parse(xhr.response));
//     }
//   } else {
//     console.log(xhr.responseText);
//   }
// }

// xhr.open('get', 'http://www.omdbapi.com/?apikey=dca61bcc&s=avengers');
// xhr.send();

// fetch('http://www.omdbapi.com/?apikey=dca61bcc&s=avengers')
//   .then(response => response.json())
//   .then(response => console.log(response));

// promise
// Object yang mempresentasikan keberhasilan  / kegagalan sebuh event yang asynchronous di masa yang akan datang
// janji (terpenuhi / ingkar)
// states (fullfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch )


// contoh
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         resolve('ditepati');
//     } else {
//         reject('ingkar janji');
//     }
// });

// janji1
// .then(response => consoole.log('OK ! : ' + response))
// .catch(response => console.log('NOT OK! : ' + response));


// contoh 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//     if (ditepati){
//         setTimeout(() => {
//             resolve('ditepati');
//         }, 2000);
//     }else{
//         setTimeout(() => {
//             reject('ingkar janji');
//         }, 2000);
//     }
// });

// console.log('mulai');
// console.log(janji2.then(() => console.log(janji2)));
// janji2
//   .finally(() => console.log('selesai menunggu'))
//   .then(response => console.log('OK ! : ' + response))
//   .catch(response => console.log('NOT OK! : ' + response));
// console.log('selesai');

// promise.all()

const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'Avengers',
            sutradara: 'Eko',
            pemeran: 'doody, erik'
        }])
    }, 2000);
});

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota : 'Jakarta',
            temp : 28,
            kondisi : 'cerah berawan'
        }]);
    }, 500);
});

// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));

Promise.all([film, cuaca])
// .then(response => console.log(response));
.then(response => {
    const [film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
})