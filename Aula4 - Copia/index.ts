class Animal{
    nome : string = ""
    idade : number = 0
    especie : string = ""
    raca : string = ""
    peso : number = 0
    som : string = ""
}

class Mamifero extends Animal{
    pelagem : string = ""
    amamenta : boolean = true
    emitirSom(){
        console.log(this.som);    
    }
    brincar(){
        console.log("Brincando");
        this.emitirSom()
    }
    alimentar(){
        console.log("Alimentando");
        this.emitirSom()
    }
}
class Ave extends Animal{
    envergaduraAsa : string = ""
    tipoBico  :string = ""
    emitirSom(){
        console.log(this.som);    
    }
    brincar(){
        console.log("Brincando");
        this.emitirSom()
    }
    alimentar(){
        console.log("Alimentando");
        this.emitirSom()
    }
}
class Peixe extends Animal{
    tamanhoAquario : number = 0
    tipoAlimento : string = ""
    emitirSom(){
        console.log(this.som);    
    }
    brincar(){
        console.log("Brincando");
        this.emitirSom()
    }
    alimentar(){
        console.log("Alimentando");
        this.emitirSom()
    }
}

let mamifero = new Mamifero()
mamifero.nome  = "Tigre"
mamifero.idade = 5
mamifero.especie = "Branco"
mamifero.raca = "Tigre"
mamifero.peso = 50
mamifero.som  = "Rrrr"
mamifero.pelagem =  "Branca"
mamifero.amamenta = true
console.log(mamifero);

mamifero.alimentar()
mamifero.brincar()

let ave = new Ave()
ave.nome  = "Papagaio"
ave.idade = 3
ave.especie = "Verde"
ave.raca = "Papagaio"
ave.peso = 2
ave.envergaduraAsa = "Muita"
ave.som  = "Piu"
console.log(ave);
ave.alimentar()
ave.brincar()


