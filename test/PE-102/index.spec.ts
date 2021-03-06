import 'mocha';
import { expect } from 'chai';
import { Reduce } from "../../src/PE-102/reduce"
import { AddReduce } from "../../src/PE-102/addreduce";
import { SubReduce } from "../../src/PE-102/subreduce";
import { ProdReduce } from "../../src/PE-102/prodreduce";
import { DivReduce } from "../../src/PE-102/divreduce";

let addreduce = new AddReduce([1, 2, 3]);
let subreduce = new SubReduce([1, 2, 3]);
let prodreduce = new ProdReduce([1, 2, 3]);
let divreduce = new DivReduce([1, 2, 3]);

describe ('Probando AddReduce', () => {
  it('Extiende a Reduce', () => {
    expect(addreduce).to.be.an.instanceOf(Reduce);
  });
  it('Devuelve correctamente el resultado', () => {
    expect(addreduce.run()).to.be.eql(6);
  });
});

describe ('Probando SubReduce', () => {
  it('Extiende a Reduce', () => {
    expect(subreduce).to.be.an.instanceOf(Reduce);
  });
  it('Devuelve correctamente el resultado', () => {
    expect(subreduce.run()).to.be.eql(-6);
  });
});

describe ('Probando ProdReduce', () => {
  it('Extiende a Reduce', () => {
    expect(prodreduce).to.be.an.instanceOf(Reduce);
  });
  it('Devuelve correctamente el resultado', () => {
    expect(prodreduce.run()).to.be.eql(6);
  });
});

describe ('Probando DivReduce', () => {
  it('Extiende a Reduce', () => {
    expect(divreduce).to.be.an.instanceOf(Reduce);
  });
  it('Devuelve correctamente el resultado', () => {
    expect(divreduce.run()).to.be.eql(0);
  });
});