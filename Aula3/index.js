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
var Eletronico = /** @class */ (function () {
    function Eletronico() {
        this.nome = "";
        this.marca = "";
        this.preco = 0;
    }
    Eletronico.prototype.ligarAparelho = function () {
        console.log("Iniciando aparelho");
    };
    return Eletronico;
}());
var Celular = /** @class */ (function (_super) {
    __extends(Celular, _super);
    function Celular() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cor = "";
        _this.camera = 0;
        return _this;
    }
    Celular.prototype.ligarAparelho = function () {
        console.log("Bem vindo ao seu celular");
    };
    Celular.prototype.DesligarAparelho = function (off) {
        if (off === undefined) {
            console.log("Você não está desligando o celular");
        }
        else if (off === "Sim") {
            console.log("Desligando...");
        }
        else if (off === "Não") {
            console.log("Voltando ao celular");
        }
    };
    return Celular;
}(Eletronico));
var celular = new Celular();
celular.DesligarAparelho();
celular.DesligarAparelho("Sim");
celular.DesligarAparelho("Não");
var Computador = /** @class */ (function (_super) {
    __extends(Computador, _super);
    function Computador() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sistema = "";
        return _this;
    }
    Computador.prototype.ligarAparelho = function () {
        console.log("O sistema está iniciando");
    };
    return Computador;
}(Eletronico));
var computador = new Computador();
computador.ligarAparelho;
//let celular = new Celular()
celular.ligarAparelho();
