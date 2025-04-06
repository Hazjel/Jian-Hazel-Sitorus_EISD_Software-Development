function hitungKembalian(totalPembayaran, totalBelanja) {
    let kembalian = totalPembayaran - totalBelanja;

    // Denominasi uang yang tersedia
    const denominasi = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 100];
    const hasil = {};

    // Hitung berapa banyak uang yang dibutuhkan untuk setiap denominasi
    for (let i = 0; i < denominasi.length; i++) {
        let denom = denominasi[i];
        
        if (kembalian >= denom) {
            let jumlah = 0;

            while (kembalian >= denom) {
                kembalian -= denom;
                jumlah++;
            }

            if (jumlah > 0) {
                hasil[denom] = jumlah;
            }
        }
    }

    return hasil;
}

// Contoh penggunaan
console.log(hitungKembalian(10000, 7500));
console.log(hitungKembalian(5000, 1100));
console.log(hitungKembalian(178000, 90500));
