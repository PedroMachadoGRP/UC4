class Funcionario {
     nome : string
     idade : number
     CPF : string
     email : string
     ativos : []
     projetos : []
}

class FuncionarioHorista extends Funcionario{
    private horasTrabalhadas : number
    private salarioMininoHora : number
    private totalSalario : number

    cadastrar(nome : string, idade  :number, CPF : string,email : string,ativos : [],projetos : [], horasTrabalhadas : number,salarioMininoHora : number){
        this.nome = nome
        this.idade = idade
        this.CPF = CPF
        this.email = email
        this.ativos = ativos
        this.projetos = projetos
        this.horasTrabalhadas = horasTrabalhadas
        this.salarioMininoHora = salarioMininoHora
        let somaSalario = horasTrabalhadas * salarioMininoHora
        this.totalSalario = somaSalario
    }

}

class FuncionarioAssalariado extends Funcionario{
    private salarioBruto : number
    private salarioLiquido : number


    cadastrar(nome : string, idade  :number, CPF : string,email : string,ativos : [],projetos : [], salarioBruto : number){
        this.nome = nome
        this.idade = idade
        this.CPF = CPF
        this.email = email
        this.ativos = ativos
        this.projetos = projetos
        this.salarioBruto = salarioBruto
        if(salarioBruto >= 22259.21){
            let desconto = salarioBruto * 0.075
            salarioBruto = desconto
            this.salarioLiquido = salarioBruto
        }else if(salarioBruto >= 2826.66 ){
            let desconto = salarioBruto * 0.075
        }
    }
}

class FuncionarioComisionado extends Funcionario{
    private precoBaseComissao : number
    private numeroComissoes : number
    private totalComissao : number


    cadastrar(nome : string, idade  :number, CPF : string,email : string,ativos : [],projetos : [], precoBaseComissao : number,numeroComissoes : number){
        this.nome = nome
        this.idade = idade
        this.CPF = CPF
        this.email = email
        this.ativos = ativos
        this.projetos = projetos
        this.precoBaseComissao = precoBaseComissao
        this.numeroComissoes = numeroComissoes
        let somaSalario = precoBaseComissao * numeroComissoes
        this.totalComissao = somaSalario
    }
}

let funcionarioHorista1 = new FuncionarioHorista()
funcionarioHorista1.cadastrar("Andy",42,"12351234124214","Andylol@gmail.com",[],[],80,7.5)
console.log(funcionarioHorista1);
