function oneThroughTwenty() {
  let result = [] 
 for(let i = 1; i <= 20; i++){
  result.push(i)
}
return result
}
console.log(oneThroughTwenty())
//call function oneThroughTwenty

function evensToTwenty() {
  let par = []

  for (let i = 1; i <= 20; i++) {
    if ((i % 2) == 0) {
      par.push(i)
    }
  }
return par
}
console.log(evensToTwenty())
//call function evensToTwenty

function oddsToTwenty() {
  let impar = []

  for (let i = 1; i <= 20; i++) {
    if ((i % 2) != 0) {
      impar.push(i)
    }
  }
return impar 
}
console.log(oddsToTwenty())
//call function oddsToTwenty

function multiplesOfFive() {
  let multiplos = []  
  for (let i = 1; i <= 100; i++) {
    if (i % 5 == 0) {
      multiplos.push(i)
    }   
  }
  return multiplos
}
console.log(multiplesOfFive())
//call function multiplesOfFive

function squareNumbers() {
    let quadrados = []
  for (let i = 1; i <= 10; i++) {
    quadrados.push(i * i)    
  }
    return quadrados
}
console.log(squareNumbers())
//call function squareNumbers

function countingBackwards() {
    let counting = []

    for (let i = 20; i > 0; i--) {
    counting.push(i)      
    }
return counting
}
console.log(countingBackwards())
//call function countingBackwards

function evenNumbersBackwards() {
  let result = []
  for(let i = 20; i > 0; i--){
    if (i % 2 == 0) {
      result.push(i)
    }
  }  
  return result
}
console.log(evenNumbersBackwards())

//call function evenNumbersBackwards

function oddNumbersBackwards() {
  let result = []
  for(let i = 20; i > 0; i--){
    if (i % 2 != 0) {
      result.push(i)
    }
  }
  return result
}
console.log(oddNumbersBackwards())
//call function oddNumbersBackwards

function multiplesOfFiveBackwards() {
  let result = []
  for(let i = 100; i > 0; i--){
    if (i % 5 == 0) {
      result.push(i)
    }
  }
  return result
}
console.log(multiplesOfFiveBackwards())
//call function multiplesOfFiveBackwards

function squareNumbersBackwards() {
  let result = []  

  for (let i = 10; i > 0 ; i--) {
    result.push(i * i)
    
  }

return result
}
console.log(squareNumbersBackwards())
//call function squareNumbersBackwards
