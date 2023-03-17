function userId(id: number | string | boolean) {
  console.log("User ID: " + id);
}

userId(101);
userId("100");
userId(false);

// narrowing
function printId(id: number | string) {
  // console.log(id.toUpperCase()); // error
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  }
}
