//const platformList = ["web", "ios", "android", "xbox", "ps"];
const platformList = [100, 200, 300, 400, 500];

//제네릭 스타일
function supportedPlatforms(platforms: Array<number>) {
  //...
}

//function supportedPlatforms(platforms: number[]) {}

supportedPlatforms(platformList);

//Explicit
let userName: string = "groot";

// Type inference
let userName2 = "grrrr";
