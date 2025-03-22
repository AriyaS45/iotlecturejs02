// funtion Ep.2
// คือ การทำงานหนึ่งๆ จะไม่ทำงานหากเราไม่เรียกใช้ (call function)
//------------------------------
//3. no parameter, has return
function show03() {
  console.log(`Wow...`);
  return 10;
}

//4. have parameter, has return
function show04(x, y) {
  console.log(`Hey...`);
  return x ** y;
}
console.log(show03());
console.log(`-----------------`);
let data1 = show03();
let data2 = show04(2, 3);
console.log(data1 + data2);
