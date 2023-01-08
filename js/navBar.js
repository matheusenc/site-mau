class MobileNavbar {
    constructor(mobileNav, navList, navLinks) {
        this.mobileNav = document.querySelector(mobileNav);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation ?
                (link.style.animation = "") :
                (link.style.animation = `navLinkFade 0.5s ease forwards ${index/7+0.3}s`);
        })
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileNav.classList.toggle(this.activeClass);
        this.animateLinks()
    }

    addClickEvent() {
        this.mobileNav.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileNav) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-nav",
    ".nav-list",
    ".nav-list li",
);

mobileNavbar.init();

