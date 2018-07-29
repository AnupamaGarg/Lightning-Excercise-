// [45, "I", true, null, "am", 3.56, "a", undefined, { catchphrase: "Oh hai, Mark"}, "JS", "rockstar"] 

// Lightning Exercise Loop over every item in this array and return a new array that contains only the strings. Log out the result.

let array = [45, "I", true, null, "am", 3.56, "a", undefined, { catchphrase: "Oh hai, Mark"}, "JS", "rockstar"]

const strings = array.filter(item => {
    const isString = (typeof item === 'string')
    return isString;
})

console.log(strings)

// ---------------------------------------------anotherSolution----------------

let array = [45, "I", true, null, "am", 3.56, "a", undefined, { catchphrase: "Oh hai, Mark"}, "JS", "rockstar"]

const strings = array.filter(item => {
    return typeof item === 'string';
})

console.log(strings)

// ---------------------------------------------anotherShorterSolution----------------------

let array = [45, "I", true, null, "am", 3.56, "a", undefined, { catchphrase: "Oh hai, Mark"}, "JS", "rockstar"]

const strings = array.filter(item => typeof item === 'string')

console.log(strings)