class Distancia{
    constructor(num){
        this.num=num
    }

    
    millasAmetros(){
        let met = this.num*1609.34
        console.log(`Son ${met} metros`)
    }

    millasAkilometros(){
        let km = (this.num*1609.34)/1000
        console.log(`Son ${km} kilómetros`)
    }
}

millasAmetros(1232)
millasAkilometros(1232)