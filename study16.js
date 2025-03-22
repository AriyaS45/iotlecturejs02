// funtion Ep.5
// คือ การทำงานหนึ่งๆ จะไม่ทำงานหากเราไม่เรียกใช้ (call function)
//------------------------------
// 2. arrow function การประกาศฟังก์ชันโดยใช้ => (fat arrow)
let aa = () => {
  console.log("Hello....");
};

let aaa = () => console.log("Hello...");

const bb = (x, y) => {
  return x + y;
};
const bbb = (x, y) => x + y;

const cc = (x) => x + y;
const ccc = (x) => x + y;
aa();
aaa();

console.log(bb(5, 10));
console.log(bbb(5, 10));
