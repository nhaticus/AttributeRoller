const defaultAttributeScores = [15, 14, 13, 12, 10, 8];

class Player {
    constructor(characterName = 'Naruto') {
        this.name = characterName;
        this.attributes = {
            strength: 0,
            dexterity: 0,
            constitution: 0,
            intelligence: 0,
            wisdom: 0,
            charisma: 0
        };
        let shuffledResult = shuffleArray(defaultAttributeScores);
        for (const [key, value] of Object.entries(this.attributes)) {
            let attributeValue = shuffledResult.pop();
            this.attributes[key] = attributeValue;
        }
    }

    rollAttributes() {
        for (const key in this.attributes) {
            let results = diceRoller(4, 6);
            results.sort(function(a, b){return a- b});
            results.shift();
            let sum = sumArrayElements(results);
            this.attributes[key] = sum;
        }
    }

    printPlayer() {
        console.log(`NAME: ${this.name}`);
        for (const [key, value] of Object.entries(this.attributes)) {
            console.log(`${key.slice(0,3).toUpperCase()}: ${value}`);
        }
    }
}

const player01 = new Player();
player01.printPlayer();
const player02 = new Player('Son Goku');
player01.rollAttributes();
player02.printPlayer();

function shuffleArray(targetArray) {
    let shuffled = Array.from(targetArray);
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = temp;
    }
    return shuffled;
}

function diceRoller(times, sides) {
    let result = [];
    for (let i = 0; i < times; i++) {
        result.push(Math.floor(Math.random() * sides + 1));
    }

    return result;
}

function sumArrayElements(array) {
    return array.reduce((total, currentNumber) => total + currentNumber);
}

