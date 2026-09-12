function countLetter(str, letter) {
    var count = 0;

    for (var i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }

    return count;
}

document.write(countLetter("JSResources.com", "o"));