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
var Funcionario = /** @class */ (function () {
    function Funcionario() {
    }
    return Funcionario;
}());
var FuncionarioHorista = /** @class */ (function (_super) {
    __extends(FuncionarioHorista, _super);
    function FuncionarioHorista() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FuncionarioHorista.prototype.cadastrar = function (nome, idade, CPF, email, ativos, projetos, horasTrabalhadas, salarioMininoHora) {
        this.nome = nome;
        this.idade = idade;
        this.CPF = CPF;
        this.email = email;
        this.ativos = ativos;
        this.projetos = projetos;
        this.horasTrabalhadas = horasTrabalhadas;
        this.salarioMininoHora = salarioMininoHora;
        var somaSalario = horasTrabalhadas * salarioMininoHora;
        this.totalSalario = somaSalario;
    };
    return FuncionarioHorista;
}(Funcionario));
var FuncionarioAssalariado = /** @class */ (function () {
    function FuncionarioAssalariado() {
    }
    return FuncionarioAssalariado;
}());
var FuncionarioComisionado = /** @class */ (function (_super) {
    __extends(FuncionarioComisionado, _super);
    function FuncionarioComisionado() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FuncionarioComisionado;
}(Funcionario));
var funcionarioHorista1 = new FuncionarioHorista();
funcionarioHorista1.cadastrar("Andy", 42, "12351234124214", "Andylol@gmail.com", [], [], 80, 7.5);
console.log(funcionarioHorista1);
