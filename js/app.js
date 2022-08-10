// var leftPro =prompt("Enter Left value");
// var rightPro = prompt("Enter Eight Value");
var leftPro =500;
var rightPro = 700;
var total = (leftPro+rightPro);
var leftPerc = (leftPro/total)*100 +'%';
var rightPerc = (rightPro/total)*100 +'%';
var midpoint = total/2;
console.log(midpoint);
var midEl = midpoint;
var midpoint = document.createElement('span');
midpoint.setAttribute('id', 'midpoint');
midpoint.setAttribute('class', 'mid-point');

//btnActive

var btns = document.querySelectorAll('.Ybtn');
btns.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        btns.forEach(r => r.classList.remove('btnActive'));
        e.target.classList.toggle('btnActive');
    })
})

// var select2El = document.querySelectorAll('.select2');
// select2El.select2();



  
$(document).ready(function() {
    $(".leftSideParty").css("width", leftPerc);
    $(".rightSideParty").css("width", rightPerc);
    $('#progress_bar').append(midpoint);
    $('.select2').select2();
});