abstract class Animal {
    constructor(protected name: string) { }

    abstract makeSound(input : string) : string;

    move(meters) {
        alert(this.name + " moved " + meters + "m.");
    }
}

class Tiger extends Animal {
    constructor(name: string) { super(name); }

    makeSound(input : string) : string {
        return "Roar"+input;
    }

    move() {
        alert("Tiger moves :");
        super.move(20);
    }
}
class Dog extends Animal {
    constructor(name: string) { super(name); }

    makeSound(input : string) : string {
        return "Bow Bow"+input;
    }

    move() {
        alert("Dog moves :");
        super.move(10);
    }
}