(() => {
 const refs = {
    openMobileBtn: document.querySelector('[data-mobile-open]'),
    closeMobileBtn: document.querySelector('[data-mobile-close]'),
    mobile: document.querySelector('[data-mobile]'),
    body: document.querySelector('body'),
 };

 refs.openMobileBtn.addEventListener('click', toggleMobile);
 refs.closeMobileBtn.addEventListener('click', toggleMobile);

 function toggleMobile() {
    refs.mobile.classList.toggle('is-hidden');
    !refs.mobile.classList.contains('is-hidden') ? refs.body.style.overflow='hidden' : refs.body.style.removeProperty('overflow');
 }
})();