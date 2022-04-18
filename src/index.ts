import { Reduce } from "./reduce"
import { AddReduce } from "./addreduce";
import { SubReduce } from "./subreduce";
import { ProdReduce } from "./prodreduce";
import { DivReduce } from "./divreduce";

/**
 * Función clientCode para ejecución según el objeto que necesitemos
 */
function clientCode(reduction: Reduce) {
  reduction.run();
}

clientCode(new DivReduce([1, 2, 3]));