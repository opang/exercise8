class Employee{
    workingHour = 0
    sal = 0

    constructor(name, cheap, expensive){
        this.name = name
        this.cheap = cheap
        this.expensive = expensive
    }

    addWorking(hours){
        this.workingHour += hours
    }

    salary(){
        if(this.workingHour > 6){
            this.sal = 6 * this.expensive
            this.sal +=  (this.workingHour - 6) * this.cheap
        }else{
            this.sal = this.workingHour * this.expensive
        }
        
    }
}

class FulltimeEmp extends Employee{
    constructor(name){
        super(name, 75000, 100000)
    }
}


class ParttimeEmp extends Employee{
    constructor(name){
        super(name, 30000, 50000)
    }
}

let agus = new FulltimeEmp("agus")
agus.addWorking(6)
agus.salary()
console.log(agus)

let joko = new ParttimeEmp("joko")
joko.addWorking(7)
joko.salary()
console.log(joko)