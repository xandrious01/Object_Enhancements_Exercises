function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }

  becomes:

function createInstructor (firstName, lastName) {
    return {
        firstName, lastName
    }
}

////////////////////////////////////////////////////

var favoriteNumber = 42;
var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"

becomes:

let favoriteNumber = 42;

const instructor = {
    firstName: "Colt",
    [favoriteNumber] : "That is my favorite!"
}

///////////////////////////////////////////

var instructor = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName + " says bye!";
    }
  }

  becomes:

  const instructor = {
    firstName: "Colt",
    sayHi(){
        return "Hi!";
    },
    sayBye(){
        return this.firstName + "says bye!"
    }
  }

///////////////////////////////////////////////////////////////

function generateAnimal(species, verb, noise){
return {
    species,
    [verb](){
        return noise;
    }
}
}