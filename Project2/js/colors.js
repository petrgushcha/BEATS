const mesureWidth = item => {
    let reqItemWidth = 0;

    const screenWidth = $(window).width();
    const container = item.closest(".colors");
    const titlesBlocks = container.find(".colors__title")
    const titlesWidthMobile = titlesBlocks.width();
    const titlesWidthTablets = titlesBlocks.width() * titlesBlocks.length;

    const textContainer = item.find(".colors__content-text");
    const paddingLeft = parseInt(textContainer.css("padding-left"))
    const paddingRight = parseInt(textContainer.css("padding-right"))

    const isMobile = window.matchMedia("(max-width: 480px)").matches;
    const isTablets = window.matchMedia("(max-width: 768px)").matches;

    if (isMobile) {
        reqItemWidth = screenWidth - titlesWidthMobile;
    }else{
        if (isTablets) {
            reqItemWidth = screenWidth -titlesWidthTablets;
        }else{
            reqItemWidth = 500;
        }
    }

    return {
        container: reqItemWidth,
        textContainer: reqItemWidth - paddingRight - paddingLeft
    }
}

const closeEvrryItemInContainer = container => {
    const items = container.find(".colors__item");
    const contant = container.find(".colors__content");

    items.removeClass("active__colors");
    contant.width(0);
}

const open = (item) => {
    const hiddenContent = item.find(".colors__content");
    const reqWidth = mesureWidth(item);
    const textBlock = item.find(".colors__content-text")
    
    item.addClass("active__colors");
    hiddenContent.width(reqWidth.container);
    textBlock.width(reqWidth.textContainer);
}

$(".colors__title").on("click", e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const item =$this.closest(".colors__item");
    const itemOpened = item.hasClass("active__colors");
    const container =$this.closest(".colors");

    if (itemOpened) {
        closeEvrryItemInContainer(container);
    }else{
        closeEvrryItemInContainer(container);
        open(item);
    }
})

$('.colors__content').on("click", e =>{
    e.preventDefault();

    closeEvrryItemInContainer();
})