document.addEventListener('click', function (event) {
    var isClickInside = event.target.closest('.menu');
    
    if (!isClickInside) {
        document.querySelectorAll('.submenu').forEach(submenu => {
            submenu.style.display = 'none';
        });
    }
});

document.querySelectorAll('.menu li').forEach(menuItem => {
    menuItem.addEventListener('mouseenter', function () {
        const submenu = this.querySelector('.submenu');
        if (submenu) submenu.style.display = 'block';
    });

    menuItem.addEventListener('mouseleave', function () {
        const submenu = this.querySelector('.submenu');
        if (submenu) submenu.style.display = 'none';
    });
});
