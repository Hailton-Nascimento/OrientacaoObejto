import { Priest } from "./src/Priest";
import { Warrior } from "./src/Warrior";
import { Mage } from "./src/Mage";
import { Personagem } from "./src/Personagem";

let mage: Mage = new Mage("Angelo mage");
let warrior: Personagem = new Warrior("Angelo warrior");
let priest: Personagem = new Priest("Angelo priest");

console.log("mage :>> ", mage);
console.log("warrior :>> ", warrior);
console.log("priest :>> ", priest);

const personagens: Personagem[] = [];
personagens.push(mage);
personagens.push(priest);
personagens.push(warrior);

personagens.forEach((p) => {
    return console.log(p.atacar());
});

function placar():string{
    return "";
}