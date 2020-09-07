
class Animal{
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    setName(newName){
        this.name = newName;
    };
    setWeight(newWeight){
        this.weight = newWeight;
    };
    getName(){
        return this.name;
    };
    getWeight(){
        return this.weight
    };
    toString(){
        return "name: " + this.name + "<br>" + "weight: " + this.weight;
    };
}

let objAnimal = new Animal("Elephant", 45,6);
document.write(objAnimal.toString());

let newName = "new name"
let newWeight = "new Weight";
let objAnimal2 = new Animal(newName, newWeight);
// document.write("<br>" + "")
objAnimal2.setName("Mouse");
objAnimal2.setWeight(4)
document.write("<br>" +"new Name: "+  objAnimal2.getName() + "<br>" + "new Weight: " + objAnimal2.getWeight());
