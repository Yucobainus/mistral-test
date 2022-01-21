const burgerMenu = (icon, menu_body, menu_item) => {
    const iconMenu = document.querySelector(icon)
    const menuBody = document.querySelector(menu_body)
    const mobileItem = document.querySelector(menu_item);
    //Burger Menu
    if (iconMenu) {
        iconMenu.addEventListener('click', function (e) {
            iconMenu.classList.toggle('_active')
            menuBody.classList.toggle('_active')
        })
    }

    mobileItem.addEventListener('click', function (e) {
        iconMenu.classList.remove('_active')
        menuBody.classList.remove('_active')
    })
}
const sidebar = (sidebar_icon, sidebar_body, main_content) => {
    const sidebarIcon = document.querySelector(sidebar_icon)
    const sidebar = document.querySelector(sidebar_body)
    const mainContent = document.querySelector(main_content)
    //Sidebar
    if (sidebarIcon) {
        sidebarIcon.addEventListener('click', function (e) {
            sidebar.classList.toggle('_active')
            sidebarIcon.classList.toggle('_disable')
            document.body.classList.toggle('_lock');
            mainContent.classList.toggle('_sidebar-active')
        })
    }

    $(document).mouseup(function (e) {
        if (!sidebar.contains(e.target)) {
            sidebar.classList.remove('_active');
            sidebarIcon.classList.remove('_disable')
            document.body.classList.remove('_lock');
            mainContent.classList.remove('_sidebar-active')
        }
    });
}

$(document).ready(function () {
    burgerMenu('.menu-icon', '.mobile-header', '.mobile')
})

sidebar('.active', '.main__sidebar', '.main__content')
