const body = document.getElementsByTagName('body')[0];
const burger = document.getElementById('open-nav');
const closeBurger = document.querySelectorAll('.close-burger');


burger.addEventListener('click', function(e) {
    body.classList.add('burger-open');
});


for (var i = 0; i < closeBurger.length; ++i) {
    closeBurger[i].addEventListener('click', function(e) {
        body.classList.remove('burger-open');
    });
};

document.addEventListener('scroll', function(e) {
    var scrolled = document.scrollingElement.scrollTop,
        header = document.getElementsByTagName('header')[0],
        footer = document.getElementsByClassName('footer')[0],
        headerHeight = document.getElementsByTagName('header')[0].offsetHeight,
        visibleHeight = document.getElementsByClassName('page')[0].offsetHeight - window.innerHeight;

    if(scrolled > 10){
        body.classList.add('start-scroll');
    }  else {
        body.classList.remove('start-scroll');
    }

    var coef = (visibleHeight - scrolled) / 2;

    if (scrolled > visibleHeight) {
        header.style.transform = 'translateY(-' + headerHeight + 'px)';

        body.classList.add('footer-scroll');
        footer.style.transform = 'translateY(' + coef + 'px)';
    } else {
        header.style.transform = 'translateY(0px)';

        body.classList.remove('footer-scroll');
        footer.style.transform = 'translateY(0px)';
    }

});