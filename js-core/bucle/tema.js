var w = 20;
var h = 10;
for (let i = 0; i < h + 2; i++) {
    for (let j = 0; j < w + 2; j++) {
        if (i == 0 || i == h + 1 || j == 0 || j == w + 1) {
            document.write("#")
        } else {
            document.write("0")
        }
    }
    document.write("<br>")
}