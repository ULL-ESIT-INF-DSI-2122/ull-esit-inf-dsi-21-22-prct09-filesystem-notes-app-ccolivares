import { Reduce } from "./reduce";
export { SubReduce };

/**
 * Clase SubReduce, extiende a Reduce
 * Reduce un vector a un único valor restando sus elementos
 */
class SubReduce extends Reduce {
  protected reduced: number;

  /**
   * Constructor de SubReduce
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
      this.reduced = this.reduced - element;
    });

    return this.reduced;
  }

  /**
   * Hook implementado para mostrar la operación realizada
   */
  protected showOperation() {
    console.log(`Reducido por resta de los elementos`);
  }
}