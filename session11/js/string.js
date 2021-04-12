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

// Bài tập String trong javascript:
// Khai báo 1 biến chứa họ và tên đầy đủ, ví dụ: "Tran Van Tuan"
// Đếm xem họ có bao nhiêu ký tự, tên đệm có bao nhiêu ký tự, tên có bao nhiêu ký tự
// Thay thế tên bằng chữ "21PHP01"
// Đếm xem có bao nhiêu chữ "n" trong họ và tên
// In ra và bôi màu vàng các chữ cái a, n, t trong họ và tên
var myFullname = "Luong Hoai Minh Canh";

var firstSpace = myFullname.indexOf(' ');
var myFirstName = myFullname.substring(0, firstSpace);
document.write("<br> First name:");
document.write(myFirstName);


var lastSpace = myFullname.lastIndexOf(' ');
var myLastName = myFullname.substring(lastSpace, myFullname.length);
document.write("<br> Last name:");
document.write(myLastName);

var middleName = myFullname.substring(firstSpace, lastSpace);
document.write("<br> Middle name:");
document.write(middleName);

var myFullname = "Luong Hoai Minh Canh Nhat Nguyen";

// var myFullname = "g Hoai Minh Canh";

// var myFullname = "h Canh";

// var myFullname = "h";

// Khai báo các biến cần thiết
var countChar = 0;
var findChar = "n";
var positionChar = 0;
document.write("<br> Chuỗi ban đầu: " + myFullname);
// Chuyển chuỗi và ký tự cần tìm về 1 kiểu hoa hoặc thường
myFullname = myFullname.toLowerCase();
findChar = findChar.toLowerCase();
// kết thúc chuyển
// Trong khi còn tìm thấy ký tự cần tìm trong chuỗi thì tiếp tục
while (myFullname.indexOf(findChar) > -1) {
	// Vị trí của ký tự tìm được
	positionChar = myFullname.indexOf(findChar);
	// Chuyển chuỗi cũ thành chuỗi mới bằng cách lấy phần từ ký tự tìm được đến
	// cuối chuỗi
	myFullname = myFullname.substring(positionChar + 1, myFullname.length);
	document.write("<br> Chuỗi mới: " + myFullname);
	// Tăng lần đếm lên 1
	countChar++;
}
document.write("<br> So ky tu " + findChar + " trong ten la: ");
document.write(countChar);