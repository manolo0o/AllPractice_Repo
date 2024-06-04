export class creature{
    #hp = 30;
    #maxHp = 45;
    #dmg = 10;
    #armor = 50;
    
    constructor(){
    this.setName = undefined;
    }
    set setName(nam= "Demon"){
        this.name = nam;
    }
    set setHp(h_points){
        this.#hp += h_points;
    }
    set maxHp(max_Hp){
        this.#maxHp += max_Hp;
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