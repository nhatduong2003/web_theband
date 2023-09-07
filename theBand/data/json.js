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
    modalClose.addEventListener('click',closeByTickets);

    modal.addEventListener('click', closeByTickets)

    modalContainer.addEventListener('click',function(e) {
        e.stopPropagation();
    });