const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
        grades: [80, 85, 90]
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
        grades: [70, 75, 80]
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
        grades: [90, 95, 100]
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
        grades: [85, 90, 95]
    },
];

const totalCharByEyeColor = characters.reduce((acc, character) =>{
    color = character.eye_color
    if(acc[color]){
        acc[color]++;
    }else{
        acc[color] = 1;
    }
    return acc;
},{});

console.log(totalCharByEyeColor)


const totalNumOfChars =  characters.reduce((acc, character) => acc + character.name.length, 0)
console.log(totalNumOfChars)

//calculate the average of each charactre grade and return  an object wich has name as key and average as value

const averageGrade = characters.reduce((acc, character) => {
    let average = character.grades.reduce((acc, grades) => acc + grades,0) / character.grades.length;
    acc[character.name] = average;
    return acc
},{})

console.log(averageGrade)
