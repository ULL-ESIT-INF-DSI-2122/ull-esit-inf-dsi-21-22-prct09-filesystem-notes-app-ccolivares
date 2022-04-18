import { Reduce } from "./reduce";
export { AddReduce };

/**
 * Clase AddReduce, extiende a Reduce
 * Reduce un vector a un único valor sumando sus elementos
 */
class AddReduce extends Reduce {
  protected reduced: number;

  /**
   * Constructor de AddReduce
   * @param list Lista a reducir
   */
  constructor(protected list: number[]) {
    super(list);
    this.reduced = 0;
  }

  /**
   * Función reduceArray() hace la operación básica de reducción
   * @returns resultado de la reducción
   */
  protected reduceArray(): number {
    this.list.forEach((element) => {
      this.reduced += element;
    });

    return this.reduced;
  }
}