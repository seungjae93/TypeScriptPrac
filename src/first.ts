//타입스크립트는 변수, 매개변수, 리턴값에 타입 붙이는 것!!
//추론이 잘되면 맡기자!
const a: string = "5";
const b = 5;
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;
const f: any = true; //타입스크립트의 주 목적은 any를 없애는 것!

// 매개변수 바로 뒤가 function add의 리턴값 타입
// function add(x: number, y: number): number {
//   return x + y;
// }

// 타입을 지워도 말이되는 코드가 되어야 한다!
// type으로 타입을 선언하는 방식 (type alias)
type Add = (x: number, y: number) => number;
const add: Add = (x, y) => x + y;

// interface Add {
//   (x: number, y: number) : number;
// }
// const add: Add = (x,y) => x+y;

//배열
//const arr: string[] =['123', '456']
//const arr2: Array<number> = [123, 456] -> 제네릭
//const arr3: [number, number, string] = [123, 456, 'hello'] -> 튜플은 갯수가 정해져있다

//객체
// const obj: { lat: number, lon: number } = { lat: 37.5, lon: 127.5 };
