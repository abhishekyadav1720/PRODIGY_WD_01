function toggleDropdown(event) {
    const dropdown = event.target.nextElementSibling;
    const isOpen = dropdown.classList.contains('show');
    const allDropdowns = document.querySelectorAll('.dropdown-menu');

    allDropdowns.forEach(d => d.classList.remove('show'));

    if (!isOpen) {
        dropdown.classList.add('show');
    }
}

function toggleNavbar() {
    const navbar = document.querySelector('#navbarSupportedContent');
    navbar.classList.toggle('show');
}

function closeDropdowns(event) {
    if (!event.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-menu').forEach(d => d.classList.remove('show'));
    }
}

function scrollSpy() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    window.addEventListener('scroll', () => {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.dropdown-toggle').forEach(btn => {
        btn.addEventListener('click', toggleDropdown);
    });

    document.querySelector('.navbar-toggler').addEventListener('click', toggleNavbar);

    document.addEventListener('click', closeDropdowns);

    scrollSpy();
});
