class Rectangulo{
    constructor(largo, ancho){
        this.largo = largo,
        this.ancho = ancho
    }

    calArea(){
        let area = this.ancho*this.largo
        console.log(`El área es ${area}`)
    }

    calPerimetro(){
        let per = (this.ancho*2)+(this.largo*2)
        console.log(`El perímetro es ${per}`)
    }
}

let calculo = new Rectangulo(12,4)

console.log(calculo.calArea())
console.log(calculo.calPerimetro())

/* calArea(12,4)
calPerimetro(12,4) */
