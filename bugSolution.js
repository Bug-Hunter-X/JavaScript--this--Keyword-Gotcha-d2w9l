function myFunc() {
  console.log(this);
}

// In this case, this will likely log the global object (window in browsers, or undefined in strict mode) because myFunc is not called as a method of an object.
myFunc();

// Solution using arrow function (lexical this binding)
const myArrowFunc = () => {
  console.log(this); // this will refer to the surrounding scope
};
myArrowFunc();

// Solution using bind()
const myBoundFunc = myFunc.bind({name: "Bound Object"});
myBoundFunc(); // logs {name: "Bound Object"} 