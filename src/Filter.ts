interface Arr<T> {
  filter<S extends T>(callback: (v: T) => v is S): S[];
}

const z: Arr<number> = [1, 2, 3];
const x = z.filter((v): v is number => v % 2 === 0); // [2] number[]

const n: Arr<number | string> = [1, "2", 3, "4", 5];
const i = n.filter((v): v is string => typeof v === "string"); //["2" ,"4"] string[]

const predicate = (v: string | number): v is number => typeof v === "number";
const l = n.filter(predicate); // [1, 3, 5] number[]
