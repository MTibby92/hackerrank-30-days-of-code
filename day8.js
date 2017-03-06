function processData(input) {
    var arr = input.split('\n')
    var n = parseInt(arr.shift())
    var inputs = []
    for (var i=0; i < n; i++) {
    	inputs.push(arr.shift())
    }

    var dict = {}
    for (var item in inputs) {
    	var entry = inputs[item]
    	var entryArray = entry.split(' ')
    	dict[entryArray[0]] = entryArray[1]
    }

    for (var query in arr) {
    	if (dict.hasOwnProperty(arr[query])) {
    		console.log(arr[query] + '=' + dict[arr[query]])
    	} else {
    		console.log('Not found')
    	}
    }
} 