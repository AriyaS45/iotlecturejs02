// operator ตัวดำเนินการ Ep.2
// คือ เครื่องหมายที่ใช้ในการดำเนินการกับข้อมูล
//------------------------------
// Assignment Operators = += -= *= /= %=
let a = 10
let b = 20
b = b + a   //หรือ b += a
a = a * 100 + b - 3     //หรือ a *= 100 + b - 3
console.log(b)
console.log(a)

// Nullish Coalescing Operator __ ?? __ 
// กรณีที่หน้า ?? เป็น null จะได้ค่าหลังเครื่องหมาย ??
// กรณีที่หน้า ?? เป็นใช่ null จะได้ค่านั้นๆ เลย
let aa = null
let bb = 30
console.log(aa ?? 'Hello')
console.log(bb ?? 555)

// Ternary Conditional Operator __?__:__
// เงื่อนไข ? ทำ/ได้ เมื่อจริง : ทำ/ได้ เมื่อเท็จ
console.log(100 < 500 ? 'Hello...' : 'Bye...')
let cc = 'Money'
let dd = 'Monkey'
console.log(cc == dd ? 'Wow....' : 'Woo....')

// Spread Operator  ...  จะใช้กับ object และ array
let ee = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
let ff = [111, 222]
console.log('----------------------')
console.log(ee)
console.log(ff)
let gg = [...ee, ...ff]
console.log(gg)
let hh = [555, 999, ...ee, 888, ...ff]
console.log(hh)
console.log('----------------------')

let ii = {data1: 'Hello', data2: 'Bye'}
let jj = {data3: 'Money', ...ii}
console.log(jj)
let kk = {data3: 'Money', ii}
console.log(kk)