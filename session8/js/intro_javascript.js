function testExternal() {
	document.getElementById("test_external").innerHTML = "Hello demo external";
}
function change_content() {
	document.getElementById("change_content").innerHTML = "Đây là nội dung mới";
}
function change_content_2() {
	document.getElementById("change_content").innerHTML = "Đây là nội dung đầu tiên";
}
function changeImage() {
	document.getElementById("change_image").src = "img/girl.jpg";
}
function changeOn() {
	document.getElementById("bulb").src = "img/bulb_on.jpg";
}
function changeOff() {
	document.getElementById("bulb").src = "img/bulb_off.png";
}
function changeStyle() {
	document.getElementById("box-demo").style.width = "400px";
	document.getElementById("box-demo").style.backgroundColor = "blue";
}
function hideImage() {
	document.getElementById("change_image").style.display = "none";
}
function showImage() {
	document.getElementById("change_image").style.display = "block";
}