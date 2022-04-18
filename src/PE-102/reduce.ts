export { Reduce };

/**
 * Clase abstracta Reduce
 */
abstract class Reduce {
  protected reduced: number;

  /**
   * Constructor de Reduce
   * @param list Lista de elementos a reducir
   */
  constructor(protected list: number[]) {
    this.reduced = 0;
  }

  /**
   * Ejecuta los pasos básicos del programa
   * @returns resultado de la reducción (number)
   */
  public run(): number {
    this.reduced = this.reduceArray();

    let aux_string: string = "";

    this.list.forEach((element) => {
      aux_string += element + " ";
    });
    
    console.log(`Contenido de la lista a reducir: ${aux_string}`)
  
    console.log(`Resultado de la reducción: ${this.reduced.toFixed(2)}`);

    this.showOperation();
    return this.reduced;
  }

  /**
   * Método obligatorio a implementar por clases hijas reduceArray()
   * Hace la operación básica de reducción
   */
  protected abstract reduceArray(): number;

  /**
   * Hook para especificar la operación realizada si se necesita
   */
  protected showOperation() {}
}

