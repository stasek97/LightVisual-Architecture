$(document).ready(function() {
    $(window).scroll(function(){
        var windowScroll = $(window).scrollTop() + 1;
        var windowHeight = $(window).height();
        var documentHeight = $(document).height();

        if((windowScroll + windowHeight) > documentHeight){
            $(".photo-gallery").append('<div class="added-photo-gallery">\n' +
                '                <div class="column block-1">\n' +
                '                    <a class="row img" href="#"><img src="../img/1.png" alt="gallery item"></a>\n' +
                '                    <a class="row img" href="#"><img src="../img/6.png" alt="gallery item"></a>\n' +
                '                </div>\n' +
                '                <div class="column block-2">\n' +
                '                    <div class="row">\n' +
                '                        <a class="photo-gallery-width-2 img" href="#"><img src="../img/2.png" alt="gallery item"></a>\n' +
                '                        <a class="photo-gallery-width-3 img" href="#"><img  src="../img/3.png" alt="gallery item"></a>\n' +
                '                    </div>\n' +
                '                    <div class="row">\n' +
                '                        <a class="photo-gallery-width-3 img" href="#"><img src="../img/4.png" alt="gallery item"></a>\n' +
                '                        <a class="photo-gallery-width-2 img" href="#"><img  src="../img/5.png" alt="gallery item"></a>\n' +
                '                    </div>\n' +
                '                    <div class="row">\n' +
                '                        <a class="photo-gallery-width-2 img" href="#"><img src="../img/7.png" alt="gallery item"></a>\n' +
                '                        <a class="photo-gallery-width-3 img" href="#"><img src="../img/8.png" alt="gallery item"></a>\n' +
                '                    </div>\n' +
                '                </div>\n' +
                '                <div class="column block-2">\n' +
                '                    <div class="row">\n' +
                '                        <a class="photo-gallery-width-3 img" href="#"><img src="../img/9.png" alt="gallery item"></a>\n' +
                '                        <a class="photo-gallery-width-2 img" href="#"><img src="../img/10.png" alt="gallery item"></a>\n' +
                '                    </div>\n' +
                '                    <a class="img" href="#"><img src="../img/12.png" alt="gallery item"></a>\n' +
                '                </div>\n' +
                '                <div class="column block-1 ">\n' +
                '                    <a class="img" href="#"><img src="../img/11.png" alt="gallery item"></a>\n' +
                '                    <a class="img" href="#"><img src="../img/13.png" alt="gallery item"></a>\n' +
                '                </div>\n' +
                '                <div class="column block-1 ">\n' +
                '                    <a class="img" href="#"><img src="../img/14.png" alt="gallery item"></a>\n' +
                '                    <a class="img" href="#"><img src="../img/17.png" alt="gallery item"></a>\n' +
                '                </div>\n' +
                '                <div class="column block-2 ">\n' +
                '                    <div class="row">\n' +
                '                        <a class="photo-gallery-width-3 img" href="#"><img src="../img/15.png" alt="gallery item"></a>\n' +
                '                        <a class="photo-gallery-width-2 img" href="#"><img src="../img/16.png" alt="gallery item"></a>\n' +
                '                    </div>\n' +
                '                    <a class="img" href="#"><img src="../img/18.png" alt="gallery item"></a>\n' +
                '                </div>\n' +
                '            </div>');
        }
        console.log(windowScroll + " " + windowHeight + " " +documentHeight)
    });
});