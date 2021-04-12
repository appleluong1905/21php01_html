var myString = "Comes out just when you need it to As I paced back and forth all this time";
// Chiều dài của 1 chuỗi
var lengString = 0
lengString = myString.length;
console.log(lengString);
// Kiểm tra vị trí của ký tự trong chuỗi
var positionO = 0;
positionO = myString.indexOf('o');
console.log(positionO);
//
var positionZ = 0;
positionZ = myString.indexOf('z');
console.log(positionZ);
//
var positionOLast = 0;
positionOLast = myString.lastIndexOf('o');
console.log(positionOLast);
// Cắt chuỗi trong chuỗi
// cắt từ vị trí đến vị trí
var myCutString = "";
myCutString = myString.substring(4, 9);
console.log(myCutString);
// cắt từ vị trí với độ dài bao nhiêu
var myCutString2 = "";
myCutString2 = myString.substr(4, 9);// ~ myString.substring(4, 13);
console.log(myCutString2);
// Thay thế chuỗi bằng chuỗi
var newString = "";
newString = myString.replace("out" , "in");
console.log(newString);
// Chuyển thành chữ hoa hoặc chữ thường toàn bộ chuỗi
var upperString = "";
var lowerString = "";
upperString = myString.toUpperCase();
lowerString = myString.toLowerCase();
console.log(upperString);
console.log(lowerString);

