// funtion Ep.3
// คือ การทำงานหนึ่งๆ จะไม่ทำงานหากเราไม่เรียกใช้ (call function)
//------------------------------
// function for default parameter
function work05(x, y = 55, z = 99) {
  console.log(x + y + z);
}
work05(10, 20, 30);
work05(10);

// function for return mulitple value
// return array value
function work06() {
  return [10, `Hello`, true, 555];
}
let data1 = work06();
console.log(data1[1]);
let [aa, bb, cc, dd] = work06();

// return object value
function work07() {
  return {
    a: 10,
    b: `Hello`,
    c: true,
    d: 555,
  };
}
let data2 = work07();
console.log(data2.d);
// use destruction to get value from object and array
let { a, b, c, d } = work07();
console.log(a);
console.log(b);
console.log(c);
console.log(d);
