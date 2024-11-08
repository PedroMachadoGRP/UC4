class ItemBiblioteca{
    titulo : string = ""
    autor : string = ""
    dataPub : number = 0
}

class Livro extends ItemBiblioteca{
    isbn : number = 0
    numPaginas : number = 0
    genero : string = ""
    livros: Livro[] = []
    obterInformacoe(){
        console.log(` Titulo : ${this.titulo} \n Autor :${this.autor} \n Data de publicação:${this.dataPub} \n ISBN : ${this.isbn} \n Número de paginas :${this.numPaginas} \n Genero : ${this.genero}`); 
        
    }
    adicionarLivro(livro : Livro){
        this.livros.push(livro);
    }

}
class Revista extends ItemBiblioteca{
    editora : string = ""
    ISSN : number = 0
    numEdicoes : number = 0
    revistar : Revista[] = []
    obterInformacoe(){
        console.log(`Titulo: ${this.titulo} \n Autor: ${this.autor} \n Data de publicação: ${this.dataPub} \n Editora: ${this.editora} \n ISSN: ${this.ISSN} \n Número de edições: ${this.numEdicoes}`);
    }
    adicionarRevista(revista : Revista){
        this.revistar.push(revista);
    }
}
class Usuaario {
    nome : string = ""
    matricula : string = ""
    Tipo : string = ""
    listaEmprestados: Livro[] = []
    listaEmprestadosRevista: Revista[] = []
    usuarios : Usuario[] = []
    obterInformacoes(){
        console.log(`Nome: ${this.nome} \n Matricula: ${ this.matricula} \n Tipo: ${this.Tipo} \n Lista de emprestados: ${this.listaEmprestados}`)
        
    }
    adicionarUsuario(usuario : Usuario){
        this.usuarios.push(usuario);
    }

}
class Emprestimo{
    dataEmprestimo : number = 0
    dataDevolucao : number = 0
    usuarioItemEmprestado : string = ""
    emprestados : Emprestimo[] = []
    obterInformacoes(){
        console.log(`Data do emprestimo ${this.dataEmprestimo} \n Data de devolução: ${this.dataDevolucao} \n Usuário do item emprestado: ${this.usuarioItemEmprestado}`);
        
    }
    adicionarEmprestimo(emprestimo : Emprestimo){
        this.emprestados.push(emprestimo);
    }

}
let comecar = true
while(comecar){
    let pergunta = prompt("Escolha a opção desejada: \n 1-Cadastrar livro \n 2-Cadastrar revista \n 3-Cadastrar Usuário \n 4-Emprestar \n 5-Sair")
    switch(pergunta){
        case "1":
            let livro = new Livro()
            livro.titulo =  String(prompt("Digite o título do livro"))
            livro.autor = String(prompt("Digite o autor do livro"))
            livro.dataPub = Number(prompt("Digite a data de publicação do livro"))
            livro.isbn = Number(prompt("Digite o isbn do livro"))
            livro.numPaginas = Number(prompt("Digite o número de paginas do livro"))
            livro.genero = String(prompt("Digite o gênero do livro"))
            livro.adicionarLivro(livro)
            livro.obterInformacoe()
            break
        case "2":
            let revista = new Revista()
            revista.titulo = String(prompt("Digite o titulo da revista"))
            revista.autor = String(prompt("Digite o autor da revista"))
            revista.dataPub = Number(prompt("Digite a data de publicação da revista"))
            revista.ISSN = Number(prompt("Digite o ISSN da revista"))
            revista.editora = String(prompt("Digite a editora da revista"))
            revista.numEdicoes = Number(prompt("Digite o número de edições da revista"))
            revista.adicionarRevista(revista)
            revista.obterInformacoe()
            break
        case "3":
            let usuario = new Usuario()
            usuario.nome = String(prompt("Digite o nome do usuário"))
            usuario.Tipo = String(prompt("Digite o tipo do usuário"))
            usuario.matricula = String(prompt("Digite onde o usuário está matriculado"))
            usuario.adicionarUsuario(usuario)
            usuario.obterInformacoes()
            break
        case "4":
            let emprestimo = new Emprestimo()
            emprestimo.dataEmprestimo = Number(prompt("Digite a data do emprestar"))
            emprestimo.dataDevolucao = Number(prompt("Digite a data de devolução"))
            emprestimo.usuarioItemEmprestado = String(prompt("Digite o nome do usuário que emprestou o item"))
            emprestimo.adicionarEmprestimo(emprestimo)
            emprestimo.obterInformacoes()
            break
        case "5":
            console.log("saindo...");
            comecar = false
            
    }
}
