// funtion Ep.4
// คือ การทำงานหนึ่งๆ จะไม่ทำงานหากเราไม่เรียกใช้ (call function)
//------------------------------
// function expression การประกาศฟังก์ชันโดยใช้ตัวแปร
// var let const การประกาศตัวแปร
// 1. anonymous function ฟังก์ชันที่ไม่มีชื่อ
let aa = function () {
  console.log("Hello....");
};
let bb = function (x, y) {
  console.log(x + y);
};

aa();
bb(5, 10);
bb(100, 200);
aa = 999;
console.log(aa);

// bb=555 error
