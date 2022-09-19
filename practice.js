const dictionary = 'tour'
const stringSequence = {
 t: [0],
 o: [1][2],
 s: [3],
 u: [4],
 r: [5]
}

function checkWord(word, object) {
    for (const i of word) {
        if (object[i]) {

        } else {
            return false
        }
    }
    return true
}

checkWord(stringSequence, dictionary)