// // Counting Duplicates

// function duplicateCount(text){
//   //...
//   let s = ""
//   for (let i = 0; i < text.length; i++) {
//     for (let j = i + 1; j < text.length; j++) {
//       if((text[i].toLowerCase() === text[j].toLowerCase()) &&
//       (s.toLowerCase().includes(text[i].toLowerCase()) === false)) {
//         s = s + text[i]
//       }
//     }
//   }
//   return s.length
// }
// console.log(duplicateCount('fejiwa332t32o'))



// // Persistent Bugger
// // https://www.codewars.com/kata/persistent-bugger/train/javascript

// // define the function
// const persistence = (num) => {
    
//     // initial filter to ensure it's a number
//     if (typeof(num) === 'number') {
        
//         // initial parameters
//         let count = 0
//         let mult = num
//         let multStr = mult.toString()
//         let newMult = 1
//         let stop = false
        
//         // while loop to count iterations
//         while (stop === false){
            
//             // if more than single digit, do the following:
//             if (mult >= 10) {
               
//                 // iterate through and multiply numbers
//                 for (let i = 0; i < multStr.length; i++) {
//                     newMult = newMult * multStr[i]
//                 }
                
//                 // and define the new multiplied number and increase count by 1
//                 count++
//                 mult = newMult
//                 multStr = mult.toString()
//                 newMult = 1
//             }
            
//             // if single digit, stop the while loop
//             else {
//                 stop = true
//             }
//         }
        
//         // return the count from iterating through
//         return count
//     }
// }
// console.log(persistence(999))



// // Take a number and sum its digits raised to the consecutive power and Eureka
// // https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/javascript

// function sumDigPow(a, b) {
//     let range = []
//     let solutions = []
//     if (a < b) {
//         for (let i = a; i <= b; i++) {                  
//             range.push(i.toString())
//             let numStr = range[i - a]
//             let splitArray = numStr.split("")
//             let calculatedNum = 0
//             for (let j = 0; j < splitArray.length; j++) {
//                 calculatedNum += splitArray[j]**(j+1)
//             }
//             if (numStr === calculatedNum.toString()) {
//                 solutions.push(calculatedNum)
//             }
//         }
//     }
//     return solutions
// }
// console.log(sumDigPow(90,100))

// // review w/ ryan on above
// // function splitNumber(num) {
// //     // let splitArr = num.toString().split("")
// //     let ans = 0
// //     let splitArr = num.toString().split("").map(element => Number(element))
// //     for (let i = 0; i < splitArr.length; i++) {
// //         ans += splitArr[i]**(i+1)
// //     }
// //     return ans == num
// //     if (ans === num) {
        
// //     }
// // }
// // console.log(splitNumber(89))



// // Mumbling
// // https://www.codewars.com/kata/mumbling/train/javascript

// function accum(s) {
//     var sInitArr = s.toLowerCase().split("")
//     let sFinArr = []
//     for (let i = 0; i < sInitArr.length; i++) {
//         let newStr = sInitArr[i].repeat(i+1)
//         newStr = newStr[0].toUpperCase() + newStr.slice(1)
//         sFinArr.push(newStr)
//     }
//     return sFinArr.join("-")
// }
// console.log(accum("feFHWaio"))



// // Consecutive strings
// // https://www.codewars.com/kata/consecutive-strings/train/javascript

// function longestConsec(strarr, k) {
//     var n = strarr.length
//     var nLengthArr = strarr.map(element => element.length)
//     let numPossAnswers = n - k + 1
//     let ansStr = ""
//     if (n >= k && k > 0 && n > 0) {
//         let cumStrLengthArr = []
//         for (let i = 0; i < numPossAnswers; i++) {
//             let cumStrLength = 0
//             for (let j = 0; j < k; j++) {
//                 cumStrLength += strarr[j+i].length
//             }
//             cumStrLengthArr.push(cumStrLength)
//         }
//         let ansIndex = cumStrLengthArr.indexOf(Math.max(...cumStrLengthArr))
//         for (let s = 0; s < k; s++) {
//             ansStr += strarr[s + ansIndex]
//         }
//         return ansStr
//     }
//     else {
//         return ansStr
//     }
// }
// console.log(longestConsec(['fewg4344yb54yb4ag','32t','gag3jajia','aj'], 6))



// // Basic Mathematical Operations
// // https://www.codewars.com/kata/basic-mathematical-operations/train/javascript

// function basicOp(operation, value1, value2) {
//     if (operation === '+') {
//         return value1 + value2
//     }
//     else if (operation === '-') {
//         return value1 - value2
//     }
//     else if (operation === '*') {
//         return value1 * value2
//     }
//     else if (operation === '/') {
//         return value1 / value2
//     }
// }
// console.log(basicOp('/', 3, 9))



// // Playing with digits
// // https://www.codewars.com/kata/playing-with-digits/train/javascript/5dc3745c2c135e00328c3186

// function digPow(n, p){ 
//     let k = -1
//     let total = 0
//     let nStr = n.toString()
//     for (let i = 0; i < nStr.length; i++) {
//         total += nStr[i]**(p+i)
//         k = total/n
//     }
//     if (Number.isInteger(total/n) && total > 0) {
//         return k
//     }
//     else {
//         return -1
//     }
// }
// console.log(digPow(46288, 3))



// // Sum of differences in array
// // https://www.codewars.com/kata/sum-of-differences-in-array/train/javascript

// function sumOfDifferences(arr) {
//     let desc = arr.sort(function(a, b){return b-a})
//     let calc = 0
//     for (let i = 0; i < arr.length-1; i++) {
//         calc += (arr[i]-arr[i+1])
//     }
//     return calc
// }
// console.log(sumOfDifferences([-3,-2,-1]))



// // Triple trouble
// // https://www.codewars.com/kata/triple-trouble-1/train/javascript

// function tripledouble(num1, num2) {
//     let num1Str = num1.toString()
//     let num2Str = num2.toString()
//     let num1Arr = []
//     for (let i = 0; i < num1Str.length; i++) {
//         if (num1Str[i] === num1Str[i+1] && num1Str[i] === num1Str[i+2]) {
//             num1Arr.push(num1Str[i])
//         }
//     }
//     for (let j=0; j < num2Str.length; j++) {
//         if (num2Str[j] === num2Str[j+1] && num1Arr.includes(num2Str[j])) {
//             return 1
//         }
//     }
//     return 0
// }
// console.log(tripledouble(15212222243331,3222231524))

// // Sum of Pairs
// // https://www.codewars.com/kata/sum-of-pairs/train/javascript

// var sum_pairs=function(ints, s){
//     let lowIndexArr = []
//     let highIndexArr = []
//     let finalAns = []
//     for (let iter1 = 0; iter1 < ints.length - 1; iter1++) {
//         // let nextIndex = ints.indexOf(s - iter1)
//         // if(nextIndex != -1){
//         //     lowIndexArr.push(iter1)
//         //     highIndexArr.push(nextIndex)
//         // }
//         for (let iter2 = 0; iter2 < ints.length - iter1 - 1; iter2++) {
//             if (ints[iter1] + ints[iter1+iter2+1] === s) {
//                 lowIndexArr.push(iter1)
//                 highIndexArr.push(iter1 + iter2 + 1)
//                 // console.log(lowIndexArr)
//                 // console.log(highIndexArr)
//             }
//         }
//     }
//     let ansIndex = highIndexArr.indexOf(Math.min(...highIndexArr))
//     // console.log(ansIndex)
//     if (ansIndex !== -1) {
//         let finalLow = ints[lowIndexArr[ansIndex]]
//         let finalHigh = ints[highIndexArr[ansIndex]]
//         let finalAns = [finalLow, finalHigh]
//         // finalAns.push(lowIndexArr[ansIndex])
//         // finalAns.push(highIndexArr[ansIndex])
//         // finalAns = [ints[lowIndexArr[ansIndex]], ints[highIndexArr[ansIndex]]]
//         // console.log(finalAns)
//         return finalAns
//     }
// }
// var l1= [1, 4, 8, 7, 3, 15];
// var l2= [1, -2, 3, 0, -6, 1];
// var l3= [20, -13, 40];
// var l4= [1, 2, 3, 4, 1, 0];
// var l5= [10, 5, 2, 3, 7, 5];
// var l6= [4, -2, 3, 3, 4];
// var l7= [0, 2, 0];
// var l8= [5, 9, 13, -3];
// console.log(sum_pairs(l4, -1))



// // find all primes
// // id prime numbers

// var idPrime = (num) => {
//     let primes = [2]
//     for (let i = 3; i <= num/3; i++) {
//         for (let j = 0; j < primes.length; j++) {
//             if (num % primes[j] !== 0) {
//                 primes.push(i)
//             }
//         }
//     }
    
    
// }
// console.log(idPrime(num))



// // Who likes it?
// // https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

// function likes(names) {
//     let first = ''
//     let second = 'like'
//     if (names.length === 0) {
//         first = 'no one'
//         second = 'likes'
//     }
//     else if (names.length === 1) {
//         first = names[0]
//         second = 'likes'
//     }
//     else if (names.length === 2) {
//         first = `${names[0]} and ${names[1]}`
//     }
//     else if (names.length === 3) {
//         first = `${names[0]}, ${names[1]} and ${names[2]}`
//     }
//     else if (names.length > 3) {
//         first = `${names[0]}, ${names[1]} and ${names.slice(2).length} others`
//     }
//     return `${first} ${second} this`
// }
// console.log(likes([]))
// console.log(likes(['feagewa']))
// console.log(likes(['one','two']))
// console.log(likes(['one','two', 'three']))
// console.log(likes(['one','two', 'three', 'four', 'five']))



// // Ones and Zeros
// // https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript

// const binaryArrayToNumber = arr => {
//     let binary = [1]
//     if (arr.length >= 1) {
//         for (let j = 0; j < arr.length - 1; j++) {
//             binary.unshift(2 * (binary[0]))
//         }
//     }
//     let ansSum = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 1) {
//             ansSum += arr[i] * binary[i]
//         }
//     }
//     return ansSum
// }
// console.log(binaryArrayToNumber([1]))
// console.log(binaryArrayToNumber([0,0,1,0]))
// console.log(binaryArrayToNumber([1,1,1,1]))
// console.log(binaryArrayToNumber([0,1,1,0]))



// // Shortest Word
// // https://www.codewars.com/kata/shortest-word/train/javascript

// function findShort(s){
//     let arr = s.split(" ")
//     let lengths = []
//     for (let i=0; i<arr.length; i++) {
//         lengths.push(arr[i].length)
//     }
//     return(Math.min(...lengths))
// }



// // Complementary DNA
// // https://www.codewars.com/kata/complementary-dna/train/javascript

// function DNAStrand(dna){
//     let dnaArr1 = ['A','T','C','G']
//     let dnaArr2 = ['T','A','G','C']
//     let newStr = ''
//     for (let i=0; i<dna.length; i++) {
//         newStr += dnaArr2[dnaArr1.indexOf(dna[i])]
//     }
//     return newStr
// }