var Cliente = /** @class */ (function () {
    function Cliente() {
    }
    Cliente.prototype.cadastrar = function (nome, email, telefone, endereco, CNPJ) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.endereco = endereco;
        this.CNPJ = CNPJ;
        alert("".concat(nome, " foi cadastrado com email ").concat(email, " telefone ").concat(telefone, ", seu endere\u00E7o \u00E9 em ").concat(endereco, " e seu CNPJ ").concat(CNPJ));
    };
    return Cliente;
}());
/*class ClienteContratante extends Cliente{
    private frequenciaFrete : string

}*/
var Veiculo = /** @class */ (function () {
    function Veiculo() {
    }
    Veiculo.prototype.cadastrar = function (placa, modelo, capacidadeCarga, carga, status) {
        this.placa = placa;
        this.modelo = modelo;
        this.capacidadeCarga = capacidadeCarga;
        this.carga = carga;
        this.status = status;
        alert("O veiculo de modelo ".concat(modelo, " tem a placa ").concat(placa, " com a capacidade de ").concat(capacidadeCarga, " tem um carga ").concat(carga, " e est\u00E1 ").concat(status));
    };
    return Veiculo;
}());
var Carga = /** @class */ (function () {
    function Carga() {
    }
    Carga.prototype.cadastrar = function (peso, volume, tipoCarga, origem, destino, dataDespache, dataEntrega) {
        this.peso = peso;
        this.volume = volume;
        this.tipoCarga = tipoCarga;
        this.origem = origem;
        this.destino = destino;
        this.dataDespache = dataDespache;
        this.dataEntrega = dataEntrega;
    };
    Carga.prototype.precoCarga = function (peso, volume) {
        var preco = peso * 0.5 + volume * 0.1;
        return preco;
    };
    return Carga;
}());
var Motorista = /** @class */ (function () {
    function Motorista() {
    }
    Motorista.prototype.cadastrar = function (nome, CNH, categoria, experiencia, veiculo) {
        this.nome = nome;
        this.CNH = CNH;
        this.categoria = categoria;
        this.experiencia = experiencia;
        this.veiculo = veiculo;
    };
    return Motorista;
}());
var Rota = /** @class */ (function () {
    function Rota() {
    }
    Rota.prototype.cadastrar = function (origem, destino, distancia, tempo, veiculoApropriado) {
        this.origem = origem;
        this.destino = destino;
        this.distancia = distancia;
        this.tempo = tempo;
        this.veiculoApropriado = veiculoApropriado;
    };
    return Rota;
}());
var Entrega = /** @class */ (function () {
    function Entrega() {
    }
    Entrega.prototype.cadastrar = function (data, hora, cliente, carga, veiculo, motorista, status, observacoes) {
        this.data = data;
        this.hora = hora;
        this.cliente = cliente;
        this.carga = carga;
        this.veiculo = veiculo;
        this.motorista = motorista;
        this.status = status;
        this.observacoes = observacoes;
        if (status === Status2.entregue) {
        }
    };
    return Entrega;
}());
var TipoCarga;
(function (TipoCarga) {
    TipoCarga["seco"] = "seco";
    TipoCarga["refrigerado"] = "refrigerado";
    TipoCarga["perigoso"] = "perigoso";
})(TipoCarga || (TipoCarga = {}));
var Status;
(function (Status) {
    Status["disponivel"] = "disponivel";
    Status["manuten\u00E7\u00E3o"] = "manuten\u00E7\u00E3o";
    Status["em_rota"] = "em rota";
})(Status || (Status = {}));
var Status2;
(function (Status2) {
    Status2["pendente"] = "pendente";
    Status2["em_andamento"] = "em andamento";
    Status2["entregue"] = "entregue";
})(Status2 || (Status2 = {}));
var cliente1 = new Cliente();
var veiculo1 = new Veiculo();
var carga1 = new Carga();
var motorista1 = new Motorista();
var entrega1 = new Entrega();
cliente1.cadastrar("Jefferson", "Jeffe@gmail.com", 123456789, "Palmas", "1243546534523");
veiculo1.cadastrar("2e12ed1", "Muti", "Bastante", TipoCarga.refrigerado, Status.disponivel);
carga1.cadastrar(500, 200, TipoCarga.refrigerado, "São Paulo", "Santa Catarina", 12092024, 15102024);
motorista1.cadastrar("Nate", "1235gd", "Profissional", "Muita", veiculo1);
entrega1.cadastrar(15102024, 1252, cliente1, carga1, veiculo1, motorista1, Status2.entregue, "O motorista jogou minha entrega");
