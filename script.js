var no = function(){
    // window.alert("You cant ignore me 😍");
    var noBox = document.getElementById('no');
    noBox.style.position = "absolute";
    noBox.style.top = null;
    noBox.style.left = null;
}
var yes = function(){
    var yesBox = document.getElementById('yes');
    yesBox.style.position = "fixed";
    console.log(`${Math.random() * 100}`);
    yesBox.style.top = (Math.random() * 80) + "vh";
    yesBox.style.left = (Math.random() * 80) + "vw";
    console.log(yesBox);
}
