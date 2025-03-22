// funtion Ep.1
// คือ การทำงานหนึ่งๆ จะไม่ทำงานหากเราไม่เรียกใช้ (call function)
//------------------------------
// function มี 4 ประเภทใหญ่
// 1. no parameter, no return
function work01() {
  console.log("Hello....");
}

// 2. have parameters, no return
function work02(aa, bb, cc) {
  console.log(aa + bb + cc);
}
work01();
work01();
work02(10, 20, 30);
work02(100, 200, 300);
work01();
