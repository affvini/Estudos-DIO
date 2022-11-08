class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome,peso,altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    imc(){
        return this.peso / (this.altura * this.altura);
    }

    classificacaoIMC(){       
        if (this.imc() < 18.5){
          return 'Magreza extrema'
        }
        else if (this.imc() > 18.5 && this.imc() <= 24.9){
           return 'Peso normal'
        }
        else if (this.imc() >= 25 && this.imc() <=29.9) {
           return 'Sobrepeso'
        }
        else if (this.imc() >= 30 && this.imc() <= 34.9) {
          return 'Obesidade Grau 1'
        } 
        else if (this.imc() >= 35 && this.imc() <= 40) {
           return 'Obesidade Grau 2'
        }
        else {
           return 'Obesidade grau 3'
        }

    }

}

const joao = new Pessoa('João', 65, 1.75)
const vini = new Pessoa("Vinicius", 71, 1.67)

console.log(`${vini.nome} tem o IMC de ${vini.imc()}`);
console.log(vini.classificacaoIMC());
