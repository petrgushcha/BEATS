const sections = $("section");
const display = $(".maincontent");

const mobileDetect = new mobileDetect(window.navigator.userAgent)
const isMobile = mobileDetect.mobile();

let inScroll = false;

sections.first().addClass("ops__active");

const performTransition = sectionEq => {

    if (inScroll == false) {
        inScroll = true;
        const postion = sectionEq * -100;

        display.css({
            transform: `translateY(${postion}%)`
        })

        sections.eq(sectionEq).addClass("ops__active").siblings().removeClass("ops__active");

        setTimeout(() => {
            inScroll = false;            
            const sideMenu = $(".fixt-menu");
            sideMenu
                .find(".fixt-menu__item")
                .eq(sectionEq)
                .addClass("fixt-menu__active")
                .siblings()
                .removeClass("fixt-menu__active");
        }, 1300)
    }
}

const scrollViewport = direction => {
    const activeSection = sections.filter(".ops__active")
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();
    
    if (direction == "next" && nextSection.length) {
        performTransition(nextSection.index());
    }

    if (direction == "prev" && prevSection.length) {
        performTransition(prevSection.index());
    }
}

$(window).on("wheel", e => {
    const deltaY = e.originalEvent.deltaY;

    if (deltaY > 0) {
        scrollViewport("next");
    }

    if (deltaY < 0) {
        scrollViewport("prev");
    }
});

$(window).on("keydown", e => {

    const tegName =e.target.tagName.toLowerCase();

    if (tegName != "input" && tagName != "textarea") {
        switch (e.keyCode) {
            case 38:
                scrollViewport("prev");
                break;
    
            case 40:
                scrollViewport("next");
                break;    
        }
    }
})

$("[data-scrol-to]").click(e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const target = $this.attr("data-scrol-to");
    const reqSection = $(`[data-scrol-id=${target}]`);

    performTransition(target - 1);
})

if (isMobile) {
    $("body").swipe( {
        swipe:function(event, direction) {
            const scroller = viewportScroller();
            let scrollDirection = "";
    
            if (direction == "up") scrollDirection ="next";
            if (direction == "down") scrollDirection = "prev";
            
            scroller[scrollDirection]();
        }
    });
}