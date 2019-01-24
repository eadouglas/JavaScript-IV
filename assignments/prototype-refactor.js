/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/


class GameObject {
    constructor(attributes) {
        this.createdAt = attributes.createdAt;
        this.dimensions = attributes.dimensions;
    }
};

class CharacterStats extends GameObject {
    constructor(attributes) {
        super(attributes);
        this.hp = attributes.hp;
        this.name = attributes.name;
        this.live = true;
    }
};

class Humanoid extends CharacterStats {
    constructor(attributes) {
        super(attributes);
        this.faction = attributes.faction;
        this.weapons = attributes.weapons;
        this.language = attributes.language;
    }
};

//Prototype methods
GameObject.prototype.destroy = function () {
    if (this.live) this.live = false;
    if (!this.name) return `Game was removed from the game.`;
    else return `${this.name} was removed from the game.`;
};

CharacterStats.prototype.takeDamage = function () {
    if (!this.live) return "He's dead.";
    let damage = Math.floor(Math.random() * 10);
    this.hp -= damage;
    if (this.hp <= 0) return this.destroy();
    else return `${this.name} took ${damage} damage.  ${this.hp} remaining`;
};

Humanoid.prototype.greet = function () {
    return `${this.name} offers a greeting in ${this.language}.`;
};

const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 1,
        height: 1
    },
    hp: 5,
    name: "Bruce",
    faction: "Mage Guild",
    weapons: ["Staff of Shamalama"],
    language: "Common Toungue"
});

const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 2
    },
    hp: 15,
    name: "Sir Mustachio",
    faction: "The Round Table",
    weapons: ["Giant Sword", "Shield"],
    language: "Common Toungue"
});

const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4
    },
    hp: 10,
    name: "Lilith",
    faction: "Forest Kingdom",
    weapons: ["Bow", "Dagger"],
    language: "Elvish"
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.hp); // 15
console.log(mage.name); // Bruce
console.log(swordsman.faction); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.