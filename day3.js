function main() {
    var N = parseInt(readLine());
    if (N%2 != 0 || (N%2 == 0 && (N >= 6 && N <= 20))) {
    	console.log('Weird')
    } else if (N%2 == 0 && ((N >= 2 && N <= 5) || N > 20)) {
    	console.log('Not Weird')
    } else {
    	console.log('Error')
    }
}

main()