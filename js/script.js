
 $(document).ready(function(){
  $('.counter').counterUp({
    delay: 10,
    time: 1000
});
window.onload = ()=>{
    // $(selector).countMe(delay,speed)
    $("#coun1").countMe(1,1.5);
    $("#coun2").countMe(3,3);
    $("#coun3").countMe(4,5);
 }
 // aos .com
 AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
}); 
