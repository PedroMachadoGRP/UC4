class Eletronico {
    nome : string = ""
    marca : string = ""
    preco : number = 0

    ligarAparelho(){
        console.log("Iniciando aparelho");
        
    }

}
class Celular extends Eletronico{
    cor : string = ""
    camera : number = 0
    ligarAparelho(): void {
        console.log("Bem vindo ao seu celular");
        
    }
    DesligarAparelho(off : string) :void
    DesligarAparelho(off? : string) : void

    DesligarAparelho(off : string){
        if(off  === undefined){
            console.log("Você não está desligando o celular");
            
        }else if(off === "Sim") {
            console.log("Desligando...");
            
        }else if(off === "Não"){
            console.log("Voltando ao celular");
            
        }
    }  
}
let celular = new Celular()
celular.DesligarAparelho()
celular.DesligarAparelho("Sim")
celular.DesligarAparelho("Não")
class Computador extends Eletronico{
    sistema : string = ""
    ligarAparelho(): void {
        console.log("O sistema está iniciando");
        
    }
}
let computador = new Computador()
computador.ligarAparelho
celular.ligarAparelho()