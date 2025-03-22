// type conversion การแปลงชนิดข้อมูล
// คือ การเปลี่ยนชนิดข้อมูลจากชนิดหนึ่งเป็นอีกชนิดหนึ่ง
//------------------------------
// string conversion
let aa = '10'
let bb = '20.58458'
let ff = 'Hello'
console.log(Number(aa) + Number(bb))
console.log(parseInt(aa) + parseFloat(bb))
console.log(Boolean(aa))
console.log(Boolean(ff))
console.log(Number(ff))

// number conversion
let cc = 45.546879
console.log(String(cc))
console.log(cc.toString())
console.log(cc.toFixed(2))
console.log(cc.toFixed(4))
console.log(Boolean(0))
console.log(Boolean(1))
console.log(Boolean(999))


// boolean conversion
let dd = true
let ee = false
console.log(String(dd))
console.log(String(ee))
console.log(dd.toString())
console.log(ee.toString())
console.log(Number(dd))
console.log(Number(ee))

let gg = [10, 20, 30]
console.log(Boolean(gg))
let hh = {data1:'Hi', data2:'Bye'}
console.log(Boolean(hh))
console.log('-------------------------')
let ii = [ ]
let jj = { }
let kk                      // undefined
let ll = null               // null
let mm = 'Hello' / 200      // NaN
console.log(mm)
console.log(Boolean(ii))
console.log(Boolean(jj))
console.log(Boolean(kk))
console.log(Boolean(ll))
console.log(Boolean(mm))