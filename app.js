let $  = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

const tabItems = $$('.tab-item');
const tabContents = $$('.tab-content');
const slideBar = $('.slide-bar');
//console.log([slideBar])

//console.log(tabItems, tabContents);
tabItems.forEach((element, index) => {
    element.onclick = function (e) {
        document.querySelector('.tab-item.active').classList.remove('active');
        document.querySelector('.tab-content.active').classList.remove('active');
        element.classList.add('active');
        tabContents[index].classList.add('active');
        slideBar.style.width = this.offsetWidth + 'px';
        slideBar.style.left  = this.offsetLeft + 'px';
        // console.log(slideBar.style)
        // console.log(this)
        // console.log(this.offsetWidth + 'px');
        // console.log(this.offsetLeft);
    };
});