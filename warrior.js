import { character } from "./character.js";
export class warrior extends character{
    #shield = true;
    constructor(nam){
    super();
    this.setName = nam;
    this.setHp = 10;
    this.armor();
    }
    armor(){
        if(this.#shield) this.setArmor = 100;
    }
}