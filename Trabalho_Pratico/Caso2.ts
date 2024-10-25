class Academia {
    nome : string = ""
    salas : Sala[] = []
    alunos : Aluno[] = []
    instrutores : Instrutor[] = []

    adicionarAluno(aluno : Aluno){
        this.alunos.push(aluno)
    }
    adicionarInstrutor(instrutor : Instrutor){
        this.instrutores.push(instrutor)
    }
    adicionarSala(sala : Sala){
        this.salas.push(sala)
    }
    adicionarAparelho(sala: Sala,nome : string,funcao : string){
        const aparelho = new Aparelho(nome,funcao)
        sala.adicionarAparelho(aparelho)
    }
    adicionarTreinoAuluno(aluno : Aluno,descricao : string,series : number,descanso : number){
        const treino = new Treino(descricao,series,descanso)
        aluno.adicionarTreino(treino)
    }
    adicionarAlunoTreinador(aluno : Aluno,treinador : Instrutor){
        treinador.adicionarAlunos(aluno)
    }
}
enum Plano{
    Semanal = "Semanal",
    Mensal = "Mensal",
    Anual = "Anual"
}
class Sala{
    numero : number = 0
    local : string = ""
    aparelhos : Aparelho[] = []

    constructor(numero : number, local : string){
        this.numero = numero
        this.local = local
    }
    adicionarAparelho(aparelho : Aparelho){
        this.aparelhos.push(aparelho)
    }

}
class fornecedor{
    nome :string = ""
    nomeAparelho : string  = ""
    aparelhos : Aparelho[] = []
    adicionarAparelhos(aparelho :Aparelho){
        this.aparelhos.push(aparelho)
    }

}
class Aparelho{
    nome : string = ""
    funcao : string  = ""
    constructor(nome : string,funcao : string){
        this.nome = nome
        this.funcao = funcao
    }
    
}
class Treino{
descricao : string
series : number
descanso : number

constructor(descricao : string,series : number,decanso : number){
    this.descricao = descricao
    this.series = series
    this.descanso = decanso
    }

}
class Aluno{
    nome : string = ""
    idade : number = 0
    cpf : string = ""
    treinos : Treino[] =[]
    plano : Plano

    constructor(nome : string,idade : number,cpf : string,plano : Plano){
        this.nome = nome
        this.idade = idade
        this.cpf = cpf
        this.plano = plano
    }
    adicionarTreino(treino : Treino){
        this.treinos.push(treino)
    }


}
class Instrutor{
    nome : string = ""
    aula : string = ""
    alunos : Aluno[] = []
    constructor(nome : string,aula : string){
        this.nome = nome
        this.aula = aula
    }
    adicionarAlunos(aluno : Aluno){
        this.alunos.push(aluno)
    }

}


let academia = new Academia()
let aluno_1 = new Aluno("Arlo",20,"12345",Plano.Semanal)
let instrutor_1 = new Instrutor("Arnald","Natação")
let sala_1 = new Sala(121,"Fundos")
let aparelho_1 = new Aparelho("Esteira","Correr")
academia.nome = "Power Gym"

academia.adicionarAluno(aluno_1)
academia.adicionarInstrutor(instrutor_1)
academia.adicionarSala(sala_1)
academia.adicionarAlunoTreinador(aluno_1,instrutor_1)
academia.adicionarAparelho(sala_1,aparelho_1.nome,aparelho_1.funcao)
academia.adicionarTreinoAuluno(aluno_1,"Nadar",12,5)
console.log(academia)
