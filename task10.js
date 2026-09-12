function checkPalindrome(str) {
    var reverse = str.split("").reverse().join("");

    if (str === reverse) {
        return "Palindrome";
    } else {
        return "Not a Palindrome";
    }
}

document.write(checkPalindrome("madam"));