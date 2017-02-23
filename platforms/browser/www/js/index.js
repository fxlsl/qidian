$(function () {
  // content scroll
  var sCon = new Swiper('.headerBox > .swiper-container',{
    scrollbar:'.headerBox > .swiper-scrollbar',
    direction: 'vertical',
    slidesPerView:'auto',
    mousewheelControl:true,
    freeMode: true
  });

  // banner autoplay
  var bAuto = new Swiper('.banner .swiper-container', {
    pagination: '.banner .swiper-pagination',
    nextButton: '.banner .swiper-button-next',
    prevButton: '.banner .swiper-button-prev',
    paginationClickable: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: 2500,
    autoplayDisableOnInteraction: false
  });

  // hot
  var sHot = new Swiper('.hot .swiper-container', {
    pagination: '.hot .swiper-pagination',
    slidesPerView: 4.5,
    paginationClickable: true,
    spaceBetween: 20
  });
  // xs
  var sXs = new Swiper('.xs .swiper-container', {
    pagination: '.xs .swiper-pagination',
    slidesPerView: 4.5,
    paginationClickable: true,
    spaceBetween: 20
  });

  // 热销
  var sRx = new Swiper('.rx', {
    pagination: '.rx .swiper-pagination',
    slidesPerView: 4.5,
    paginationClickable: true,
    spaceBetween: 20
  });
  // 风云
  var sFy = new Swiper('.fy', {
    pagination: '.fy .swiper-pagination',
    slidesPerView: 4.5,
    paginationClickable: true,
    spaceBetween: 20
  });
  // 签到
  var sQd = new Swiper('.qd', {
    pagination: '.qd .swiper-pagination',
    slidesPerView: 4.5,
    paginationClickable: true,
    spaceBetween: 20
  });
  // 推荐
  var sTj = new Swiper('.tj', {
    pagination: '.tj .swiper-pagination',
    slidesPerView: 4.5,
    paginationClickable: true,
    spaceBetween: 20
  });

  var $ph = $('.ph');
  $ph.on('tap','ul li',function(e){
    $ph.find('ul li').removeClass('active');
    $ph.find('ol li').removeClass('active');
    $ph.find('ol li')
    .eq($(this).addClass('active').index())
    .addClass('active');
    return false;
  })

})
