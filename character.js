export class character{
    #Hp = 20;
    constructor(){
    this.setName = undefined;
    }
    set setName(nam= "Jhon"){
        this.name = nam;
    }
    set setHp(h_points){
        this.#Hp += h_points;
    }
}