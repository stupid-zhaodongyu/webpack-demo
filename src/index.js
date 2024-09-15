import _ from "lodash";
import numRef from "./ref.json";

export function numToWord(num) {
  return _.reduce(
    numRef,
    (accum, ref) => {
      return ref.num === num ? ref.word : accum;
    },
    ""
  );
}

export function wordToNum(word) {
  return _.reduce(
    numRef,
    (accum, ref) => {
      return ref.word === word && word.toLowerCase() ? ref.num : accum;
    },
    -1
  );
}
// function component() {
//   const element = document.createElement("div");

//   // Lodash, now imported by this script
//   element.innerHTML = _.join(["Hello", "webpack"], " ");
//   //   element.onclick = Print.bind(null, 'Hello webpack!');

//   return element;
// }

// document.body.appendChild(component());
