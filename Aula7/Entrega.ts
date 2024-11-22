class Cliente{
    private nome : string
    private email : string
    private telefone : number
    private endereco : string
    private CNPJ : string

    cadastrar(nome : string, email : string, telefone : number, endereco : string, CNPJ : string){
        this.nome = nome
        this.email = email
        this.telefone =telefone
        this.endereco = endereco
        this.CNPJ = CNPJ
        alert(`${nome} foi cadastrado com email ${email} telefone ${telefone}, seu endereço é em ${endereco} e seu CNPJ ${CNPJ}`)

    }
}

/*class ClienteContratante extends Cliente{
    private frequenciaFrete : string

}*/

class Veiculo{
    private placa : string
    private modelo : string
    private capacidadeCarga : string
    private carga : TipoCarga 
    private status : Status

    cadastrar(placa : string,modelo : string, capacidadeCarga : string,carga : TipoCarga,status : Status){
        this.placa = placa
        this.modelo = modelo
        this.capacidadeCarga = capacidadeCarga
        this.carga = carga
        this.status = status

        alert(`O veiculo de modelo ${modelo} tem a placa ${placa} com a capacidade de ${capacidadeCarga} tem um carga ${carga} e está ${status}`)
    }
}

class Carga{
    private peso : number
    private volume : number
    private tipoCarga : TipoCarga
    private origem : string
    private destino : string
    private dataDespache : number
    private dataEntrega : number

    cadastrar(peso : number, volume : number,tipoCarga : TipoCarga,origem : string,destino : string,dataDespache : number,dataEntrega : number){
        this.peso = peso
        this.volume = volume
        this.tipoCarga = tipoCarga
        this.origem = origem
        this.destino = destino
        this.dataDespache = dataDespache
        this.dataEntrega = dataEntrega
        


    }
    precoCarga(peso : number, volume : number){
        let preco = peso * 0.5 + volume * 0.1
        return preco
    }
}
class Motorista {
    private nome : string
    private CNH : string
    private categoria : string
    private experiencia : string
    private veiculo :  Veiculo

    cadastrar(nome : string,CNH :string,categoria : string, experiencia : string,veiculo : Veiculo){
        this.nome = nome
        this.CNH = CNH
        this.categoria = categoria
        this.experiencia = experiencia
        this.veiculo = veiculo

    }
}

class Rota{
    private origem : string
    private destino : string
    private distancia : number
    private tempo : number
    private veiculoApropriado : string

    cadastrar(origem : string, destino : string, distancia : number, tempo : number, veiculoApropriado : string){
        this.origem = origem
        this.destino = destino
        this.distancia = distancia
        this.tempo = tempo
        this.veiculoApropriado = veiculoApropriado
    }
}

class Entrega{
    private data : number
    private hora : number
    private cliente : Cliente
    private carga : Carga
    private veiculo : Veiculo
    private motorista : Motorista
    private status : Status2
    private observacoes : string

    cadastrar(data : number,hora : number,cliente : Cliente,carga : Carga,veiculo : Veiculo,motorista : Motorista,status : Status2,observacoes : string){
        this.data = data
        this.hora = hora
        this.cliente = cliente
        this.carga = carga
        this.veiculo = veiculo
        this.motorista = motorista
        this.status = status
        this.observacoes = observacoes
        if(status === Status2.entregue){
            
        }
    }

}

enum TipoCarga{
    seco = "seco",
    refrigerado = "refrigerado",
    perigoso = "perigoso"
}

enum Status{
    disponivel = "disponivel",
    manutenção = "manutenção",
    em_rota = "em rota"
}

enum Status2{
    pendente = "pendente",
    em_andamento = "em andamento",
    entregue = "entregue"
}

let cliente1 = new Cliente()
let veiculo1 = new Veiculo()
let carga1 = new Carga()
let motorista1 = new Motorista()
let entrega1 = new Entrega()
cliente1.cadastrar("Jefferson","Jeffe@gmail.com",123456789,"Palmas","1243546534523")
veiculo1.cadastrar("2e12ed1","Muti","Bastante",TipoCarga.refrigerado,Status.disponivel)
carga1.cadastrar(500,200,TipoCarga.refrigerado,"São Paulo","Santa Catarina",12_09_2024,15_10_2024)
motorista1.cadastrar("Nate","1235gd","Profissional","Muita",veiculo1)
entrega1.cadastrar(15_10_2024,12_52,cliente1,carga1,veiculo1,motorista1,Status2.entregue,"O motorista jogou minha entrega")




