// control statement (loop/iteration/repetition) Ep.3
// คือ การทำงานเดิมๆ ซ้ำ
//------------------------------
// 1. while พิสูจน์ก่อน เป็นจริงทำ
let i = 1
while ( i <= 5 ){
    console.log('Hi...')
    i++
}

// 2. do-while ทำก่อนแล้วพิสูจน์ เป็นจริงกลับไปทำ
let j = 1
do {
    console.log('Hello...')
    j++
} while ( j <= 5 )

// 3. for
for(let k = 1; k <= 5; k++){
    console.log('Hey...')
}