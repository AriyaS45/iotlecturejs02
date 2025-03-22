// data type ชนิดข้อมูล
// คือ ตัวข้อมูล (literal) ที่เก็บไว้ในตัวแปร (variable) หรือที่ทำไปใช้งาน
//------------------------------
// string
let aa = "Hello" //หรือ 'Hello' หรือ `Hello`
console.log(aa)

// number
let bb = 10 //integer
let cc = 20.54548 //float
console.log(bb)
console.log(cc)

// boolean (ตรรกะ)
let dd = true
let ee = false
console.log(dd)
console.log(cc)

// array ***
// value ของอาร์เรย์ มี index number กำกับ และเริ่มที่ 0, 1, 2, .... 
// อยากได้ value ไหนของอาร์เรย์ ให้เขียน อาร์เรย์[index number]
let gg = [10, 20, 30, 40, 50]
let hh = ['AAA','BBB', 'CCC']
let ii = [10, 'A', true, {data1:'Hi...', data2:'Bye...'}]
console.log(gg)
console.log(gg[2])
console.log(hh[1])
console.log(ii[3].data2)

// object ***
let ff = {
    //key: value
    yourname: 'John',
    age: 20,
    gender: 'male',
    studentStatus: true,
    address: {
        province: 'Chonburi',
        city: 'panthong',
    },
    food: ['KFC','Pizza','Cake'],
}
console.log(ff)
console.log(ff.gender)
console.log(ff.yourname)
console.log(ff.address.province)
console.log(ff.food[1])

// undefined ข้อมูล
let jj
console.log(jj)

// null ข้อมูล
let kk = null
console.log(kk)

// type checking การตรวจสอบชนิดข้อมูล
console.log(typeof ff)
console.log(typeof ee)