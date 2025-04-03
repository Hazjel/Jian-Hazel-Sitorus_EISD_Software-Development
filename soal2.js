function isPalindrome(str) {
    str = str.toLowerCase()
    
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return "suka blyat";
        }
        left++;
        right--;
    }

    return "eureeka!"
}

// test case
console.log(isPalindrome("Angsa"));
console.log(isPalindrome("KataK"));
console.log(isPalindrome("kasur empuk"));
console.log(isPalindrome("Aku Suka Kamu"));
console.log(isPalindrome("Ibu Ratna antar ubi"));
