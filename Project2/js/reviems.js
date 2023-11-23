const findBlockByAlias =alias => {
    return $(".reviems__item").filter((ndx, item) => {
        return $(item).attr("data-linked-with") == alias;
    });
}
$(".interactive-avatar__link").click(e => {
    e.preventDefault();

    const $this = $(e.currrentTarget);
    const target = $this.attr("data-open");
    const itemToShow = findBlockByAlias(target);
    const curItem = $this.closest(".reviems__swither-item");

    itemToShow.addClass("active").siblings().removeClass("active");
    curItem.addClass("active").siblings().removeClass("active");
})