const userList = [
  {
    id: 1,
    username: 'john',
    sex: 1,
    email: 'john@163.com'
  },
  {
    id: 2,
    username: 'jerry',
    sex: 1,
    email: 'jerry@163.com'
  },
  {
    id: 3,
    username: 'nancy',
    sex: 0,
    email: ''
  }
];
function keyByUsernameReducer(acc, person) {
  console.log(acc);//每次运行的结果再传入 第一次为{}
  return {
    ...acc,
    [person.id]: person
  };
}
const userObj = userList.reduce(keyByUsernameReducer, {});
console.log(userObj);


const fileLines = [
  'Inspector Algar,Inspector Bardle,Mr. Barker,Inspector Barton',
  'Inspector Baynes,Inspector Bradstreet,Inspector Sam Brown',
  'Monsieur Dubugue,Birdy Edwards,Inspector Forbes,Inspector Forrester',
  'Inspector Gregory,Inspector Tobias Gregson,Inspector Hill',
  'Inspector Stanley Hopkins,Inspector Athelney Jones'
];

function splitLineReducer(acc, line) {
  return acc.concat(line.split(/,/g));
}
const investigators = fileLines.reduce(splitLineReducer, []);
console.log(investigators);


const readings = [0.3, 1.2, 3.4, 0.2, 3.2, 5.5, 0.4];
const maxReading = readings.reduce((x, y) => Math.max(x, y), Number.MIN_VALUE);
const minReading = readings.reduce((x, y) => Math.min(x, y), Number.MAX_VALUE);
console.log({minReading, maxReading});
// {minReading: 0.2, maxReading: 5.5}

