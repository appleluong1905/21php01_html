// Vòng lặp for trong javascript
for (var i = 0; i < 10; i++) {
	document.write(i);
	document.write("<br>");
}

for (var i = 10; i > 0; i--) {
	document.write(i);
	document.write("<br>");
}
// BT: In ra dãy số từ 0 tới 100
// - Nếu số đó chia hết cho 3 thì in ra là: Số x chia hết cho 3
// - Nếu số đó chia hết cho 5 thì in ra là: Số x chia hết cho 5
// - Nếu số đó chia hết cho 15 thì in ra là: Số x chia hết cho 15 mà không in ra
// Số x chia hết cho 3 và Số x chia hết cho 5
// - Nếu số đó không chia hết cho 3, 5, 15 thì in ra:  Số x không chia hết cho 3, 5, 15
// Bài toán fizzbuzz
for (var i = 0; i <= 100; i++) {
	if (i % 3 == 0) {
		document.write("Số " + i + " chia hết cho 3 <br>");
	}
	if (i % 5 == 0) {
		document.write("Số " + i + " chia hết cho 5 <br>");
	}
	if (i % 15 == 0) {
		document.write("Số " + i + " chia hết cho 15 <br>");
	}
	if ((i % 3 != 0) && (i % 5 != 0) && (i % 15 != 0)) {
		document.write("Số " + i + " không chia hết cho 3, 5, 15 <br>");
	}
}
// Version 2
for (var i = 0; i <= 100; i++) {
	if (i % 3 == 0) {
		document.write("Số " + i + " chia hết cho 3 <br>");
	} else if (i % 5 == 0) {
		document.write("Số " + i + " chia hết cho 5 <br>");
	} else if (i % 15 == 0) {
		document.write("Số " + i + " chia hết cho 15 <br>");
	} else if ((i % 3 != 0) && (i % 5 != 0) && (i % 15 != 0)) {
		document.write("Số " + i + " không chia hết cho 3, 5, 15 <br>");
	}
}

// Version 3
for (var i = 0; i <= 100; i++) {
	if (i % 15 == 0) {
		document.write("Số " + i + " chia hết cho 15 <br>");
	} else if (i % 5 == 0) {
		document.write("Số " + i + " chia hết cho 5 <br>");
	} else if (i % 3 == 0) {
		document.write("Số " + i + " chia hết cho 3 <br>");
	} else if ((i % 3 != 0) && (i % 5 != 0) && (i % 15 != 0)) {
		document.write("Số " + i + " không chia hết cho 3, 5, 15 <br>");
	}
}
// >, <, ==, >=, <=, !=, !
// &&, ||
for (var i = 0; i < 10; ++i) {
	document.write(i);
	document.write("<br>");
}

for (var i = 10; i > 0; --i) {
	document.write(i);
	document.write("<br>");
}
var x = 7;
var y = 10;
var z;
z = 5 + x++ + 6 + y-- + --x + y-- + ++x;
    // 5 + 7 +   6 + 10 +    7 + 9  +  8
document.write("<br>" + z);
document.write("<br>");
document.write(5 + 7 +   6 + 10 +    7 + 9  +  8);
// Huấn: 52;
// Trung: 52;
// Thoa: 51
// Tường, Minh: 51
// Dũng: 51
document.write("<br>");
// Vòng lặp while
var i = 10
while (i > 0) {
	document.write(i + "<br>");
	i--;
}
document.write("<br>");
// Vòng lặp do while
var i = 10
do {
	document.write(i + "<br>");
	i--;
} while (i > 0);

// Khác nhau while và do while là do while thực hiện lệnh ít nhất 1 lần
// Vòng lặp while
var i = 10
while (i > 10) {
	document.write(i + "<br>");
	i--;
}
document.write("<br>");
// Vòng lặp do while
var i = 10
do {
	document.write(i + "<br>");
	i--;
} while (i > 108888);




// BT: Cho 1 số, kiểm ta số đó nếu là
// bằng 2 thì in ra là "Monday",...8 thì in ra là "Sunday", nếu không nằm trong 2 đến 8 thì
// in ra "No day"
var myDay = 51;
switch (myDay) {
	case 2:
		document.write("Monday");
		break;
	case 3:
		document.write("Tuesday");
		break;
	case 4:
		document.write("Wednesday");
		break;
	case 5:
		document.write("Thursday");
		break;
	case 6:
		document.write("Friday");
		break;
	case 7:
		document.write("Saturday");
		break;
	case 8:
		document.write("Sunday");
		break;
	default:
		document.write("No day");
		break;
}

// Đề: Cho ban 2000 vnđ đi mua kẹo .Biết : 1 viên kẹo giá 200 vnđ. cứ 2 
// vỏ kẹo đổi được 1 viên. Hỏi với 2000 vnđ, ban sẽ mua đc bao nhiêu viên kẹo ?

// Cách giải:
// Khai báo 1 biến là kẹo
// Khai báo 1 biến là vỏ kẹo
// Khai báo 1 biến là số tiền
// Khai báo 1 biến là giá kẹo
//  Thực hiện mua kẹo bằng tiền cho đến khi tiền không đủ mua 1 cái kẹo
//  Thực hiện đổi kẹo bằng vỏ kẹo cho đến khi còn ít hơn 2 vỏ kẹo
// Trả về số kẹo mua được!
var candy = 0;
var candyShell = 0;
var money = 2000;
var price = 200;
candy = money / price;
candyShell = candy;
while (candyShell >= 2) {
	candyShell = candyShell-2;
	candy++;
	candyShell++;
}
document.write("<br>");
document.write(candy);




