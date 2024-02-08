let option = document.querySelector('#option');
let close = document.querySelector('#close'); 
let closeOrder = document.querySelector('.close-cart'); 
let openOrder = document.querySelector('#cart');



//side panel for menu options
option.addEventListener('click', openOptions); 
function openOptions(){
  const panel = document.querySelector('.sidepanel');
  panel.style.display = 'flex'; 
}
close.addEventListener('click', closeOptions); 
function closeOptions(){
  const panel = document.querySelector('.sidepanel'); 
  panel.style.display = 'none'; 
}

//faq slide toggle 
$("#q1").click(function(){
     $("#a1").slideToggle("slow");
})

$("#q2").click(function(){
     $("#a2").slideToggle("slow");
})

$("#q3").click(function(){
     $("#a3").slideToggle("slow");
})

$("#q4").click(function(){
     $("#a4").slideToggle("slow");
})

$("#q5").click(function(){
     $("#a5").slideToggle("slow");
})

//career scroll top
$("#team").click(function() {
  console.log(".careerBox");
});
$("#benefits").click(function() {
    $('html,body').animate({
        scrollTop: $(".benefitBox").offset().top},
        'slow');
});
$("#positions").click(function() {
    $('html,body').animate({
        scrollTop: $(".positionBox").offset().top},
        'slow');
});
$("#apply").click(function() {
    $('html,body').animate({
        scrollTop: $(".applyBox").offset().top},
        'slow');
});

$(".applyBtn").click(function() {
    $('html,body').animate({
        scrollTop: $(".applyBox").offset().top},
        'slow');
});