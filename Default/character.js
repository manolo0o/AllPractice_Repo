export class character{
    #hp = 20;
    #armor = 50;
    #dmg = 5;
    
    constructor(){
    this.setName = undefined;
    }
    set setName(nam= "Jhon"){
        this.name = nam;
    }
    set setHp(h_points){
        this.#hp += h_points;
    }
    set setArmor(armorPoints){
        this.#armor += armorPoints;
    }
    get getArmor(){
        return this.#armor;
    }
    attack(instrument = 0){
        if(instrument) this.#dmg += instrument;
        return instrument;
    }
}