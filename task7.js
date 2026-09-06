function counting(strtnum, endnum) {
    document.write("Start Input Number: " + strtnum + "<br>");
    document.write("End Input Number: " + endnum + "<br>");
    document.write("Counting:" + "<br>");
    for (let i = strtnum; i <= endnum; i++) {
        document.write(i + "<br>")
    }
}

counting(2, 10)