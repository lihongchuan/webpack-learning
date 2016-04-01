// //我们这里使用CommonJS的风格
// function generateText() {
//   var element = document.createElement('h2');
//   element.innerHTML = "Hello h2 world -hot load";
//   return element;
// }

// module.exports = generateText;

//ES2015
export default function() {
  var element = document.createElement('h2');
  element.innerHTML = "Hello h2 world hahaha";
  return element;
}