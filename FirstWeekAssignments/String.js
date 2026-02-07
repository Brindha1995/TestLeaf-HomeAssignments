

//Example 1: Return the length of last word
    let input = "Hello World"
    let splitted = input.split(" ")
    //console.log(splitted)
    let lastWord = splitted[splitted.length-1]
    //console.log(lastWord)
    console.log(lastWord.length)

//Example 2
    let word = " fly me  to  the  moon "
    //console.log(word)
    let trimmedWord = word.trim()
    //console.log(trimmedWord)
    let splittedWord = trimmedWord.split(" ")
    //console.log(splittedWord)
    let lastWord2 = splittedWord[splittedWord.length-1]
    //console.log(lastWord2)
    console.log(lastWord2.length)

//Example 3
let w1 = "listen"
let w2 = "SILENT" //If we give Word here o/p :is Not Aangram

let s1 = w1.toLowerCase().split('').sort().join()
let s2 = w2.toLowerCase().split('').sort().join()
if (s1 == s2)
{
    console.log("This is Anagram")
}
else
    console.log("This is not a Anagram")



