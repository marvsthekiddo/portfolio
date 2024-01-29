function setActive(element) {
    var menuItems = document.querySelectorAll('.main-navigation-links li:not(.cta-button)');
    menuItems.forEach(function (item) {
        if (!item.classList.contains('main-navigation-cta-button')) {
            item.classList.remove('active');
        }
    });

    document.querySelector('.main-navigation-cta-button').classList.remove('active');

    if (element.classList.contains('main-navigation-cta-button')) {
        return;
    }

    element.parentNode.classList.add('active');
}