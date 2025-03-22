// funtion Ep.6
// คือ การทำงานหนึ่งๆ จะไม่ทำงานหากเราไม่เรียกใช้ (call function)
//------------------------------
// callback function คือ ฟังก์ชันที่ทำงานที่หลัง หลังจากการเรียกใช้ฟังก์ชันหนึ่งๆ ไปก่อนหน้า
function funcA(x, y, z) {
  console.log(x + y);
  z(`IoT`);
}
function funcB(yourname) {
  console.log(`Helle${yourname}`);
}

funcA(5, 10, funcB);
console.log(`+++++++++++++++++++++`);
funcA(100, 200, (x) => {
  console.log(`Wow wow wow....${x}`);
});
