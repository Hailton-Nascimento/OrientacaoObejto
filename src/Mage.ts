import { Personagem } from './Personagem';
import { Util } from './Util';

  
export class Mage extends Personagem {
 
    private _intelecto: number;
    private _velocidade: number;
    constructor(nome: string) {
        super(nome);
        this.armadura = Util.randomizar(100, 1_000);
        console.log(this.armadura);
        this.vidaMaxima = Util.randomizar(200, 1_000);
        this.vidaAtual = Util.randomizar(40, this.vidaMaxima);
        this._intelecto = Util.randomizar(100, 1_000);
        this._velocidade = Util.randomizar(10, 2_000);
    }

    public atacar(): string {
        return `Ataque do ${this.nome}`;
    }
    public defender(atacante: Personagem): number {
        throw new Error('Method not implemented.');
    }
    public descansar(): string {
        throw new Error('Method not implemented.');
    }
    public batalhar(): string {
        throw new Error('Method not implemented.');
    }

}