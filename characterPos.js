function countLetters(str) {
    var explodedStr = str.toLowerCase().split(" ").join("").split('')
    console.log(explodedStr)

    var obj = {}
    for (i of explodedStr) {
        console.log(i)
        if (obj[i] === undefined) {
            obj[i] = 1
        } else {
            obj[i]++
        }
    }

    return obj

}

console.log(countLetters("Learning to Code"))