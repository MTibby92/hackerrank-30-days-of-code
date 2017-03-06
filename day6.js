function processData(input) {
    var inputArr = input.split('\n')
    var cases = parseInt(inputArr[0])
    var word = ''
    var wordArr = ''
    for (var i=1; i <= cases; i++) {
    	word = inputArr[i]
    	wordArr = word.split('')
    	var even = ''
    	var odd = ''
    	var j=0
    	var k=1
    	while (j < wordArr.length) {
    		var even = even.concat(wordArr[j]) 
    		j = j+2
    	}
    	while (k < wordArr.length) {
    		var odd = odd.concat(wordArr[k])
    		k = k+2
    	}
    	var output = even + ' ' + odd
    	console.log(output)
    }
} 