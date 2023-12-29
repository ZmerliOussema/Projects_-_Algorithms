// Push Front
function pushFront(array, value) {
    var myArray = []
    myArray.push(value)
    for (var i=0; i<array.length; i++) {
        myArray.push(array[i])
    }

    console.log(myArray);
}

// pushFront([5, 7, 2, 3], 8)

// Pop Front
function popFront(array) {
    var reverseArr = []
    var finalArr = []
    for (var i=array.length-1; i>=0; i--) {
        reverseArr.push(array[i])
    }
    const poppped = reverseArr.pop()
    for (var i=1; i<array.length; i++) {
        finalArr.push(array[i])
    }
    console.log('removed value: ' + poppped)
    console.log(`The new array: [${finalArr}]`)
}

// popFront([0, 5, 10, 15])

// Insert At
function insertAt(array, index, value) {
    var newArray = []
    for (var i=0; i<array.length; i++) {
        if (i == index) {
            newArray.push(value)
        }
        newArray.push(array[i])
    }

    console.log(newArray)
}

// insertAt([9, 33, 7], 1, 42)

// Bonus: Remove At
function removeAt(array, index) {
    var newArray = []
    var poppped = null
    for (var i=0; i<array.length; i++) {
        newArray.push(array[i])
        if (i == index) {
            poppped = newArray.pop()
        }
    }

    console.log('Removed value: ' + poppped)
    console.log(`The new array: [${newArray}]`)
}

// removeAt([8, 20, 55, 44, 98], 3)

