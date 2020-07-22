// Empty object to store code
const GOTQuiz = {};

GOTQuiz.buttonScroll = function () {
    $('button').on('click', function () {
        console.log('button is clicked');
        $(this).scroll(('.section1'))
    });
}

$(function () {
    GOTQuiz.buttonScroll();
});

