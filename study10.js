// control statement (loop/iteration/repetition) Ep.4
// break and continue ใน loop
//------------------------------
// 1. break in loop ทำงานเมื่อไหร่ จบลูปเลย
for (let i = 1; i <= 5; i++) {
  if (i == 3) {
    break;
  }
  console.log(`${i}Hello`);
}
console.log(`-----------------`);

// 2. continue in loop ทำงานเมื่อไหร่ จบลูปรอบนั้น ไปรอบต่อไปเลย
for (let i = 1; i <= 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log(`${i} Hello`);
}
