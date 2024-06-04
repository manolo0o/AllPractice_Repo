
//POO FIRTS CLASS
//_________________________________________________


//HUMANS
//_________________________________________________

import { character } from "./Default/character.js"; //DEFAULT
import { warrior } from "./Humans/warrior.js";
import { wizard } from "./Humans/wizard.js";

let defaultCharacter = new character();
let warriorCharacter = new warrior("Manuel");
let wizardCharacter = new wizard("Maria");

console.log(defaultCharacter)
console.log(warriorCharacter)
console.log(wizardCharacter)

//Creatures
//_________________________________________________

import { hero } from "./Creatures/hero.js";
import { monster } from "./Creatures/monster.js";
import { creature } from "./Default/creature.js";

let defaultcreatureCharacter = new creature();
let heroCharacter = new hero("Jarvan");
let monsterCharacter = new monster("kha'Zix");

console.log(defaultcreatureCharacter)
console.log(heroCharacter)
console.log(monsterCharacter)

//_________________________________________________










