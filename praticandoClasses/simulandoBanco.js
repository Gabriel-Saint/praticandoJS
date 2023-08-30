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
        return console.log(`Saldo atualizado R$:${this.saldo.toFixed(2)}`);
    }

    verSaldo(){
        return console.log(`Conta: ${this.conta} Saldo: ${this.saldo.toFixed(2)}`);
    }



}

const conta1 = new ContaBancaria(1221, 1);
console.log(conta1);
conta1.depositar(1000);
conta1.verSaldo();
conta1.sacar(1200);
conta1.verSaldo();