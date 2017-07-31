$('.test-popup-link').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true
    },
    removalDelay: 300,
    mainClass: 'mfp-fade'
});

$('.black').on('click', function(){
    var new_src1 = 'images/ritm-2/Black/IMG_000.jpg'
    var new_src2 = 'images/ritm-2/Black/IMG_0176.jpg'
    var new_src3 = 'images/ritm-2/Black/IMG_0213.jpg'
    var new_src4 = 'images/ritm-2/Black/IMG_0215.jpg'
    $('.color1').attr('href', new_src1)
    $('.colour1').attr('src', new_src1)
    $('.color2').attr('href', new_src2)
    $('.colour2').attr('src', new_src2)
    $('.color3').attr('href', new_src3)
    $('.colour3').attr('src', new_src3)
    $('.color4').attr('href', new_src4)
    $('.colour4').attr('src', new_src4)
});

$('.white').on('click', function(){
    var new_src1 = 'images/ritm-2/White/IMG_001.jpg'
    var new_src2 = 'images/ritm-2/White/IMG_0184.jpg'
    var new_src3 = 'images/ritm-2/White/IMG_0203.jpg'
    var new_src4 = 'images/ritm-2/White/IMG_0208.jpg'
    $('.color1').attr('href', new_src1)
    $('.colour1').attr('src', new_src1)
    $('.color2').attr('href', new_src2)
    $('.colour2').attr('src', new_src2)
    $('.color3').attr('href', new_src3)
    $('.colour3').attr('src', new_src3)
    $('.color4').attr('href', new_src4)
    $('.colour4').attr('src', new_src4)
});


