class ContaBancaria{

    constructor(conta, saldo){
        this.conta = conta;
        this.saldo = 0;
    }

    sacar(valor){
        if(valor <= this.saldo){
            this.saldo -= valor;
            return console.log(`${conta}/ Valor Sacado R$${valor}/ Saldo total R$${this.saldo.toFixed(2)}`);
        }
        if(valor > this.saldo){
            return console.log("Saldo Insuficiente! realize um deposito")
        }

    }

    depositar(valor){ 
        this.saldo += valor;
        return //console.log(`Saldo atualizado R$:${this.saldo.toFixed(2)}`);
    }

    verSaldo(){
        return console.log(`Conta: ${this.conta} Saldo: ${this.saldo.toFixed(2)}`);
    }



}

/*const conta1 = new ContaBancaria(1221, 1);
console.log(conta1);
conta1.depositar(1000);
conta1.verSaldo();
conta1.sacar(1200);
conta1.verSaldo();*/

const limite = Symbol('limite');//é uma forma de proteger o código, tornando o atributo _limite mais privado e menos acessível fora da classe.
// conta corrente com limite
class ContaCorrente extends ContaBancaria {
    constructor(conta, saldo, limite){
        super(conta, saldo);//super faz a referencia dos atributos da superclasse
        this.limite = 0;
    }

    getLimite(){
        return console.log(`O seu limite é de R$:${this.limite.toFixed(2)}`);
    }
    
    setLimite(valorLimite){
        this._limite = valorLimite;
    }

    sacar(valor){
        if(valor <= (this.saldo + this.limite)){
            if(valor < this.saldo){
                this.saldo -= valor;
            return console.log(`${this.conta}/ Valor Sacado R$${valor}/ Saldo total R$${this.saldo.toFixed(2)}`);
            }else if(valor > this.saldo){
                const valorTotal =  (valor - this.saldo);
                this.saldo = 0;
                this.limite -= valorTotal;
                return console.log(`${this.conta}/ Valor Sacado R$${valor}/ Saldo total R$${this.saldo.toFixed(2)}/ Limite restante R$:${this.limite.toFixed(2)}`);
            }
        }// se o saque for maior que o saldo ele utiliza o saldo + o limite
        if(valor > (this.saldo + this.limite)){
            return console.log("Saldo Insuficiente! realize um deposito")
        }

    }
}

//const conta2 = new ContaCorrente(3399);
//conta2.depositar(1000);
//conta2.limite = 1000;
//conta2.sacar(1500);
//console.log(conta2);
//conta2.sacar(1500);
//conta2.verSaldo();

class ContaPoupanca extends ContaBancaria{
    constructor(conta, saldo){
        super(conta, saldo);
    }
}

const poup = new ContaPoupanca(3301);
poup.depositar(10000);
poup.verSaldo();
poup.sacar(10000.01);