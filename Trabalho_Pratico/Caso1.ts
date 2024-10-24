class Padaria {
    vendas : number = 0
    estoque : number = 10
    clientes : Cliente[] = []
    
    adicionarCliente(cliente : Cliente){
        this.clientes.push(cliente)
    }
    adicionarProduto(cliente : Cliente, nome : string,quantidade : number){
        const produtos = new Produto(nome,quantidade)
        cliente.comprarProduto(produtos)
        this.vendas += quantidade
        this.estoque -= quantidade     
    }
    adicionarBrinde(cliente : Cliente,nome_Brinde : string,tipo : string ){
        const brinde = new Brinde(nome_Brinde,tipo)
        cliente.ganharBrinde(brinde)
        if(cliente.score >= 20){
            cliente.score = 0
        }
        
    }
    
}

class Cliente{
    nome : string = ""
    idade : number = 0
    endereco : string = ""
    cpf : string = ""
    score : number = 0
    produtos : Produto[] = []
    brindes : Brinde[] = []

    
    comprarProduto(produto : Produto){
        this.produtos.push(produto)
        this.score += this.produtos.length
    }
    ganharBrinde(brinde : Brinde){
        if(this.score >= 20){
            console.log("Você ganhou um brinde")
            this.brindes.push(brinde)
            
        }
    }
} 

class Produto {
    nome : string 
    quantidade : number 

    constructor(nome  :string,quatidade : number){
        this.nome = nome
        this.quantidade = quatidade
    }
}
class Brinde{
    nome_Brinde : string
    tipo : string
        constructor(nome_Brinde  :string,tipo : string){
        this.nome_Brinde = nome_Brinde
        this.tipo = tipo
    }
}

let padaria = new Padaria()
let cliente_1 = new Cliente()
cliente_1.nome = "Sandro"
cliente_1.idade = 11
cliente_1.endereco = "Onde Judas perdeu as botas"
cliente_1.cpf = "123456789"
padaria.adicionarCliente(cliente_1)
padaria.adicionarProduto(cliente_1,"Pão",1)
padaria.adicionarProduto(cliente_1,"Pão",1)
padaria.adicionarBrinde(cliente_1,"Coca","Bebida")
console.log(padaria,cliente_1)