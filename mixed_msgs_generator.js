/*
Provide random mixed inspirational messages based on the priorities: family, life, for the day, strength
*/

/*
Create an object of arrays to store the messages
*/

let randomMsgsContainer = {
    priority: ['family', 'life', 'for the day', 'strength'],
    focus: ['Being loved, no matter what', 'Everything will be ok', 'Inner peace', 'Emotions', 'Balance your mind'],
    action: ['Take deep breath', 'Do not overthink', 'Make yourself a priority', 'Set yourself free', 'Look for sun inside you']
};

/**
 * Arrow function to generate random number for the index of the component of the array of the object
 */

const generateRandomNumber = num => {
    let randomNum = Math.floor(Math.random() * num);
    return randomNum;
}


/*
initiliaze array to store the generated message
*/
let randomMsg = [];


/* iterate through the object with a switch case that can select 
and format each of the different message components
*/

for (let msgComponent in randomMsgsContainer) {

    let mgsComponentLength = randomMsgsContainer[msgComponent].length;
    let idxCompon = generateRandomNumber(mgsComponentLength);


    switch (msgComponent) {
        case 'priority':
            randomMsg.push(`Your priority now is "${randomMsgsContainer[msgComponent][idxCompon]}."`);
            break;
        case 'focus':
            randomMsg.push(`Your focus should be: "${randomMsgsContainer[msgComponent][idxCompon]}."`);
            break;
        case 'action':
            randomMsg.push(`This is what you should do: "${randomMsgsContainer[msgComponent][idxCompon]}."`);
            break;
        default:
            randomMsg.push('There is no enough information');

    }
}
/*
Format the message so it would be as string output on different lines
*/

const inspirationalMsgQuote = msg => {
    console.log(randomMsg.join('\n'));
}

inspirationalMsgQuote(randomMsg);