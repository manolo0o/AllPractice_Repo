import { creature } from "./creature.js";

export class hero extends creature{
    #shield = true;
    constructor(nam){
    super();
    this.setName = nam;
    this.setHp = 20;
    this.armor();
    }
    armor(){
        if(this.#shield) this.setArmor = 100;
    }
}