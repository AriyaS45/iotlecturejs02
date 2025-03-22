// variable ตัวแปร
// เป็นชื่อที่ตั้งเอง ใช้เก็บข้อมูล
// การใช้งานตัวแปร คือ เอาค่าไปเก็บในตัวแปร หรือ เอาค่าในตัวแปรมาใช้
//------------------------------
// var ไม่จำเป็นต้องกำหนดค่าแต่แรก สามารถเปลี่ยนค่าได้ เป็นตัวแปรแบบ Global
var aa
var bb = 20

// let ไม่จำเป็นต้องกำหนดค่าแต่แรก สามารถเปลี่ยนค่าได้ เป็นตัวแปรแบบ Local
let cc
let dd = 40

// const ต้องกำหนดค่าแต่แรก ไม่สามารถเปลี่ยนค่าได้ เป็นตัวแปรแบบ Local
// const ee  ERROR...
const ee = 50

//-------------------------
var a1 = 10
let b1 = 20
const c1 = 30
{
    var a2 = 10
    let b2 = 20
    const c2 = 30
    {
        var a3 = 10
        let b3 = 20
        const c3 = 30
        console.log(a1, b1, c1)
        console.log(a2, b2, c2)
        console.log(a3, b3, c3)
    }
    console.log(a1, b1, c1)
    console.log(a2, b2, c2)
    console.log(a3)
}
console.log(a1, b1, c1)
console.log(a2)
console.log(a3)