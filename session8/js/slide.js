// Hàm chính trình bày slide
function mySlide(n) {
  // Lấy tất cả các element chứa ảnh slide thông qua class img-slide
  var mySlide = document.getElementsByClassName("img-slide");
  // Ẩn tất cả ảnh slide ban đầu
  for (var i = 0; i < mySlide.length; i++) {
      mySlide[i].style.display = "none";  
  }

  // Nếu đã là slide cuối cùng thì trở về slide đầu tiên
  if (n > mySlide.length) {firstSlide = 1}
  // Nếu là chuyển về slide trước slide đầu tiên thì sẽ là slide cuối cùng    
  if (n < 1) {firstSlide = mySlide.length}
  // Cho hiển thị slide mong muốn
  mySlide[firstSlide-1].style.display = "block";  
}

// Thay đổi hình ảnh slide
function changeSlide(n) {
  mySlide(firstSlide += n);
}

// Khởi tạo bắt đầu hiển thị slide
var firstSlide = 2;
// Gọi function chạy slide
mySlide(firstSlide);

// Tự động chuyển slide
setInterval(function(){
 changeSlide(1);
}, 3000);
