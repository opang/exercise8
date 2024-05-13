class ShootingGame{
    constructor(player1, player2){
        this.player1 = player1
        this.player2 = player2
    }

    getRandomItem(){
        let i = Math.floor(Math.random() * 2)
        if(i == 0){
            return{health: 10, power:0}
        }else{
            return{health:0, power:10}
        }
    }

    start(){
        let atk = this.player1
        let def = this.player2

        while (this.player1.health > 0 && this.player2.health > 0) {
            let item1 = this.getRandomItem()
            let item2 = this.getRandomItem()

            this.player1.useItem(item1)
            this.player2.useItem(item2)

            console.log("----after get item-----")
            this.player1.showStatus()
            this.player2.showStatus()
            console.log("----after get item-----")

            

            def.hit(atk.power)

            console.log("----after shot----")
            this.player1.showStatus()
            this.player2.showStatus()
            console.log("----after shot----")    

            if(atk.name == this.player1.name){
                atk = this.player2
                def = this.player1
            }else{
                atk = this.player1
                def = this.player2
            }

            
        }
        if(this.player1.health > 0){
            console.log(this.player1.name,"player 1 win")
        }else{
            console.log(this.player2.name,"player 2 win")
        }
    }
}


class Player{
    name = ""
    health = 100
    power = 10
    constructor(name){
        this.name = name
    }

    hit(power){
        this.health -= power
    }

    useItem(item){
        this.health += item.health
        this.power += item.power
    }

    showStatus(){
        console.log(this.name, "health--->", this.health)
        console.log(this.name,"power---->", this.power)
    }

}



let argus = new Player("argus")
let joko = new Player("joko")

let arena1= new ShootingGame(argus, joko)

arena1.start()



