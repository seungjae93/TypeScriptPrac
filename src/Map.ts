interface Arr<T> {
  forEach(callback: (item: T, index: number) => void): void;
  map<S>(callback: (v: T, i: number) => S): S[];
}
const g: Arr<number> = [1, 2, 3];
const h = g.map((v, i) => v + 1); // [2, 3, 4]
const j = g.map((v, i) => v.toString()); // ["2" , "3" ,"4"]; string[]
const k = g.map((v, i) => v % 2 === 0); // [false , true , false] boolean[]

const w: Arr<string> = ["1", "2", "3"];
const wa = w.map((v) => +v);
