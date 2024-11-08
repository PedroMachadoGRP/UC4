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
var Animal = /** @class */ (function () {
    function Animal() {
        this.nome = "";
        this.idade = 0;
        this.especie = "";
        this.raca = "";
        this.peso = 0;
        this.som = "";
    }
    return Animal;
}());
var Mamifero = /** @class */ (function (_super) {
    __extends(Mamifero, _super);
    function Mamifero() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pelagem = "";
        _this.amamenta = true;
        return _this;
    }
    Mamifero.prototype.emitirSom = function () {
        console.log(this.som);
    };
    Mamifero.prototype.brincar = function () {
        console.log("Brincando");
        this.emitirSom();
    };
    Mamifero.prototype.alimentar = function () {
        console.log("Alimentando");
        this.emitirSom();
    };
    return Mamifero;
}(Animal));
var Ave = /** @class */ (function (_super) {
    __extends(Ave, _super);
    function Ave() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.envergaduraAsa = "";
        _this.tipoBico = "";
        return _this;
    }
    Ave.prototype.emitirSom = function () {
        console.log(this.som);
    };
    Ave.prototype.brincar = function () {
        console.log("Brincando");
        this.emitirSom();
    };
    Ave.prototype.alimentar = function () {
        console.log("Alimentando");
        this.emitirSom();
    };
    return Ave;
}(Animal));
var Peixe = /** @class */ (function (_super) {
    __extends(Peixe, _super);
    function Peixe() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tamanhoAquario = 0;
        _this.tipoAlimento = "";
        return _this;
    }
    Peixe.prototype.emitirSom = function () {
        console.log(this.som);
    };
    Peixe.prototype.brincar = function () {
        console.log("Brincando");
        this.emitirSom();
    };
    Peixe.prototype.alimentar = function () {
        console.log("Alimentando");
        this.emitirSom();
    };
    return Peixe;
}(Animal));
var mamifero = new Mamifero();
mamifero.nome = "Tigre";
mamifero.idade = 5;
mamifero.especie = "Branco";
mamifero.raca = "Tigre";
mamifero.peso = 50;
mamifero.som = "Rrrr";
mamifero.pelagem = "Branca";
mamifero.amamenta = true;
console.log(mamifero);
mamifero.alimentar();
mamifero.brincar();
var ave = new Ave();
ave.nome = "Papagaio";
ave.idade = 3;
ave.especie = "Verde";
ave.raca = "Papagaio";
ave.peso = 2;
ave.envergaduraAsa = "Muita";
ave.som = "Piu";
console.log(ave);
ave.alimentar();
ave.brincar();
