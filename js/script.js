$(function(){
    /*********************************************/
    /* ハンバーガーメニュークリックでnavの表示を切り替え */
    /*********************************************/
    $('.humburger').on('click', function () {
        $(this).toggleClass('active');   /* activeクラスのON/OFF切り替え */ 
        if($(this).hasClass('active')){ /* activeクラスON */
            $('nav').css({
                'visibility': 'visible', /* nav要素をを可視＆クリック可能にする */
                'opacity': 1             /* nav要素を不透明にする(transitionで徐々に不透明にできる) */
            });
        } else {    /* activeクラスOFF */
            $('nav').css({
                'visibility': 'hidden', /* nav要素を不可視＆クリック不可能にする */
                'opacity': 0            /* nav要素を透明にする(transitionで徐々に透明にできる) */
            });
        }
        return false;
    });

    /*************************************/
    /* mainvisualの画像をスライドショーで表示 */
    /*************************************/
    $('.slideshow').slick({
        dots: true,             /* ドットインジケーター表示 */
        speed: 1000,            /* アニメーション速度 1000ms */
        autoplay: true,         /* 自動再生 */
        centerMode: true,       /* 前後の画像を両端に表示 */
        centerPadding: '10%',   /* 両端の見切れる幅 */

        responsive: [{          /* レスポンシブ対応 */
            breakpoint: 769,    /* ブレイクポイント:768px(769pxより小さくなったとき) */
            settings: {
                centerMode: false,  /* 前後のスライドを両端に表示しない */
                centerPadding: '0', /* 両端の見切れる幅0 */
            },
        },],
    });
});
