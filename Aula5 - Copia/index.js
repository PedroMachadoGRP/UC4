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
var Loja = /** @class */ (function () {
    function Loja() {
        this.vendas = 0;
        this.estoque = 0;
        this.usuarios = [];
    }
    Loja.prototype.adicionarUsuarios = function (usuario) {
        this.usuarios.push(usuario);
    };
    Loja.prototype.adicionarRoupa = function (RoupaEscolida, usuario, camisa, calca, tenis, id, cor, tamanho, tipo, marca, preco) {
        if (RoupaEscolida === "Camisa") {
            var camisaAdicionada = new Camisa(id, cor, tamanho, tipo, marca, preco);
            usuario.comprarcamisa(camisaAdicionada);
        }
    };
    return Loja;
}());
var Roupa = /** @class */ (function () {
    function Roupa(id, cor, tamanho, tipo, marca, preco) {
        this.id = id;
        this.cor = cor;
        this.tamanho = tamanho;
        this.tipo = tipo;
        this.marca = marca;
        this.preco = preco;
    }
    return Roupa;
}());
var Usuario = /** @class */ (function () {
    function Usuario() {
        this.nome = "";
        this.cpf = 0;
        this.email = "";
        this.camisas = [];
        this.calcas = [];
        this.tenis = [];
    }
    Usuario.prototype.comprarcamisa = function (camisa) {
        this.camisas.push(camisa);
        console.log(camisa);
        if (this.camisas.length >= 2) {
            camisa.preco -= (camisa.preco *= 0.10);
            console.log("Desconto");
        }
    };
    Usuario.prototype.comprarCalca = function (calca) {
        this.calcas.push(calca);
        console.log(calca);
        if (this.calcas.length >= 5) {
            var desconto = calca.preco * 0.10;
            calca.preco = desconto;
            console.log("Desconto");
        }
    };
    return Usuario;
}());
var Camisa = /** @class */ (function (_super) {
    __extends(Camisa, _super);
    function Camisa() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.manga = true;
        _this.camisas = [];
        return _this;
    }
    return Camisa;
}(Roupa));
var Calca = /** @class */ (function (_super) {
    __extends(Calca, _super);
    function Calca() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.comprimento = 0;
        _this.calcas = [];
        return _this;
    }
    return Calca;
}(Roupa));
var Tenis = /** @class */ (function (_super) {
    __extends(Tenis, _super);
    function Tenis() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.esportivo = false;
        _this.tenis = [];
        return _this;
    }
    return Tenis;
}(Roupa));
var loja = new Loja();
var usuario = new Usuario();
var camisa = new Camisa(1, "azul", 40, "camisa", "Nike", 50);
var camisa1 = new Camisa(3, "azul", 40, "camisa", "Nike", 50);
var camusa2 = new Camisa(2, "azul", 40, "camisa", "Nike", 50);
loja.adicionarUsuarios(usuario);
usuario.comprarcamisa(camisa1);
usuario.comprarcamisa(camusa2);
console.log(loja, usuario);
