// Question 1-  Abdullah
const coolGreeting = (person) => {
  if (person.isCool === true){
    return `What is UP ${person.name.toUpperCase()}? How you been doin'?`;
  }else{
    return `Greetings ${person.name}, how have you been lately?`;
  };
}
  const person = {
    name: 'Sara',
    bio: 'Too cool 4 skool.',
    age: 32,
    isCool: true
  }
  // console.log(coolGreeting(person))

const haveBirthday = (person) => {
 return person.age = person.age + 1
}

// Question 3 - Abdullah 
const becomeSecretAgent = (person, spyHandle) => {
  delete person.name
  person["spyHandle"] = spyHandle
  }
  // becomeSecretAgent(person, "007")
  // console.log(person)
  
  
const carMaker = (name, maker, year) => {
  const needsOilChange = false;
  return {
    name: name,
    maker: maker, 
    year: year, 
    needsOilChange: needsOilChange
    }
  };


// Question 5 - Abdullah 
const weAreNotFriends = (person) => {
  return person.friends.pop()
};
const person1 = {
  name: 'Sara',
  age: 30,
  friends: ['Bob', 'Joe', 'Sally'],
};

// weAreNotFriends(person1)
// console.log(person1.friends)


const listHobbies = (person) => {
  for (let i = 0; i < person.hobbies.length; i++){
    console.log(`${person.name} likes ${person.hobbies[i]}.`)
  }
};


// Question 7 - Abdullah
const getNextOpponent = (team) => {

  if (team.matches[0] === undefined){
    return null
  }
    return team.matches[0].teamName
  }
 const fighters = {
  name: 'Fighters',
  sport: 'basketball',
  wins: 3,
  location: {
    city: 'Bridgeport',
    state: 'CT',
  },
  matches: [
    {
      teamName: 'Dunkaroos',
      skill: 9,
      wins: 12,
    },
    {
      teamName: 'Space Jammers',
      skill: 10,
      wins: 16,
    },
    {
      teamName: 'Mustangs',
      skill: 6,
      wins: 10,
    },
  ]
}
// console.log(getNextOpponent(fighters))

const listAllKeys = (object) => {
  return Object.keys(object)
};

const listAllValues = () => {
};

const convertToMatrix = () => {
};

module.exports = {
  coolGreeting,
  haveBirthday,
  becomeSecretAgent,
  carMaker,
  weAreNotFriends,
  listHobbies,
  getNextOpponent,
  listAllKeys,
  listAllValues,
  convertToMatrix,
};
