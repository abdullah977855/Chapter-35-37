function longestWord(str) {
    var words = str.split(" ");
    var longest = "";

    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }

    return longest;
}

document.write(longestWord("Web Development Tutorial"));