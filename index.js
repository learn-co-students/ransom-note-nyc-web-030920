
function buildHistogram(array){
    const hist = {};

    array.forEach(l => {
        if(hist[l]){
            hist[l]++;
        }
        else{
            hist[l] = 1;
        }
    });

    return hist;
}

function checkNextLetter(hist, array, lastIndex, letter){
    
    if(hist[letter] > 0){
        hist[letter]--;
        return lastIndex;
    }
    else{
        for(let i = lastIndex+1; i < array.length; i++){
            const l = array[i];

            if(l === letter){
                return i;
            }

            if(hist[l] > 0){
                hist[l]++;
            }
            else{
                hist[l] = 1;
            }
        }
    }

    return array.length;
}

function canBuildNote(magazine, note){

    const noteLetters = note.split("");

    console.log("NL", noteLetters);

    const hist = {};
    let magazineIndex = -1;

    for(let i = 0; i < noteLetters.length; i++){
        const letter = noteLetters[i];
        console.log("hist", hist, letter);
        magazineIndex = checkNextLetter(hist, magazine, magazineIndex, letter);
        if(magazineIndex === magazine.length){
            return false;
        }
    }

    return true;

    /*
    const hist = buildHistogram(magazine);

    const noteLetters = note.split("");

    for(let i = 0; i < noteLetters.length; i++){
        const letter = noteLetters[i];

        if(hist[letter] && hist[letter] > 0){
            hist[letter]--;
        }
        else{
            return false;
        }
    }

    return true;
    */
}