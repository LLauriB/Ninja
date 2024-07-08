
class Ninja{
    constructor  (name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.force = 3;
    }
    sayName(){
        console.log (`El nombre del ninja es: ${this.name}`)
    }
    showStats(){
        console.log (`nombre: ${this.name}, fuerza:${this.force}, velocidad:${this.speed}, salud:${this.health}`)
    }
    drinkSake() {
        this.health += 10;
    }
}


const ninja1 = new Ninja("Hyabusa", 10);
ninja1.sayName();
ninja1.showStats();
