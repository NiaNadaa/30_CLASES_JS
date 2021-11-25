class Distancia{
   /*  constructor(num){
        this.num=num
    } */

    
    millasAmetros(num){
        let met = num*1609.34
        console.log(`Son ${met} metros`)
    }

    millasAkilometros(){
        let km = (num*1609.34)/1000
        console.log(`Son ${km} kilómetros`)
    }
}

let calculo = new Distancia()

console.log(calculo.millasAmetros(234))
console.log(calculo.millasAkilometros(1800))
