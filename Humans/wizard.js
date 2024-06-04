import { character } from "../Default/character.js";
export class wizard extends character{
    constructor(nam){
    super();
    this.setName = nam;
    this.setHp = 15;
    }
}