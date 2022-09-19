const dictionary = 'tour'
const stringSequence = {
 t: [0],
 o: [1][2],
 s: [3],
 u: [4],
 r: [5]
}

function checkWord(object, str) {
    for (const i of str) {
        if (object[i]) {

        } else {
            return false
        }
    }
}

checkWord(stringSequence, dictionary)