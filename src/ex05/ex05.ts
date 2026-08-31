export const filtrarPares = (array: number[]): number[] => {
  return array.filter((numero) => numero % 2 === 0);
};