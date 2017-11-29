jQuery(document).ready(function ($) {
    
      $('#checkbox').change(function(){
        setInterval(function () {
            moveRight();
        }, 3000);
      });
      
        var slideCount = $('#slider ul li').length;
        var slideWidth = $('#slider ul li').width();
        var slideHeight = $('#slider ul li').height();
        var sliderUlWidth = slideCount * slideWidth;
        
        $('#slider').css({ width: slideWidth, height: slideHeight });
        
        $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
        
        $('#slider ul li:last-child').prependTo('#slider ul');
    
        function moveLeft() {
            $('#slider ul').animate({
                left: + slideWidth
            }, 784, function () {
                $('#slider ul li:last-child').prependTo('#slider ul');
                $('#slider ul').css('left', '');
            });
        };
    
        function moveRight() {
            $('#slider ul').animate({
                left: - slideWidth
            }, 784, function () {
                $('#slider ul li:first-child').appendTo('#slider ul');
                $('#slider ul').css('left', '');
            });
        };
    
        $('a.control_prev').click(function () {
            moveLeft();
        });
    
        $('a.control_next').click(function () {
            moveRight();
        });
    
});    
    

jQuery(document).ready(function ($) {
    
      $('#checkbox').change(function(){
        setInterval(function () {
            moveRight();
        }, 3000);
      });
      
        var slideCount = $('#slider-2 ul li').length;
        var slideWidth = $('#slider-2 ul li').width();
        var slideHeight = $('#slider-2 ul li').height();
        var sliderUlWidth = slideCount * slideWidth;
        
        $('#slider-2').css({ width: slideWidth, height: slideHeight });
        
        $('#slider-2 ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
        
        $('#slider-2 ul li:last-child').prependTo('#slider-2 ul');
    
        function moveLeft() {
            $('#slider-2 ul').animate({
                left: + slideWidth
            }, 654, function () {
                $('#slider-2 ul li:last-child').prependTo('#slider-2 ul');
                $('#slider-2 ul').css('left', '');
            });
        };
    
        function moveRight() {
            $('#slider-2 ul').animate({
                left: - slideWidth
            }, 654, function () {
                $('#slider-2 ul li:first-child').appendTo('#slider-2 ul');
                $('#slider-2 ul').css('left', '');
            });
        };
    
        $('a.control_prev').click(function () {
            moveLeft();
        });
    
        $('a.flechaH').click(function () {
            moveRight();
        });
    
    });    


TweenLite.from($('#T1'), 1, { x: -200, alpha: 0, delay: 1, ease: Power1.easeInOut });
TweenLite.from($('#T2'), 1, { x: -200, alpha: 0, delay: 1.5, ease: Power1.easeInOut });
TweenLite. from($('#T3'), 1 ,{x:-300,alpha:0,delay:2,ease:Power1.easeInOut});