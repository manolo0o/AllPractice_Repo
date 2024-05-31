import { character } from "./character.js";
export class warrior extends character{
    constructor(nam){
    super();
    this.setName = nam;
    this.setHp = 10;
    }
}