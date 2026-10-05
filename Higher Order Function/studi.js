// ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));
// pilih hanya yang 'Javascript Lanjutan'
let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))
// ambil durasi masing-masing video
.map(item => item.dataset.duration)
//  ubah durasi menjadi int, ubah menit menjadi detik
.map(waktu => {
    // 10:30 -> [10, 30] split
    const parts = waktu.split(':').map(part => parseFloat(part));
    return parts[0] * 60 + parts[1];
})
//  jumlahkan semua detik
.reduce((total, detik) => total + detik, 0);

// ubah format jadi jam menit detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

// simpan di Dom
const jmlVideo = document.querySelector('.jumlah-video');
jmlVideo.textContent = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const totalDurasi = document.querySelector('.total-durasi');
totalDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik.`;






