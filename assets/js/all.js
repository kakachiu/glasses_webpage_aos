"use strict";

$(document).ready(function () {
  //漢堡選單
  $(".showmenu").click(function () {
    $("body").toggleClass("openmenu");
  }); //常見問題摺疊選單

  $(".faqtitle").click(function () {
    $(this).toggleClass("active");
    $(this).siblings().find("p").slideToggle();
    $(this).parent().siblings().find(".faqtitle").removeClass("active");
    $(this).parent().siblings().find(".text p").slideUp();
  }); //部落格手機板次要下拉選單

  $(".phoneIcon").click(function () {
    $(".menuContent").toggleClass("smallActive");
    $(".arrow img").toggleClass("rotate");
  }); // 點擊搜尋放大鏡 input才顯示

  $(".search").click(function () {
    $(".searchInput").addClass("searchInputblock");
  });
});
//# sourceMappingURL=all.js.map
