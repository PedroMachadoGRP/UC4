var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ItemBiblioteca = /** @class */ (function () {
    function ItemBiblioteca() {
        this.titulo = "";
        this.autor = "";
        this.dataPub = 0;
    }
    return ItemBiblioteca;
}());
var Livro = /** @class */ (function (_super) {
    __extends(Livro, _super);
    function Livro() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isbn = 0;
        _this.numPaginas = 0;
        _this.genero = "";
        _this.livros = [];
        return _this;
    }
    Livro.prototype.obterInformacoe = function () {
        console.log(" Titulo : ".concat(this.titulo, " \n Autor :").concat(this.autor, " \n Data de publica\u00E7\u00E3o:").concat(this.dataPub, " \n ISBN : ").concat(this.isbn, " \n N\u00FAmero de paginas :").concat(this.numPaginas, " \n Genero : ").concat(this.genero));
    };
    Livro.prototype.adicionarLivro = function (livro) {
        this.livros.push(livro);
    };
    return Livro;
}(ItemBiblioteca));
var Revista = /** @class */ (function (_super) {
    __extends(Revista, _super);
    function Revista() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.editora = "";
        _this.ISSN = 0;
        _this.numEdicoes = 0;
        _this.revistar = [];
        return _this;
    }
    Revista.prototype.obterInformacoe = function () {
        console.log("Titulo: ".concat(this.titulo, " \n Autor: ").concat(this.autor, " \n Data de publica\u00E7\u00E3o: ").concat(this.dataPub, " \n Editora: ").concat(this.editora, " \n ISSN: ").concat(this.ISSN, " \n N\u00FAmero de edi\u00E7\u00F5es: ").concat(this.numEdicoes));
    };
    Revista.prototype.adicionarRevista = function (revista) {
        this.revistar.push(revista);
    };
    return Revista;
}(ItemBiblioteca));
var Usuario = /** @class */ (function () {
    function Usuario() {
        this.nome = "";
        this.matricula = "";
        this.Tipo = "";
        this.listaEmprestados = [];
        this.listaEmprestadosRevista = [];
        this.usuarios = [];
    }
    Usuario.prototype.obterInformacoes = function () {
        console.log("Nome: ".concat(this.nome, " \n Matricula: ").concat(this.matricula, " \n Tipo: ").concat(this.Tipo, " \n Lista de emprestados: ").concat(this.listaEmprestados));
    };
    Usuario.prototype.adicionarUsuario = function (usuario) {
        this.usuarios.push(usuario);
    };
    return Usuario;
}());
var Emprestimo = /** @class */ (function () {
    function Emprestimo() {
        this.dataEmprestimo = 0;
        this.dataDevolucao = 0;
        this.usuarioItemEmprestado = "";
        this.emprestados = [];
    }
    Emprestimo.prototype.obterInformacoes = function () {
        console.log("Data do emprestimo ".concat(this.dataEmprestimo, " \n Data de devolu\u00E7\u00E3o: ").concat(this.dataDevolucao, " \n Usu\u00E1rio do item emprestado: ").concat(this.usuarioItemEmprestado));
    };
    Emprestimo.prototype.adicionarEmprestimo = function (emprestimo) {
        this.emprestados.push(emprestimo);
    };
    return Emprestimo;
}());
var comecar = true;
while (comecar) {
    var pergunta = prompt("Escolha a opção desejada: \n 1-Cadastrar livro \n 2-Cadastrar revista \n 3-Cadastrar Usuário \n 4-Emprestar \n 5-Sair");
    switch (pergunta) {
        case "1":
            var livro = new Livro();
            livro.titulo = String(prompt("Digite o título do livro"));
            livro.autor = String(prompt("Digite o autor do livro"));
            livro.dataPub = Number(prompt("Digite a data de publicação do livro"));
            livro.isbn = Number(prompt("Digite o isbn do livro"));
            livro.numPaginas = Number(prompt("Digite o número de paginas do livro"));
            livro.genero = String(prompt("Digite o gênero do livro"));
            livro.adicionarLivro(livro);
            livro.obterInformacoe();
            break;
        case "2":
            var revista = new Revista();
            revista.titulo = String(prompt("Digite o titulo da revista"));
            revista.autor = String(prompt("Digite o autor da revista"));
            revista.dataPub = Number(prompt("Digite a data de publicação da revista"));
            revista.ISSN = Number(prompt("Digite o ISSN da revista"));
            revista.editora = String(prompt("Digite a editora da revista"));
            revista.numEdicoes = Number(prompt("Digite o número de edições da revista"));
            revista.adicionarRevista(revista);
            revista.obterInformacoe();
            break;
        case "3":
            var usuario = new Usuario();
            usuario.nome = String(prompt("Digite o nome do usuário"));
            usuario.Tipo = String(prompt("Digite o tipo do usuário"));
            usuario.matricula = String(prompt("Digite onde o usuário está matriculado"));
            usuario.adicionarUsuario(usuario);
            usuario.obterInformacoes();
            break;
        case "4":
            var emprestimo = new Emprestimo();
            emprestimo.dataEmprestimo = Number(prompt("Digite a data do emprestar"));
            emprestimo.dataDevolucao = Number(prompt("Digite a data de devolução"));
            emprestimo.usuarioItemEmprestado = String(prompt("Digite o nome do usuário que emprestou o item"));
            emprestimo.adicionarEmprestimo(emprestimo);
            emprestimo.obterInformacoes();
            break;
        case "5":
            console.log("saindo...");
            comecar = false;
    }
}
