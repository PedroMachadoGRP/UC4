class Loja{
    vendas : number = 0
    estoque : number = 0
    usuarios : Usuario[] = []
    adicionarUsuarios(usuario : Usuario){
        this.usuarios.push(usuario)
    }
    adicionarRoupa(RoupaEscolida : string,usuario : Usuario,camisa :Camisa,calca : Calca,tenis : Tenis,id : number,cor  :string, tamanho : number,  tipo : string  ,marca : string ,preco : number){
        if(RoupaEscolida === "Camisa"){
            const camisaAdicionada = new Camisa(id,cor,tamanho,tipo,marca,preco)
            usuario.comprarcamisa(camisaAdicionada)  
        }
    }
}
class Roupa{
    id : number 
    cor  :string 
    tamanho : number 
    tipo : string 
    marca : string 
    preco : number
    constructor(id : number,cor : string,tamanho : number,tipo : string,marca : string,preco : number){
        this.id = id
        this.cor = cor
        this.tamanho = tamanho
        this.tipo = tipo
        this.marca = marca
        this.preco = preco
    }
}
class Usuario{
    nome : string = ""
    cpf : number = 0
    email : string = ""
    camisas : Camisa[]= []
    calcas : Calca[]= []
    tenizes : Tenis[]= []


    comprarcamisa(camisa : Camisa){
        this.camisas.push(camisa)
        console.log(camisa);
        if(this.camisas.length >= 2){
            camisa.preco -=(camisa.preco *= 0.10)
            console.log("Você recebeu um desconto, agora seu produto custa R$" + camisa.preco);
            
        }
    }
    comprarCalca(calca : Calca){
        this.calcas.push(calca)
        console.log(calca);
        if(this.calcas.length >= 5){
            calca.preco -=(calca.preco *= 0.30)
            console.log("Você recebeu um desconto, agora seu produto custa R$" + calca.preco);
            
        }
        
    }
    comprarTenis(tenis : Tenis){
        this.tenizes.push(tenis)
        tenis.preco -=(tenis.preco *= 0.40)
        console.log("Você recebeu um desconto, agora seu produto custa R$" + tenis.preco);
        
    }
}
class Camisa extends Roupa{
    manga : boolean = true
    camisas : Camisa[] = []    
}
class Calca extends Roupa{
    comprimento : number = 0
    calcas : Calca[] = []
}
class Tenis extends Roupa{
    esportivo : boolean = false
    tenis : Tenis[] = []
}
let loja = new Loja()
let usuario = new Usuario()
let camisa = new Camisa(1,"azul",40,"camisa","Nike",50)
let camisa1 = new Camisa(3,"azul",40,"camisa","Nike",50)
let camusa2 = new Camisa(2,"azul",40,"camisa","Nike",50)
loja.adicionarUsuarios(usuario)
usuario.comprarcamisa(camisa1)
usuario.comprarcamisa(camusa2)
console.log(loja,usuario);

