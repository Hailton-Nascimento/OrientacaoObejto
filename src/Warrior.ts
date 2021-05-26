import { Personagem } from "./Personagem";
import { Util } from "./Util";

export class Warrior extends Personagem {
  
    private _forca: number;
    private _agilidade: number;

    constructor(nome: string) {
        super(nome);
        this.armadura = Util.randomizar(1_000, 10_000);
        this.vidaMaxima = Util.randomizar(200, 10_000);
        this.vidaAtual = Util.randomizar(20, this.vidaMaxima);
        this._forca = Util.randomizar(100, 1_000);
        this._agilidade = Util.randomizar(100, 1_000);
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
