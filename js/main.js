const faqAsks = document.querySelectorAll('.faq-ask');

if (faqAsks) {

    const dropDown = function(item) {
        const descr = item.querySelector('.faq-ask__descr');
        const descrSpan = item.querySelector('.faq-ask__descr span');
        
        if (item.classList.contains('_opened')) {
            descr.style.height = descrSpan.clientHeight + 'px';
        } else {
            descr.style.height = '0px';
        }
    }
    
    faqAsks.forEach( (el) => {
        dropDown(el);

        el.addEventListener('click', (ev) => {
            el.classList.toggle('_opened');

            dropDown(el);
        });

        window.addEventListener('resize', (ev) => {
            dropDown(el);
        });
    });
}