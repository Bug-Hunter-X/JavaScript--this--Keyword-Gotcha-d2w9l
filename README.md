# JavaScript 'this' Keyword Gotcha
This example demonstrates a common pitfall in JavaScript related to the `this` keyword.  The `this` keyword's value is determined by how the function is called, not where it's defined.  This can lead to unexpected behavior, especially for beginners.

## The Bug
The provided code defines a simple function `myFunc` and calls it. What will be logged to the console?

## The Solution
The solution shows how to resolve the `this` binding issue in this case using arrow functions or explicitly setting `this` using `bind()`. Arrow functions lexically bind `this`, while `bind()` creates a new function with a fixed `this` value.  Understanding these patterns is key to writing robust JavaScript code.