// **Ancestral Stories:** In many African cultures, the art of storytelling is passed
// down from generation to generation. Imagine you're creating an application that
// records these oral stories and translates them into different languages. The
// stories vary by length, moral lessons, and the age group they are intended for.
// Think about how you would model `Story`, `StoryTeller`, and `Translator`
// objects, and how inheritance might come into play if there are different types of
// stories or storytellers.
// Input Story,storyteller,Translator
//Output
//process-class,with methods of length,moral lessons,agegroup
class Story {
    constructor(title, author, length, moral, ageGroup) {
      this.title = title;
      this.author = author;
      this.length = length;
      this.moral = moral;
      this.ageGroup = ageGroup;
    }
  }
  class StoryTeller {
    constructor(name, age, language, ) {
      this.name = name;
      this.age = age;
      this.language = language;
      
    }
  }
  class Translator {
    translate(story, storyteller) {
      this.Story = Story
      this.storyteller = storyteller
    }
  }

// **African Cuisine:** You're creating a recipe app specifically for African cuisine.
// The app needs to handle recipes from different African countries, each with its
// unique ingredients, preparation time, cooking method, and nutritional
// information. Consider creating a `Recipe` class, and think about how you might
// create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
// `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
// methods.
//Input ingredients,preptime,cookingMethod,nutritionalInformation
//Output returns a message that displays the specific country recipe and its unique message
// Process class one common method ,subclasses and condition statement
class Recipe {
    constructor(name, country, ingredients, preparationTime, cookingMethod, nutritionInfo) {
      this.name = name;
      this.country = country;
      this.ingredients = ingredients;
      this.preparationTime = preparationTime;
      this.cookingMethod = cookingMethod;
      this.nutritionInfo = nutritionInfo;
    }
  }
  class MoroccanRecipe extends Recipe {
    constructor(name, country, ingredients, preparationTime, cookingMethod, nutritionInfo, spices, servingSize) {
      super(name, country, ingredients, preparationTime, cookingMethod, nutritionInfo);
      this.spices = spices;
      this.servingSize = servingSize;
    }
  }
  class EthiopianRecipe extends Recipe {
    constructor(name, country, ingredients, preparationTime, cookingMethod, nutritionInfo, spicinessLevel, vegetarian) {
      super(name, country, ingredients, preparationTime, cookingMethod, nutritionInfo);
      this.spicinessLevel = spicinessLevel;
      this.vegetarian = vegetarian;
    }
  }
  const jollofRice = new NigerianRecipe(
    "Jollof Rice",
    "Nigeria",
    ["rice", "tomatoes", "onions", "peppers", "chicken"],
    "1 hour",
    "Boiling",
    { fat: "10g", carbs: "50g", protein: "20g" },
    "chicken",
    300
  );


// **Wildlife Preservation:** You're a wildlife conservationist working on a
// program to track different species in a national park. Each species has its own
// characteristics and behaviors, such as its diet, typical lifespan, migration
// patterns, etc. Some species might be predators, others prey. You'll need to
// create classes to model `Species`, `Predator`, `Prey`, etc., and think about how
// these classes might relate to each other through inheritance.
class Species{
    constructor(diet,lifespan,migrationPattern){
        this.diet = diet
        this.lifespan = lifespan
        this.migrationPattern = migrationPattern

    }

}





// **African Music Festival:** You're in charge of organizing a Pan-African music
// festival. Many artists from different countries, each with their own musical style
// and instruments, are scheduled to perform. You need to write a program to
// manage the festival lineup, schedule, and stage arrangements. Think about how
// you might model the `Artist`, `Performance`, and `Stage` classes, and consider
// how you might use inheritance if there are different types of performances or
// stages.
class festivalMusic{
    constructor(FestLineUp,Schedule,StageArrangements){

    }
}

// Create a class called Product with attributes for name, price, and quantity.
// Implement a method to calculate the total value of the product (price * quantity).
// Create multiple objects of the Product class and calculate their total values.
class product{
    constructor(name,price,quantity){
        this.name = name
        this.price = price
        this.quantity = quantity

    }
    get totalValue(){

    }
}

//    Implement a class called Student with attributes for name, age, and grades (a
//     list of integers). Include methods to calculate the average grade, display the
//     student information, and determine if the student has passed (average grade >=
//     60). Create objects for the Student class and demonstrate the usage of these
//     methods.
//input  name,age,grade
//Output name of student that has grades above 60
//Process class of student with  method that determines the student that has grades above 60
class Student {
    constructor (name,age,grades){
        this.name = name
        this.age = age
        this.grades = grades
    }

}

// Create a FlightBooking class that represents a flight booking system. Implement
// methods to search for available flights based on destination and date, reserve
// seats for customers, manage passenger information, and generate booking
// confirmations.

class FlightBooking {
    constructor(destination,date,customerSeats,managedpassengerInfo,bookingconfim){
        this.destination = destination
        this.date = date
        this.customerSeats = customerSeats
        this.managedpassengerInfo = managedpassengerInfo
        this.bookingconfim = bookingconfim   
    }
    getAvailableFlight(){

    }



}


// Create a LibraryCatalog class that handles the cataloging and management of
// books in a library. Implement methods to add new books, search for books by
// title or author, keep track of available copies, and display book details.

class LibraryCatalog{
    constructor(title,availablecopies,bookdetils){
        this.title = title
        this.availablecopies = availablecopies
        this.bookdetils = bookdetils

    }
    getAddNewBooks(){

    }
}