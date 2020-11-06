let count = 0;
//if add to cart btn clicked
$('.cart-btn').on('click', function (){
  let cart = $('.cart-nav');
  let imgToDrag = $(this).parent('.buttons').parent('.content').parent('.card').find("img").eq(0);
  if(imgToDrag){
      let imgclone = imgToDrag.clone().offset({
          top:imgToDrag.offset().top,
          left:imgToDrag.offset().left
      }).css({
          'opacity': '.8',
          'position':'absolute',
          'height':'150px' ,
          'width': '150px',
          'z-index': '100'
      }).appendTo($('body')).animate({
          'top':cart.offset().top +20,
          'left':cart.offset().left +30,
          'width': '75',
          'height':'75'
      } ,100,'easeInOutExpo');
    setTimeout(function(){
        count++;
        $(".cart-nav .item-count").text(count);
    } ,1500);
    imgclone.animate({
        'width':0 ,
        'height':0
    } ,function(){
        $(this).detach()
    });
  }
  
});
   



document.addEventListener('contextmenu' , event => event.preventDefault());

