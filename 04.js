class Finanzas{
    constructor(dolares,euros){
        this.dolares = dolares
        this.euros = euros
    }

    dolarEuro(){
        let euroC = this.dolares*0.89
        console.log(`Los ${this.dolares} dólares son ${euroC} euros`)
    }

    euroDolar(){
        let dolarC = this.euros*1.12
        console.log(`Los ${this.euros} euros son ${dolarC} dólares`)
    }
}

let calculo = new Finanzas(300,456)
console.log(calculo.dolarEuro())
console.log(calculo.euroDolar())

/* dolarEuro(23)
euroDolar(345) */
