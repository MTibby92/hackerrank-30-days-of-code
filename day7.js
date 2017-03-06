function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);

    var str = ''
    for (var i=0; i < n; i++) {
    	str = str.concat(arr.pop())
    	str = str.concat(' ')
    }
    console.log(str.trim())
}