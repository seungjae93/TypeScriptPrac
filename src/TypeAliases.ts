//Type Alias
type CoordType = {
  x: number;
  y: number;
};

//Interface
interface CoordType2 {
  x: number;
  y: number;
}

function printCoord(pt: CoordType) {
  console.log("x value is " + pt.x);
  console.log("y value is " + pt.y);
}

// function printCoord(pt: CoordType2) {
//   console.log("x value is " + pt.x);
//   console.log("y value is " + pt.y);
// }

printCoord({ x: 100, y: 100 });

//Extending an interface

interface Animal {
  name: string;
}
interface Bear extends Animal {
  honey: boolean;
}

//Extending a type via intersections

type animal = {
  name: string;
};
type Lion = Animal & {
  honey: boolean;
};
