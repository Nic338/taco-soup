var harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];

for (var i = 0; i < harryPotterTitles.length; i++){
 //   console.log(`Harry Potter ${harryPotterTitles[i]}`);
}
var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]

let numberOfAStudents = 0;
let numberOfBStudents = 0;
let numberOfCStudents = 0;
let numberOfDStudents = 0;
let mostCommonGradeCount = 0;
let mostCommonGrade = ""
let totalGradePoints = 0;

for (i = 0; i < grades.length; i++){
    if (grades[i] >= 70 && grades[i] <= 76) {
       // console.log("You got a D");
       numberOfDStudents++
    }   
    else if (grades[i] >= 77 && grades[i] <= 84) {
        //console.log("You got a C");
        numberOfCStudents++
    }
    else if (grades[i] >= 84 && grades[i] <= 92) {
        //console.log("You got a B");
        numberOfBStudents++
    }
    else if (grades[i] >= 93 && grades[i] <= 100) {
        //console.log("You got an A");
        numberOfAStudents++
    }
}

for (i = 0; i < grades.length; i++){
    if (mostCommonGradeCount < numberOfDStudents){
        mostCommonGradeCount = numberOfDStudents
        mostCommonGrade = "D"
    } else if (mostCommonGradeCount < numberOfCStudents){
        mostCommonGradeCount = numberOfCStudents
        mostCommonGrade = "C"
    } else if (mostCommonGradeCount < numberOfBStudents){
        mostCommonGradeCount = numberOfBStudents
        mostCommonGrade = "B"
    } else if (mostCommonGradeCount < numberOfAStudents){
        mostCommonGradeCount = numberOfAStudents
        mostCommonGrade = "A"
    };
}


// console.log(`The most common letter grade is ${mostCommonGrade}`)
// console.log(`There are ${numberOfAStudents} As in this class`)
// console.log(`There are ${numberOfBStudents} Bs in this class`)



let total = 0;
for (let i = 0; i < grades.length; i++) {
  totalGradePoints += grades[i]
}

averagePercentageGrade = totalGradePoints / grades.length
// console.log(`The average percentage grade is ${Math.floor(averagePercentageGrade)}%`)


var evenNumArray = ""

for (let i = 2;; i +=2){
    evenNumArray = evenNumArray += `${i} ` ;
    if(i >= 8){
    break;
}}

    // console.log(`${evenNumArray} Who do we appreciate?!`);





var sentenceArray = ["the", "cow", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

let cowSentence = ""

for (let i = 0; i < sentenceArray.length; i++) {
        cowSentence = cowSentence += `${sentenceArray[i]} `
        if ( (i + 1) % 3 === 0 && (i + 1) != sentenceArray.length){
        cowSentence = cowSentence += 'MOO '    
        

        }
   }
//    console.log(cowSentence)


const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

console.log(`${beatles.members[0].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[0].birth}. He contributed heavily to the ${beatles.albums[1]} Album.

Please note that these values are not correct. They're just placeholders that you will need to correctly fill out.`)



