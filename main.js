/**
 * Created by maverick on 16/9/24.
 */
$(document).ready(function () {

    $(".pili-phone-big").delay(200).animate({
        paddingRight: "120px",
        opacity: "1"
    }, 3000,'easeInOutCubic');
    //$(".pili-part3").delay(300).animate({
    //    opacity: "1"
    //}, "slow");
    $(".pili-slogan1").animate({
        //paddingRight: "120px",
        paddingTop:"116px",
        opacity: "1"
    }, 1500);
    $(".pili-slogan2").delay(300).animate({
        //paddingRight: "120px",
        paddingTop:"20px",
        opacity: "1"
    }, 1600);
    $(".pili-slogan3").delay(600).animate({
        //paddingRight: "120px",
        paddingTop:"24px",
        opacity: "1"
    }, 1500);
    $(".pili-under-button").delay(900).animate({
        //paddingRight: "120px",
        marginingTop:"45px",
        opacity: "1"
    }, 1500);


    var speed = 30;
    var scroll_begin = document.getElementById("scroll_begin");
    var scroll_end = document.getElementById("scroll_end");
    var scroll_div = document.getElementById("scroll_div");
    scroll_end.innerHTML = scroll_begin.innerHTML
    function Marquee() {
        console.log(scroll_div.scrollLeft );
        if (scroll_end.offsetWidth - scroll_div.scrollLeft <= 0)
            scroll_div.scrollLeft -= scroll_begin.offsetWidth
        else
            scroll_div.scrollLeft++
    }


    setInterval(Marquee, speed);


    var numUp = true;

    $(window).scroll(function () {

        var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();

        if (scrollBottom <= 1600 && scrollBottom > 1300) {
            $(".pili-part3").animate({
                opacity: "1"
            }, "slow");
        }


        if (scrollBottom <= 1300) {

            if (numUp) {

                $('.pili-innerbox-num').each(function () {
                    var $this = $(this),
                        countTo = $this.attr('data-count');

                    $({countNum: $this.text()}).animate({
                            countNum: countTo
                        },
                        {
                            duration: 1000,
                            easing: 'linear',
                            step: function () {
                                $this.text(Math.floor(this.countNum));
                            },
                            complete: function () {
                                $this.text(this.countNum);
                                //alert('finished');
                            }
                        });
                });

                numUp = false;
            }

        }


        if (scrollBottom <= 1000) {
            $(".pili-part4").animate({
                opacity: "1"
            }, "slow");
        }

        if (scrollBottom <= 500) {
            $(".pili-part5").animate({
                opacity: "1"
            }, "slow");
        }

    });

    var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();

    if (scrollBottom <= 1600 && scrollBottom > 1300) {
        $(".pili-part3").animate({
            opacity: "1"
        }, "slow");
    }


    if (scrollBottom <= 1300) {

        if (numUp) {

            $('.pili-innerbox-num').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');

                $({countNum: $this.text()}).animate({
                        countNum: countTo
                    },
                    {
                        duration: 1000,
                        easing: 'linear',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                            //alert('finished');
                        }
                    });
            });

            numUp = false;
        }

    }


    if (scrollBottom <= 1000) {
        $(".pili-part4").animate({
            opacity: "1"
        }, "slow");
    }

    if (scrollBottom <= 500) {
        $(".pili-part5").animate({
            opacity: "1"
        }, "slow");
    }

});
