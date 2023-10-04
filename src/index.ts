import { concatenation } from "./concatenation.ts.";

const button = document.querySelector("button")!;
const input = document.querySelector("input")!;

if (button && input) {
  button.addEventListener("click", () => {
    concatenation(input.value, "hello!");
  });
}
console.log("hello");
console.log("111");
