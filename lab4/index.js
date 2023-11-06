const numbers = [1, 2, 3, 4, 5, 21, 26, 76];

function sum(arr){
    return arr.filter(elem=> elem > 20).reduce((acc, current)=>{
        return acc + current
    },0)
}

console.log(sum(numbers))

const stringArr = ['hello', 'airplane', 'train']
function getNewArray( arr ){
    return arr.filter( elem => elem.length >= 5 && elem.includes('a'))
}

console.log(getNewArray(stringArr))

const concat = (...args) => {
    return args.flatMap(arg => (Array.isArray(arg) ? arg : arg.split('')));
  };
  
const result = concat('hi', [1, 2, 3], ['Hello', 'world']);
console.log(result);


