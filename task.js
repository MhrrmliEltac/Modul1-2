/* //? Sual 1
const sentence = ["sense", "make", "all", "will", "This"];
function reverseArray() {
  return sentence.reverse();
}
console.log(reverseArray());

//? Sual 2
const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
function greetAliens() {
  for (let element in aliens) {
    console.log(
      `Oh powerful ${aliens[element]}, we humans offer our unconditional surrender!`
    );
  }
}
greetAliens(); */

/* //? Sual 3
const coolStuff = ["gameboys","skateboards","backwards hats","my room","temporary tattoos"]
const myStuff = ["sweaters","skateboards","family-night","my room"]
function justCoolStuff() {
    for(let element in coolStuff){
        for(let index in myStuff){
            if(coolStuff[element] === myStuff[index]){
                console.log(coolStuff[element]);
            }
        }
    }
}
justCoolStuff() */

//? Sual 4
const meal = [
  { name: "arugula", source: "plant" },
  { name: "tomatoes", source: "plant" },
  { name: "lemon", source: "plant" },
  { name: "olive oil", source: "plant" },
];
const dinner = [
  { name: "hamburger", source: "meat" },
  { name: "cheese", source: "dairy" },
  { name: "ketchup", source: "plant" },
  { name: "bun", source: "plant" },
];
function isTheDinnerVegan(dinner) {
    // for(let i = 0; i < dinner.length; i++) {
    //     if (dinner[i].source !== "plant") {
    //         return false; 
    //     }
    // }
    // return true; 

  let element = dinner.find(item=>{
        return item.source !== 'plant'
    })
    
    if(element){
        return false
    }
    else{
        return true
    }
  

}
console.log(isTheDinnerVegan(dinner));
