var myArray = ["Nam", "Nguyen", "Huy"];
var myArray2 = ["Nam", "Nguyen", "Huy","Nam", "Nguyen", "Huy","Nam", "Nguyen", "Huy"];
console.log(myArray);
console.log(myArray.length);
console.log(myArray[0]);
console.log(myArray[1]);

//In mảng trên ra màn hình như sau:
// 1. Nam
// 2. Nguyen
// 3. Huy
for (var i = 0; i < myArray.length; i++) {
	document.write(i+1 + ". " + myArray[i] + "<br>");
}

var myArray3 = [1, 4, 2, 5, 8, 2, 11, 55, 5, 115];
// 1. Sắp xếp mảng sau theo thứ tự tăng dần và in ra màn hình
// 2. In ra màn hình số lớn nhất trong mảng
// 3. Số lớn nhất nhân vs số nhỏ nhất trong mảng bằng bao nhiêu?
var myArray4 = [
				['Nam', 1998, 'nam@yahoo.com', '098595595'],
				['Huong', 2000, 'huong@yahoo.com', '0905666222'],
				['Huy', 1999, 'huy@yahoo.com', '0925666555'],
];
// In ra danh sách trên như sau
// 1 - Nam - 1998 - nam@yahoo.com - 098595595
// 2 - Huong - 2000 - huong@yahoo.com - 0905666222
// 3 - Huy - 1999 - huy@yahoo.com - 0925666555
console.log(myArray4[1][2]); // Email bạn Huong
console.log(myArray4[2][3]); // SDT bạn Huy