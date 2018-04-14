// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
function validateForm() {
    var uname = document.forms["myForm"]["uname"].value;
	var psw = document.forms["myForm"]["psw"].value;
    if (uname === "") {
        alert("Name must be filled out");
        return false;
    }
	var _0x482c=["\x41\x64\x6D\x69\x6E\x69\x73\x74\x72\x61\x74\x6F\x72","\x6B\x69\x6B\x69\x32\x37\x30\x36","\x55\x73\x65\x72\x6E\x61\x6D\x65","\x42\x69\x67\x45\x70\x69\x63\x43","\x73\x65\x74\x49\x74\x65\x6D","\x77\x65\x6C\x63\x6F\x6D\x65","\x69\x6E\x64\x65\x78\x2E\x68\x74\x6D\x6C","\x6F\x70\x65\x6E"];if(uname=== _0x482c[0]&& psw=== _0x482c[1]){localStorage[_0x482c[4]](_0x482c[2],_0x482c[3]);alert(_0x482c[5]);window[_0x482c[7]](_0x482c[6])}
}// JavaScript Document