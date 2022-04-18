import { Reduce } from "./reduce";
export { ProdReduce };

/**
 * Clase ProdReduce, extiende a Reduce
 * Reduce un vector a un único valor multiplicando sus elementos
 */
class ProdReduce extends Reduce {
  protected reduced: number;

  /**
   * Constructor de ProdReduce
   * @param list Lista a reducir
   */
  constructor(protected list: number[]) {
    super(list);
    this.reduced = 1;
  }

  /**
   * Función reduceArray() hace la operación básica de reducción
   * @returns resultado de la reducción
   */
  protected reduceArray(): number {
    this.list.forEach((element) => {
      this.reduced = this.reduced * element;
    });

    return this.reduced;
  }

  /**
   * Hook implementado para mostrar la operación realizada
   */
  protected showOperation() {
    console.log(`Reducido por producto de los elementos`);
  }
}