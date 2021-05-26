import { Util } from "./Util";
export abstract class Personagem {
   
    private _nome: string;
    private _armadura: number;
    private _vidaMaxima: number;
    private _vidaAtual: number;
    
    protected get nome(): string {
        return this._nome;
    }
    protected set nome(value: string) {
        this._nome = value;
    }
    protected get armadura(): number {
        return this._armadura;
    }
    protected set armadura(value: number) {
        this._armadura = value;
    }
    protected get vidaAtual(): number {
        return this._vidaAtual;
    }
    protected set vidaAtual(value: number) {
        this._vidaAtual = value;
    }
    protected get vidaMaxima(): number {
        return this._vidaMaxima;
    }
    protected set vidaMaxima(value: number) {
        this._vidaMaxima = value;
    }

    constructor(nome: string) {
        this._nome = nome;
        this._armadura = Util.randomizar(100, 1_000);
        this._vidaMaxima = Util.randomizar(100, 1_000);
        this._vidaAtual = Util.randomizar(40, this._vidaMaxima);
    }
    public abstract atacar():string; 
    public abstract defender(atacante: Personagem):number; 
    public abstract descansar():string; 
    public abstract batalhar():string; 
} 
