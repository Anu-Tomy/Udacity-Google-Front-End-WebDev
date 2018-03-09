/* Use a series of ternary operator to set the category to one of the following:
   - "herbivore" if an animal eats plants
   - "carnivore" if an animal eats animals
   - "omnivore" if an animal eats plants and animals
   - undefined if an animal doesn't eat plants or animals
*/

var eatsPlants = true; 
var eatsAnimals = false;

var category = (eatsAnimals && eatsPlants) ? "omnivore" : (eatsAnimals) ? "carnivore" : (eatsPlants) ? "herbivore" : undefined;
console.log(category);