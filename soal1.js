function analisisRating(rating) {
    let total = 0;
    let lowest = rating[0];
    let highest = rating[0];

    for (let i = 0; i < rating.length; i++) {
        total += rating[i];

        if (rating[i] < lowest) {
            lowest = rating[i];
        }
        if (rating[i] > highest) {
            highest = rating[i];
        }
    }

    let average = total / rating.length;
    average = parseFloat(average.toFixed(1)); // 1 angka di belakang koma, lalu diubah ke float
    return [lowest, highest, average];
}

// test case
console.log(analisisRating([4.5, 2.0, 1.5, 3.0, 2.5, 4.0, 5.0, 3.5, 2.0, 1.0]));
console.log(analisisRating([5, 4, 2.5, 5, 3.6, 1.1, 3.6, 4, 4.2, 1.5]));
