const container = document.querySelector(".container")
const swiper = new Swiper('.swiper-hero', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 2000,
    autoplay: {
        delay: 2000
    },
    effect: "fade",
    allowTouchMove: false,
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev"
    // },
    pagination: {
        el: '.swiper-bullet-pagination',
        type: 'bullets',
        clickable: true
    }
})


new SimpleBar(document.querySelector(".simplebar"), {
    /* чтобы изначально ползунок был виден */
    autoHide: false,
    /* с помощью этого значения вы можете управлять высотой ползунка*/
    scrollbarMaxSize: 28,
});
new SimpleBar(document.querySelector(".simplebar-2"), {
    /* чтобы изначально ползунок был виден */
    autoHide: false,
    /* с помощью этого значения вы можете управлять высотой ползунка*/
    scrollbarMaxSize: 28,
});
new SimpleBar(document.querySelector(".simplebar-3"), {
    /* чтобы изначально ползунок был виден */
    autoHide: false,
    /* с помощью этого значения вы можете управлять высотой ползунка*/
    scrollbarMaxSize: 28,
});
new SimpleBar(document.querySelector(".simplebar-4"), {
    /* чтобы изначально ползунок был виден */
    autoHide: false,
    /* с помощью этого значения вы можете управлять высотой ползунка*/
    scrollbarMaxSize: 28,
});
new SimpleBar(document.querySelector(".simplebar-5"), {
    /* чтобы изначально ползунок был виден */
    autoHide: false,
    /* с помощью этого значения вы можете управлять высотой ползунка*/
    scrollbarMaxSize: 28,
});

function openHeaderBottomItem(e) {
    let target = e.target;
    if (target.classList.contains("header-bottom__item")) {
        let btn = target;
        let dropdown = target.querySelector(".simplebar-container");

        document.querySelectorAll(".header-bottom__item").forEach(el => {
            if (el != btn) {
                el.classList.remove("header-bottom__item_active");
            }
        });

        document.querySelectorAll(".simplebar-container").forEach(el => {
            if (el != dropdown) {
                el.classList.remove("down");
            }
        })
        dropdown.classList.toggle("down");
        btn.classList.toggle("header-bottom__item_active")
    }
}

function closeAllHeaderBottomItems(e) {
    let target = e.target;
    if (!target.closest(".header-bottom__item")) {
        document.querySelectorAll(".simplebar-container").forEach(el => {
            el.classList.remove("down");
        })
        document.querySelectorAll(".header-bottom__item").forEach(el => {
            el.classList.remove("header-bottom__item_active");
        });
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".header-bottom__item").forEach(item => {
        item.addEventListener("click", function(e) {
            openHeaderBottomItem(e);
        });
        item.addEventListener("keypress", function(e) {
            openHeaderBottomItem(e);
        });
    })

    document.addEventListener("click", function(e) {
        closeAllHeaderBottomItems(e);
    });
    document.addEventListener("keypress", function(e) {
        closeAllHeaderBottomItems(e);
    });
});


var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 50,
    slidesPerGroup: 3,
    breakpoints: {
        290: {
            slidesPerView: 1,
            slidesPerGroup: 1
        },
        721: {
            slidesPerView: 2,
            spaceBetween: 34,
            slidesPerGroup: 2
        },
        1600: {
            slidesPerView: 3,
            spaceBetween: 50,
            slidesPerGroup: 3
        },
        2559: {
            slidesPerView: 4,
            spaceBetween: 75,
            slidesPerGroup: 4
        },
    },
    pagination: {
        el: ".swiper-pagination-2",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next-2",
        prevEl: ".swiper-button-prev-2",
    },
});


$(".accordion").accordion({
    heightStyle: "content",
    collapsible: true,
    icons: false
});


document.querySelectorAll('.catalog-item-dropdown__btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(e) {
        const path = e.currentTarget.dataset.path;
        document.querySelectorAll('.catalog-item-dropdown__btn').forEach(function(btn) {
            btn.classList.remove('catalog-item-dropdown__btn_active')
        });
        e.currentTarget.classList.add('catalog-item-dropdown__btn_active')

        document.querySelectorAll('.catalog__pointer').forEach(function(tabsBtn) {
            tabsBtn.classList.remove('catalog__pointer_active')
        });
        document.querySelector(`[data-target="${path}"]`).classList.add('catalog__pointer_active');
    });
});


var swiper3 = new Swiper(".events__swiper", {
    slidesPerView: 3,
    spaceBetween: 50,
    slidesPerGroup: 3,
    breakpoints: {
        290: {
            slidesPerView: 1,
            slidesPerGroup: 1
        },
        721: {
            slidesPerView: 2,
            spaceBetween: 34,
            slidesPerGroup: 2
        },
        966: {
            slidesPerView: 3,
            spaceBetween: 27,
            slidesPerGroup: 3
        },
        1367: {
            slidesPerView: 3,
            spaceBetween: 50,
            slidesPerGroup: 3
        },
        2559: {
            slidesPerView: 4,
            spaceBetween: 75,
            slidesPerGroup: 4
        },
    },
    pagination: {
        el: ".events__pagination",
        type: "bullets",
        clickable: true,
    },
    navigation: {
        nextEl: ".events__swiper-button-next",
        prevEl: ".events__swiper-button-prev",
    },
});


tippy('#tooltip1', {
    content: 'Пример современных тенденций - современная методология разработки',
    allowHTML: true,
    interactive: true,
});
tippy('#tooltip2', {
    content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
    allowHTML: true,
    interactive: true,
});
tippy('#tooltip3', {
    content: 'В стремлении повысить качество ',
    allowHTML: true,
    interactive: true,
});


var swiper4 = new Swiper(".projects__swiper", {
    slidesPerView: 3,
    spaceBetween: 50,
    slidesPerGroup: 3,
    breakpoints: {
        290: {
            slidesPerView: 1,
            slidesPerGroup: 1
        },
        721: {
            slidesPerView: 2,
            spaceBetween: 34,
            slidesPerGroup: 2
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 50,
            slidesPerGroup: 2
        },
        1681: {
            slidesPerView: 3,
            spaceBetween: 50,
            slidesPerGroup: 3
        },
        2559: {
            slidesPerView: 4,
            spaceBetween: 75,
            slidesPerGroup: 4
        },
    },
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".projects__swiper-button-next",
        prevEl: ".projects__swiper-button-prev",
    },
});


ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.75846806898367, 37.60108849999989],
        zoom: 14.5
    });
    var myPlacemark = new ymaps.Placemark([55.75846806898367, 37.60108849999989], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map.svg',
        iconImageSize: [20, 20],
    });
    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
}

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);
const validation = new JustValidate('#form', {
    errorFieldCssClass: 'is-invalid',
    errorLabelCssClass: 'is-label-invalid',
    errorLabelStyle: {
        color: '#D11616',
        textDecoration: 'underlined',
    },
    focusInvalidField: true,
    lockForm: true,
});
validation
    .addField('#name', [{
        rule: 'minLength',
        value: 2,
        errorMessage: 'Имя слишком короткое',
    }, {
        rule: 'maxLength',
        value: 30,
        errorMessage: 'Имя должно содержать максимум 30 букв',
    }, {
        rule: 'required',
        errorMessage: 'Поле "Имя" должно быть заполнено',
    }])
    .addField('#tel', [{
        rule: 'required',
        errorMessage: 'Поле "Телефон" должно быть заполнено',
    }, {
        validator: (value) => {
            const phone = selector.inputmask.unmaskedvalue()
            return phone.length === 10 && !isNaN(phone);
        },
        errorMessage: 'Некоректный телефон',
    }])


const element = document.querySelector('.gallery__select');
const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
});


document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('is-active');
    document.querySelector('#menu-list').classList.toggle('menu-is-active');
    document.querySelector('#entry').classList.toggle('entry-is-active');
    document.querySelector('#body').classList.toggle('body');
})
document.querySelector('#x').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('is-active');
    document.querySelector('#menu-list').classList.toggle('menu-is-active');
    document.querySelector('#entry').classList.toggle('entry-is-active');
    document.querySelector('#body').classList.toggle('body');
})

document.querySelectorAll('.header-top__item').forEach(function(item) {
    item.addEventListener('click', function() {
        document.querySelector('#menu').classList.remove('is-active');
        document.querySelector('#menu-list').classList.remove('menu-is-active');
        document.querySelector('#entry').classList.remove('entry-is-active');
        document.querySelector('#body').classList.remove('body');
    })
});
document.querySelector('#search').addEventListener('click', function() {
    document.querySelector('#search-field').classList.toggle('search-is-active');
    document.querySelector('#search').classList.toggle('search-is-hidden');
    document.querySelector('.header__logo').classList.toggle('logo-is-hidden');
    document.querySelector('.header-top__burger').classList.toggle('burger-is-hidden');
})
document.querySelector('#close').addEventListener('click', function() {
    document.querySelector('#search-field').classList.toggle('search-is-active');
    document.querySelector('#search').classList.toggle('search-is-hidden');
    document.querySelector('.header__logo').classList.toggle('logo-is-hidden');
    document.querySelector('.header-top__burger').classList.toggle('burger-is-hidden');
})
document.querySelector('#gallery-item').addEventListener('click', function() {
    document.querySelector('#gallery-background').classList.toggle('body-is-hidden');
    document.querySelector('#gallery-elem').classList.toggle('elem-is-active');
})
document.querySelector('#close-gallery').addEventListener('click', function() {
    document.querySelector('#gallery-background').classList.toggle('body-is-hidden');
    document.querySelector('#gallery-elem').classList.toggle('elem-is-active');
})
document.querySelector('#gallery-background').addEventListener('click', function() {
    document.querySelector('#gallery-background').classList.remove('body-is-hidden');
    document.querySelector('#gallery-elem').classList.remove('elem-is-active');
    document.querySelector('#body').classList.remove('body');
})


! function() {
    "use strict";

    function o() {
        var o = window,
            t = document;
        if (!("scrollBehavior" in t.documentElement.style && !0 !== o.__forceSmoothScrollPolyfill__)) {
            var l, e = o.HTMLElement || o.Element,
                r = 468,
                i = { scroll: o.scroll || o.scrollTo, scrollBy: o.scrollBy, elementScroll: e.prototype.scroll || n, scrollIntoView: e.prototype.scrollIntoView },
                s = o.performance && o.performance.now ? o.performance.now.bind(o.performance) : Date.now,
                c = (l = o.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(l) ? 1 : 0);
            o.scroll = o.scrollTo = function() { void 0 !== arguments[0] && (!0 !== f(arguments[0]) ? h.call(o, t.body, void 0 !== arguments[0].left ? ~~arguments[0].left : o.scrollX || o.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : o.scrollY || o.pageYOffset) : i.scroll.call(o, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : o.scrollX || o.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : o.scrollY || o.pageYOffset)) }, o.scrollBy = function() { void 0 !== arguments[0] && (f(arguments[0]) ? i.scrollBy.call(o, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : h.call(o, t.body, ~~arguments[0].left + (o.scrollX || o.pageXOffset), ~~arguments[0].top + (o.scrollY || o.pageYOffset))) }, e.prototype.scroll = e.prototype.scrollTo = function() {
                if (void 0 !== arguments[0])
                    if (!0 !== f(arguments[0])) {
                        var o = arguments[0].left,
                            t = arguments[0].top;
                        h.call(this, this, void 0 === o ? this.scrollLeft : ~~o, void 0 === t ? this.scrollTop : ~~t)
                    } else {
                        if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
                        i.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                    }
            }, e.prototype.scrollBy = function() { void 0 !== arguments[0] && (!0 !== f(arguments[0]) ? this.scroll({ left: ~~arguments[0].left + this.scrollLeft, top: ~~arguments[0].top + this.scrollTop, behavior: arguments[0].behavior }) : i.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop)) }, e.prototype.scrollIntoView = function() {
                if (!0 !== f(arguments[0])) {
                    var l = function(o) { for (; o !== t.body && !1 === (e = p(l = o, "Y") && a(l, "Y"), r = p(l, "X") && a(l, "X"), e || r);) o = o.parentNode || o.host; var l, e, r; return o }(this),
                        e = l.getBoundingClientRect(),
                        r = this.getBoundingClientRect();
                    l !== t.body ? (h.call(this, l, l.scrollLeft + r.left - e.left, l.scrollTop + r.top - e.top), "fixed" !== o.getComputedStyle(l).position && o.scrollBy({ left: e.left, top: e.top, behavior: "smooth" })) : o.scrollBy({ left: r.left, top: r.top, behavior: "smooth" })
                } else i.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
            }
        }

        function n(o, t) { this.scrollLeft = o, this.scrollTop = t }

        function f(o) { if (null === o || "object" != typeof o || void 0 === o.behavior || "auto" === o.behavior || "instant" === o.behavior) return !0; if ("object" == typeof o && "smooth" === o.behavior) return !1; throw new TypeError("behavior member of ScrollOptions " + o.behavior + " is not a valid value for enumeration ScrollBehavior.") }

        function p(o, t) { return "Y" === t ? o.clientHeight + c < o.scrollHeight : "X" === t ? o.clientWidth + c < o.scrollWidth : void 0 }

        function a(t, l) { var e = o.getComputedStyle(t, null)["overflow" + l]; return "auto" === e || "scroll" === e }

        function d(t) {
            var l, e, i, c, n = (s() - t.startTime) / r;
            c = n = n > 1 ? 1 : n, l = .5 * (1 - Math.cos(Math.PI * c)), e = t.startX + (t.x - t.startX) * l, i = t.startY + (t.y - t.startY) * l, t.method.call(t.scrollable, e, i), e === t.x && i === t.y || o.requestAnimationFrame(d.bind(o, t))
        }

        function h(l, e, r) {
            var c, f, p, a, h = s();
            l === t.body ? (c = o, f = o.scrollX || o.pageXOffset, p = o.scrollY || o.pageYOffset, a = i.scroll) : (c = l, f = l.scrollLeft, p = l.scrollTop, a = n), d({ scrollable: c, method: a, startTime: h, startX: f, startY: p, x: e, y: r })
        }
    }
    "object" == typeof exports && "undefined" != typeof module ? module.exports = { polyfill: o } : o()
}();

let linkAbout = document.getElementById('link-about');
let linkGallery = document.getElementById('link-gallery');
let linkCatalog = document.getElementById('link-catalog');
let linkEvents = document.getElementById('link-events');
let linkProjects = document.getElementById('link-projects');
let linkContacts = document.getElementById('link-contacts');
let linkMap = document.getElementById('link-map');
let linkBen = document.getElementById('link-ben');
let linkBergo = document.getElementById('link-bergo');
let linkBis = document.getElementById('link-bis');
let linkBol = document.getElementById('link-bol');
let linkBons = document.getElementById('link-bons');
let linkBott = document.getElementById('link-bott');
let linkBra = document.getElementById('link-bra');
let linkBrea = document.getElementById('link-brea');
let linkTuch = document.getElementById('link-tuch');
let linkVekk = document.getElementById('link-vekk');
let linkAndr = document.getElementById('link-andr');
let linkDom = document.getElementById('link-dom');
let linkBeno = document.getElementById('link-beno');
let linkGra = document.getElementById('link-gra');
let linkGre = document.getElementById('link-gre');
let linkUdi = document.getElementById('link-udi');
let linkPao = document.getElementById('link-pao');
let linkDjo = document.getElementById('link-djo');
let linkPar = document.getElementById('link-par');
let linkPez = document.getElementById('link-pez');
let linkPet = document.getElementById('link-pet');
let linkPer = document.getElementById('link-per');
let linkPiz = document.getElementById('link-piz');
let linkPint = document.getElementById('link-pint');
let galIt = document.getElementById('gallery-item');

let about = document.getElementById('about');
let gallery = document.getElementById('gallery');
let catalog = document.getElementById('catalog');
let events = document.getElementById('events');
let projects = document.getElementById('projects');
let contacts = document.getElementById('contacts');
let map = document.getElementById('map');
let ben = document.getElementById('ben');
let bergo = document.getElementById('bergo');
let bol = document.getElementById('bol');
let bons = document.getElementById('bons');
let andr = document.getElementById('andr');
let galEl = document.getElementById('gallery-elem');

linkAbout.addEventListener('click', () => { about.scrollIntoView({ behavior: 'smooth' }) });
linkGallery.addEventListener('click', () => { gallery.scrollIntoView({ behavior: 'smooth' }) });
linkCatalog.addEventListener('click', () => { catalog.scrollIntoView({ behavior: 'smooth' }) });
linkEvents.addEventListener('click', () => { events.scrollIntoView({ behavior: 'smooth' }) });
linkProjects.addEventListener('click', () => { projects.scrollIntoView({ behavior: 'smooth' }) });
linkContacts.addEventListener('click', () => { contacts.scrollIntoView({ behavior: 'smooth' }) });
linkMap.addEventListener('click', () => { map.scrollIntoView({ behavior: 'smooth' }) });
linkBen.addEventListener('click', () => { ben.scrollIntoView({ behavior: 'smooth' }) });
linkBergo.addEventListener('click', () => { bergo.scrollIntoView({ behavior: 'smooth' }) });
linkBis.addEventListener('click', () => { bergo.scrollIntoView({ behavior: 'smooth' }) });
linkBol.addEventListener('click', () => { bol.scrollIntoView({ behavior: 'smooth' }) });
linkBons.addEventListener('click', () => { bons.scrollIntoView({ behavior: 'smooth' }) });
linkBott.addEventListener('click', () => { bergo.scrollIntoView({ behavior: 'smooth' }) });
linkBra.addEventListener('click', () => { bergo.scrollIntoView({ behavior: 'smooth' }) });
linkBrea.addEventListener('click', () => { bergo.scrollIntoView({ behavior: 'smooth' }) });
linkTuch.addEventListener('click', () => { bergo.scrollIntoView({ behavior: 'smooth' }) });
linkVekk.addEventListener('click', () => { bergo.scrollIntoView({ behavior: 'smooth' }) });
linkAndr.addEventListener('click', () => { andr.scrollIntoView({ behavior: 'smooth' }) });
linkDom.addEventListener('click', () => { dom.scrollIntoView({ behavior: 'smooth' }) });
linkBeno.addEventListener('click', () => { bergo.scrollIntoView({ behavior: 'smooth' }) });
linkGra.addEventListener('click', () => { bergo.scrollIntoView({ behavior: 'smooth' }) });
linkGre.addEventListener('click', () => { bergo.scrollIntoView({ behavior: 'smooth' }) });
linkUdi.addEventListener('click', () => { bergo.scrollIntoView({ behavior: 'smooth' }) });
linkPao.addEventListener('click', () => { bergo.scrollIntoView({ behavior: 'smooth' }) });
linkDjo.addEventListener('click', () => { bergo.scrollIntoView({ behavior: 'smooth' }) });
linkPar.addEventListener('click', () => { bergo.scrollIntoView({ behavior: 'smooth' }) });
linkPez.addEventListener('click', () => { bergo.scrollIntoView({ behavior: 'smooth' }) });
linkPet.addEventListener('click', () => { bergo.scrollIntoView({ behavior: 'smooth' }) });
linkPer.addEventListener('click', () => { bergo.scrollIntoView({ behavior: 'smooth' }) });
linkPiz.addEventListener('click', () => { bergo.scrollIntoView({ behavior: 'smooth' }) });
linkPint.addEventListener('click', () => { bergo.scrollIntoView({ behavior: 'smooth' }) });
galIt.addEventListener('click', () => { galEl.scrollIntoView({ behavior: 'smooth' }) });