const revealableElements = document.querySelectorAll('.info-item.revealable');

revealableElements.forEach(element => {
    element.addEventListener('click', () => {
        const hiddenElement = element.querySelector('.hidden');
        hiddenElement.classList.toggle('revealed');
    });
});
