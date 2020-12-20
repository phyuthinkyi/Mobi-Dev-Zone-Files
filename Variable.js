//variables Declaration
var userName = "Aung Aung"
var single = true
var arr = [1, 2, 3]
var arrOne = [
  {
    name: ''
  },
  {

  }
]
var obj = {
  name: 'hla',
  age: 24,
  hobby: 'Swimming'
}
var age = 23
var char = "A"
var dog;
console.log("Dog", dog)
var empty = ""

console.log("Empty", empty)

var cat = null

console.log("Is cat equal to empty? ", dog == empty)

// Function

// function add(a,b){
//   return a+b;
// }

// let add = function(a,b){
//   return a+ b
// }


//arrow function
let add = (a, b) => a + b

console.log("A plus B is", add(1, 2))


let uName = "Su"
let uAge = 22
let isHobby = true
const userCollector = (userName, userAge, isHobby) => {
  console.log("Name&Age&Hobby are ", userName, userAge, isHobby)
  if (isHobby) {
    var str = "Aung"
  }
  console.log("User Name is", str)

}

userCollector(uName, age, isHobby)

//ES 6
let myFunction = () => {

}

//Array
// arr = [1,2,3]
let myArr = [{dogName: 'Aung Net', dogAge: 3,},{ dogName: 'Kyar Bo', dogAge: 2,},
  {
    dogName: 'Oscar',
    dogAge: 2,
  },
  {
    dogName: 'Nga Nyo',
    dogAge: 1,
  }
]

//map
myArr.map((dog, index) => {

  console.log("Dog Name is " + dog.dogName)
})

//filter
const selectedObj = myArr.filter(data => data.dogAge == 2)
console.log("Selected Obj", selectedObj )

const findObj = myArr.find(data => data.dogName == 'Aung Net')
console.log("Find Obj", findObj.dogAge)














//a person => name, age, hob

// String, Boolean, Array, Object, Number, Character, 
//typeof Operator, Undefined, Empty Value (""), Null

/*
//typeof operator can return these types
1. string
2. number
3. boolean
4.undefined




*/

