var values = [50,20,60,60,30,30,90,75,70,95,80,60];
$.fn.animate_Text = function() {
    var string = this.text();
    return this.each(function(){
        var $this = $(this);
        $this.html(string.replace(/./g, '<span class="new">$&</span>'));
        $this.find('span.new').each(function(i, el){
            setTimeout(function(){ $(el).addClass('div_opacity'); }, 80 * i);
        });
    });
};

$(document).ready(
    $('input[type=checkbox]').removeAttr('checked'),
    a(),
    show_progress(),
    types_top(),
    types_down(),
    swap_content(),
    show_preview()
);

function change_progress(progress) {
    var max = values[parseInt(progress.attr('id')) - 1];
    setInterval(function () {
        if (progress.val() >= max) return;
        else progress.val(progress.val() + 1);
    }, 12);
}

function show_progress() {
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 250 && $('progress:last').val() == 0) {
            $('progress').each(function () {
                change_progress($(this));
            });
            $('.g-lines line:last').animate({strokeDashoffset: 0}, 3000, 'easeInOutQuart');
            $('.g-lines-black #black-line3').animate({strokeDashoffset: 0}, 3000, 'easeInOutQuart');
        }
    });
}

function types_top() {
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 0 && $(this).scrollTop() < $('.type-title2:first').offset().top  && !$('.type-title1:last').is(':visible')) {
            $('.type-title1').each(function () {
                $(this).slideDown(500, 'easeInOutQuart');
                setTimeout(function () {
                    $(this).animate_Text();
                }, 500);
            });
            $('.g-circles circle').animate({strokeDashoffset: 0}, 3000, 'easeInOutQuart');
            $('.g-lines line:first').animate({strokeDashoffset: 0}, 3000, 'easeInOutQuart');
            $('.g-lines-black #black-line1').animate({strokeDashoffset: 0}, 3000, 'easeInOutQuart');
            $('.g-lines-black #black-line2').animate({strokeDashoffset: 0}, 3000, 'easeInOutQuart');
            setTimeout(function () {
                $('.avatar img').animate({opacity: 1}, 2000, 'easeInOutQuart');
            }, 1000);
        }
    });
}

function types_down() {
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 200 && !$('.type-title2:last').is(':visible')) {
            $('.type-title2').each(function () {
                $(this).slideDown(500, 'easeInOutQuart');
                setTimeout(function () {
                    $(this).animate_Text();
                }, 500);
            });
            $('.g-lines line:last').animate({strokeDashoffset: 0}, 3000, 'easeInOutQuart');
            $('.g-lines-black #black-line3').animate({strokeDashoffset: 0}, 3000, 'easeInOutQuart');
            // $('.g-lines-black #black-line4').animate({strokeDashoffset: 0}, 3000, 'easeInOutQuart');
        }
    });
}

function a() {
    if ($(window).scrollTop() < 200) {
        $('.type-title1').each(function () {
            $(this).slideDown(500, 'easeInOutQuart');
            $(this).animate_Text();
        })
        $('.g-circles circle').animate({strokeDashoffset: 0}, 3000, 'easeInOutQuart');
        $('.g-lines line:first').animate({strokeDashoffset: 0}, 3000, 'easeInOutQuart');
        $('.g-lines-black #black-line1').animate({strokeDashoffset: 0}, 3000, 'easeInOutQuart');
        $('.g-lines-black #black-line2').animate({strokeDashoffset: 0}, 3000, 'easeInOutQuart');
        setTimeout(function () {
            $('.avatar img').animate({opacity: 1}, 2000, 'easeInOutQuart');
        }, 1000);
    }
    else {
        $('.type-title2').each(function () {
            $(this).slideDown(500, 'easeInOutQuart');
            $(this).animate_Text();
        })
        $('.g-lines line:last').animate({strokeDashoffset: 0}, 3000, 'easeInOutQuart');
        $('.g-lines-black #black-line3').animate({strokeDashoffset: 0}, 3000, 'easeInOutQuart');
        // $('.g-lines-black #black-line4').animate({strokeDashoffset: 0}, 3000, 'easeInOutQuart');
    }
}

function swap_content() {
    var time = 500;
    var func = 'easeInOutSine';
    $('input[type=checkbox]').click(function () {
        var left_resume = $('.resume-page').position().left;
        var left_portfolio = $('.portfolio-page').position().left;
        if ($('input[type=checkbox]:checked').length > 0){
            $('input[type=checkbox]').addClass('mycheck');
            $('.portfolio-page').show();
            $('.portfolio-page').animate({marginLeft: left_resume, opacity: 1}, time, func);
             $('.resume-page').animate({marginLeft: '115vw', opacity: 0}, time, func, function () {
                 $('.resume-page').hide();
             });
             $('.name').animate({marginLeft: '100px', opacity: 0}, time, func,function () {
                 $('.name').text('портфолио');
                 $('.name').css({marginLeft: '0px', opacity: 1});
             });
        }
        else {
            $('input[type=checkbox]').removeClass('mycheck');
            $('.resume-page').show();
            $('.portfolio-page').animate({marginLeft: '-60vw', opacity: 0}, time, func, function () {
                $('.portfolio-page').hide();
            });
            $('.resume-page').animate({marginLeft: left_portfolio, opacity: 1}, time, func);
            $('.name').animate({marginLeft: '100px', opacity: 0}, time, func,function () {
                $('.name').text('резюме');
                $('.name').css({marginLeft: '0px', opacity: 1});
            });
        }
    });
}

var prev_id = ['prev1','prev2','prev3','prev4','prev5','prev6','prev7','prev8'];
var prev_name = ['Хроносейф','Мост','Амрита','Вверх','Uremont','Экомостик','Город сввета','Облака Сибири'];
var prev_text = ['Yii2, Php, MySQL, JavaScript, JQuery, CSS, HTML',
    'Yii2, Php, MySQL, JavaScript, JQuery, CSS, HTML',
    'Yii2, Php, MySQL, JavaScript, JQuery, CSS, HTML',
    'Yii2, Php, MySQL, JavaScript, JQuery, CSS, HTML',
    'Тестирование',
    'Yii2, Php, MySQL, JavaScript, JQuery, CSS, HTML',
    'Laravel',
    'Laravel'];
var prev_redirect = ['http://chronosafe.ru','http://td-most.com','','','http://uremont.com','','http://gorodsveta.ru','cloud38.ru'];

function show_preview() {
    var time = 200;
    var func = 'easeInOutSine';
    $('.col1, .col2').click(function () {
        var background = $(this).css('background-image');
        $('body').append('<div class="prew-panel">' +
            '<p style="margin-bottom: 30px"><i class="fa fa-times close-preview" aria-hidden="true"></i></p><div id="container-info" style="padding-left: 20%; padding-right: 20%; height: 100%;">' +
            '<p class="name-info"></p>' +
            '<div class="pic-preview"></div>' +
            '<p class="text-info"></p></div>' +
            '</div></div>');
        var top = $(window).scrollTop();
        $('.prew-panel').css('top', top);
        $('body').css({'overflowY': 'hidden'});
        //close button
        $('.close-preview').click(function () {
            $('.prew-panel').animate({opacity:0}, time);
            setTimeout(function () {
                $('body').css({'overflowY': 'scroll'});
                $('.prew-panel').remove();
            }, time);
        });
        //add picture to preview image
        $('.pic-preview').css({background: background + ' no-repeat left top', backgroundSize: 'cover'});
        //add text to preview
        for (var i = 0; i < prev_id.length; i++){
            if ($(this).attr('id') == prev_id[i]){
                $('.name-info').text(prev_name[i]);
                $('.text-info').text(prev_text[i]);
                if (prev_redirect[i] != '') {
                    $('#container-info').append('<p style="text-align: center;"><a class="redirect" href=""><i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>');
                    $('.redirect').attr('href', prev_redirect[i]);
                }
                break;
            }
        }
        $('.prew-panel').animate({opacity:1}, time);

    });
}

// document.ondragstart = noselect;

// document.onselectstart = noselect;

// document.oncontextmenu = noselect;

// function noselect() {return false;}