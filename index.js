//prompt user with the list
const froyoFlavorsPrompt = prompt("Enter flavors with a comma in between", [
  "vanilla, vanilla, vanilla, strawberry, coffee, coffee",
])
//make string into an array between commas
const flavorArr = froyoFlavorsPrompt.split(", ")
console.log(flavorArr)

//create fucntion and interate thru the array of flavors
const amountOfFlavors = flavors => {
  //create empty OBJ
  const flavorObj = {}
  // loop through array of flavors
  for (let i = 0; i < flavors.length; i++) {
    //trim any spaces
    const flavor = flavors[i].trim()
    //if obj does contain flavor it increments the existing count
    if (flavor in flavorObj) {
      flavorObj[flavor]++
      //if it does not exist in OBJ it adds 1 to the count
    } else {
      flavorObj[flavor] = 1
    }
  }

  return flavorObj
}
console.log(amountOfFlavors(flavorArr))
