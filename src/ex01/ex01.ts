export function elevarAoQuadradoComFor(array: number[]): number[] {
    const resultado: number[] = [];
    for (let i =0; i < array.length; i++){
        resultado.push(array[i] * array[i]);
    }
    return resultado;
}

export function elevarAoQuadradoComForEach(array: number[]) : number[]{
    const resultado: number[] = [];
    array.forEach((numero) =>{
        resultado.push(numero ** 2);
    });
    return resultado;
}