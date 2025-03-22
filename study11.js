// control statement (loop/iteration/repetition) Ep.5
// ทำงานเดิมๆ ซ้ำ
//------------------------------
// forEach ใช้กับ array

// (????) => {????} เรียกว่า Arrow Function
let data1 = [10, 20, 30, 40, 50];
data1.forEach((iot) => {
  console.log(iot * 100);
});

// for..in ใช้กับ Object หรือ array(ไม่แนะนำ)
console.log("-----------------");
let data2 = {
  name:"Sombat",
  age: 30,
  cit:"Bangkok",
};
console.log(data2.name);
console.log(data2.age);
console.log(data2.cit);
console.log(`++++++++++++`);
for (let wow in data2) {
//   console.log(wow);
//   console.log(data2.wow);
  console.log(data2[wow]);
}

console.log("-----------------");
// for..of ใช้กับ array
for (let iot of data1) {
  console.log(iot * 100);
}
