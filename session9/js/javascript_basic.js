// Javascript
// - Biến
// - Hàm
// - Vòng lặp
// - Câu điều kiện
// 1. Biến trong Javascript
// - Không có ký tự đặc biệt
// - Không trùng với từ khóa của ngôn ngữ lập trình
// - Sử dụng chữ cái hoa hoặc thường, hoặc số hoặc dấu gạch dưới _
// - Không được bắt đầu bằng số
// - Có ý nghĩa, bằng tiếng Anh
// - Đặt theo quy tắc camel hoặc snake
// Bài tập: 
// Đặt tên biến cho: Họ tên, tuổi, ngày sinh, tỉnh thành
// 2. Hàm trong Javascript
// function
//

function totalStudent() {
	return 50;
}
function total(x, y) {
	return x + y;
}
//
function totalSum(a, b) {
	document.write(a + b);
}
//
totalSum(7, 8);
// Bốn cách hiển thị dữ liệu trong javascript
document.write("<h1> Demo show data</h1>");
document.getElementById('demo').innerHTML = "Test show data again";
// alert('Test show');
console.log('test thu');

// Khai báo biến trong javascript
var userName;
var myAge = 20;

// Câu điều kiện trong javascript
// if(điều kiện) {
// 	Nếu điều kiện đúng thì thực hiện câu lệnh, nếu sai thì không thực hiện
// }

// if (điều kiện) {
// 	Nếu điều kiện đúng thì thực hiện câu lệnh ở đây
// } else {
// 	Nếu điều kiện sai thì thực hiện câu lệnh ở đây
// }

// if (điều kiện 1) {
// 	Nếu điều kiện 1 đúng thì thực hiện câu lệnh ở đây
// } else if (điều kiện 2) {
// 	Nếu điều kiện 2 đúng thì thực hiện câu lệnh ở đây
// } else {
// 	Nếu điều kiện 1 và điều kiện 2 sai thì thực hiện câu lệnh ở đây
// }

// Câu điều kiện switch case

// switch (biến) {
// 	case giá trị 1:
// 		Nếu thỏa giá trị 1 thì thực hiện câu lệnh ở đây
// 		break; // bỏ qua các giá trị khác
// 	case giá trị 2:
// 		Nếu thỏa giá trị 2 thì thực hiện câu lệnh ở đây
// 		break; // bỏ qua các giá trị khác
// 	case giá trị 3:
// 		Nếu thỏa giá trị 3 thì thực hiện câu lệnh ở đây
// 		break; // bỏ qua các giá trị khác
// 	default:
// 		Nếu không thỏa tất cả các giá trị trên thì thực hiện câu lệnh ở đây
// 		break; // bỏ qua các giá trị khác
// }

// BT: Khai báo 2 biến năm và tháng và cho giá trị ban đầu của 2 biến đó
// //(ví dụ: var month = 12; var year = 5);
// - Nếu tháng là 1, 3, 5, 7, 8, 10, 12 thì in ra là: Tháng x có 31 ngày
// - Nếu tháng là  4, 6, 9, 11 thì in ra là: Tháng x có 30 ngày
// - Nếu tháng là 2, thì tùy thuộc vào năm nhuận hay không mà in ra 
// là tháng đó có 28 hay 29 ngày