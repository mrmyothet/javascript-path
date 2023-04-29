let testBuffer = new ArrayBuffer(16);

let view1 = new Int16Array(testBuffer);
view1[0] = 32; 
console.log(view1);

let view2 = new DataView(testBuffer);
view2.setInt8(2, 43);
let num2 = view2.getInt8(2);
console.log(num2);

let view3 = new DataView(testBuffer);
let num3 = view3.getInt8(2);
console.log(num3);

let view4 = new DataView(testBuffer, 7, 3);
view4.setInt8(0, 54);
view4.setInt8(1, 23);
view4.setInt8(2, 32);
let num4 = view4.getInt8(0);
console.log(num4);