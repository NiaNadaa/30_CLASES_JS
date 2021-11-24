class Cifras{
    constructor(num){
        this.num = num
    }

    esPar(){
        if(this.num%2!==0){
            console.log("Es impar")
        }else{
            console.log("Es par")
        }
    }

    sumaDigitos(){
        let suma = parseInt(this.num.substring(0,1)) + parseInt(this.num.substring(1,2)) + parseInt(this.num.substring(2))
        console.log(`La suma es ${suma}`)
    }
}

esPar(181)
sumaDigitos(181)