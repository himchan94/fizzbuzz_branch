"use strict";

// project 1

let i = 1;

while (i < 101) {
  if (i % 3 === 0) {
    if (i % 15 === 0) {
      console.log("fizzbuzz");
    } else {
      console.log("fizz");
    }
  } else if (i % 5 === 0) {
    if (i % 15 === 0) {
      console.log("fizzbuzz");
    } else {
      console.log("buzz");
    }
  } else {
    console.log(i);
  }
  i++;
}
