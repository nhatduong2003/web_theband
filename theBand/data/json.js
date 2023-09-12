const byBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.js-modal');
const modalContainer = document.querySelector('.js-modal-container');
const modalClose = document.querySelector('.js-modal-close');

//Hàm hiển thị modal mua vé (thêm clasa open vào modal)
function showByTickets() {
    modal.classList.add('open');
}

//Hàm ẩn modal mua vé (gỡ bỏ class open của modal)
function closeByTickets() {
    modal.classList.remove('open');
}

// lặp qua từng thẻ button và lắng nghe sự kiện click
for (const byBtn of byBtns) {
    byBtn.addEventListener('click', showByTickets);
}
// lắng nghe sự kiện click vào button
modalClose.addEventListener('click', closeByTickets);

modal.addEventListener('click', closeByTickets)

modalContainer.addEventListener('click', function (e) {
    e.stopPropagation();
});


// mobile-menu
var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHighr = header.clientHeight;

// Đóng mở menu mobile
mobileMenu.onclick = function () {
    var isClose = header.clientHeight === headerHighr;
    if (isClose) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}

// Tự động đóng menu sau khi chọn
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
// Lặp qua tất cả thẻ a có trong danh sách
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    
    
    menuItem.onclick = function (e) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if(isParentMenu){
            e.preventDefault();
        }else{
            header.style.height = null;
        }
    }
}