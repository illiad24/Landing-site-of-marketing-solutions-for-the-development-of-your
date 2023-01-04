document.addEventListener('click', documentClick);

function documentClick(e) {
    const targItem = e.target;
    if (targItem.closest('.icon-menu')) {
        document.documentElement.classList.toggle('menu-open')
    }
}

