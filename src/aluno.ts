class Aluno {
    nome: string;
    idade: number;
    matricula: string;

    constructor(nome: string, idade: number, matricula: string) {
        this.nome = nome;
        this.idade = idade;
        this.matricula = matricula;
    }
}

export default Aluno;