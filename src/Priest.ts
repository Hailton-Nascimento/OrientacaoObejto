  
import { Personagem } from "./Personagem";
import { Util } from "./Util";

export class Priest extends Personagem {
    

    private _espirito: number;
    private _versatilidade: number;
    constructor(nome: string) {
        super(nome);
        this.armadura = Util.randomizar(100, 1_000);
        this.vidaMaxima = Util.randomizar(20, 1_000);
        this.vidaAtual = Util.randomizar(20, this.vidaMaxima);
        this._espirito = Util.randomizar(100, 1_000);
        this._versatilidade = Util.randomizar(100, 1_000);
    }

    public atacar(): string {
        return `Ataque do ${this.nome}`;
    }
    public defender(atacante: Personagem): number {
        throw new Error("Method not implemented.");
    }
    public descansar(): string {
        throw new Error("Method not implemented.");
    }
    public batalhar(): string {
        throw new Error("Method not implemented.");
    }
}