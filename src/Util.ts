  
export class Util {
    public static randomizar(inicio: number, fim: number): number {
        
        return parseFloat((inicio + Math.random() * (fim - inicio)).toFixed(2));
    }
}