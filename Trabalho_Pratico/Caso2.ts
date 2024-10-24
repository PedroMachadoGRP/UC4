class Academia {

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
    planos: Plano = 0


}
enum Plano{
    Mensal,
    Trimestral,
    Anual
}
enum Estrutor{
    Musculacao,
    Natacao,
    Hipismo,
    

}