"use strict";document.onreadystatechange=function(){"interactive"===document.readyState&&$(window).width()<=700&&$(".main__content-head-ui").appendTo(".main__content-timer")},window.addEventListener("load",function(){function t(e,t){try{history.replaceState(null,null,"#")}catch(e){console.log(e)}$.ajax({url:t,type:"POST",dataType:"html",data:$("#"+e).serialize(),success:function(e){var t=$.parseJSON(e);console.log(t)},error:function(e){alert("Ошибка. Данные не отправлены.")}})}function n(){var a=[];$(".content").fadeOut(100),$(".crumbs__crumb--active").each(function(e,n){$(".content").each(function(e,t){$(t).data("name")===$(n).data("tag-name")&&a.push(t)})}),console.log(a),$(a).length?$(a).fadeIn(100):$(".content").fadeIn(100)}($("#program-events-form").on("input submit",function(e){e.preventDefault(),t("program-events-form","test.php")}),$("#speakers-search").on("input submit",function(e){e.preventDefault(),t("speakers-search","test.php")}),$("#speakers-sort").on("input submit",function(e){e.preventDefault(),t("speakers-sort","test.php")}),$("#edit-form").on("submit",function(e){e.preventDefault(),t("edit-form","test.php")}),$("button.menu__desktop-element").on("click",function(){$(this).toggleClass("menu__desktop-element--open"),$(".header-modal__nav").fadeToggle(400)}),$(".language").on("click",function(){$(this).toggleClass("language--open"),$(".header-modal__language").fadeToggle(400)}),$(".header__acount").on("click",function(){$(this).toggleClass("header__acount--open"),$(".header-modal__acount").fadeToggle(400)}),$(window).width()<=1279&&$(".menu").on("click",function(){var e,t;e=parseInt(document.documentElement.clientWidth),t=parseInt(window.innerWidth)-e,$("body").css({"padding-right":"".concat(t,"px")}),$("body").toggleClass("block"),$(this).toggleClass("menu--open"),$(this).hasClass("menu--open")&&($(".language").removeClass("language--open"),$(".header-modal__language").fadeOut(100))}),$(".filter__switch-text").on("click",function(){$(this).parent().toggleClass("filter__switch--active"),$(this).next().slideToggle(400)}),$(".filter__switch-modal-label").on("click",function(e){$(this).parents(".filter__switch").children(".filter__switch-text").text($(e.target).text()),$(this).parents(".filter__switch-modal").toggle(0),$(this).parents(".filter__switch").toggleClass("filter__switch--active")}),$(".crumbs__crumb").on("click",function(e){$(e.target).parents(".filter-top").length&&($(this).toggleClass("crumbs__crumb--active"),n()),$(e.target).parents(".crumbs__crumb").toggleClass("crumbs__crumb--active"),0===$(e.target).parents(".crumbs").children(".crumbs__crumb--active").length?$(e.target).parents(".crumbs").children(".crumbs__clear").removeClass("crumbs__clear--active"):$(e.target).parents(".crumbs").children(".crumbs__clear").addClass("crumbs__clear--active")}),$(".crumbs__clear").on("click",function(){$(this).parents(".crumbs").children(".crumbs__crumb").removeClass("crumbs__crumb--active"),$(this).removeClass("crumbs__clear--active"),n()}),$(".filter-link").on("click",function(){$(".filter-link--active").removeClass("filter-link--active"),$(this).addClass("filter-link--active")}),$("body").on("click",function(e){var t=$(e.target).hasClass("share")&&$(e.target)||$(e.target).parents(".share").length&&$($(e.target).parents(".share")[0])||null;t&&t.find(".information-share").toggleClass("information-share--active"),$(e.target).hasClass("avatars__more")&&$(e.target)&&$(e.target).toggleClass("avatars__more--active");var n=$(e.target).hasClass("avatars__more-element")&&$(e.target)||$(e.target).parents(".avatars__more-element").length&&$($(e.target).parents(".avatars__more-element")[0])||null;n&&(n.toggleClass("avatars__more-element--active"),n.find(".avatars__more-text").slideToggle(400))}),$(".content__more").on("click",function(){$(".card--hidden").removeClass("card--hidden")}),$(".main__content-more").on("click",function(){if($(".main__content-more").toggleClass("main__content-more--open"),$(".main__content-text--active").length)$(".main__content-text").toggleClass("main__content-text--active"),$(".main__content-text").css("height",$(".main__content-text").data("text-height")),$(".main__content-more-text").text($(".main__content-more-text").data("switch-text-end"));else{$(".main__content-text").toggleClass("main__content-text--active");var e=$(".main__content-text"),t=e.height(),n=e.css("height","auto").height();e.height(t).animate({height:n},200),$(".main__content-more-text").text($(".main__content-more-text").data("switch-text-start"))}}),$(".participants__toggle-button").on("click",function(){$(".participants__toggle-button").removeClass("participants__toggle-button--active"),$(this).addClass("participants__toggle-button--active")}),$(window).width()<=1279&&$(".header-modal__nav-element").appendTo(".menu__desktop"),$(window).width()<=700&&$(".menu__desktop").prepend($(".header-modal__acount")),$(window).width()<=700&&$(".header__button").appendTo(".menu__desktop"),$(window).width()<=900&&$(".card").each(function(e,t){$(t).find(".card__head-crumbs").prepend('<div class="card__head-info">'.concat($(t).find(".card__footer .card__day").text(),"</div>"))}),document.querySelector(".main__recommendation-block")&&1100<$(window).width()&&OverlayScrollbars(document.querySelectorAll(".main__recommendation-block"),{paddingAbsolute:!0}),document.getElementById("timer"))&&function(e,r){var c=document.getElementById(e),s=c.querySelector("#timer-days"),l=c.querySelector("#timer-hours"),d=c.querySelector("#timer-minutes"),m=c.querySelector("#timer-seconds");function t(){var e,t,n,a,i,o=(e=r,t=Date.parse(e)-Date.parse(new Date),n=Math.floor(t/1e3%60),a=Math.floor(t/1e3/60%60),i=Math.floor(t/36e5%24),{total:t,days:Math.floor(t/864e5),hours:i,minutes:a,seconds:n});s.innerHTML=o.days,l.innerHTML=("0"+o.hours).slice(-2),d.innerHTML=("0"+o.minutes).slice(-2),m.innerHTML=("0"+o.seconds).slice(-2),o.total<=0&&(c.classList.add("main__content-start--finish"),clearInterval(_))}t();var _=setInterval(t,1e3)}("timer","\n            ".concat($("#timer").data("timer-month")," \n            ").concat($("#timer").data("timer-day")," \n            ").concat($("#timer").data("timer-year")," \n            ").concat($("#timer").data("timer-hours"),":\n            ").concat($("#timer").data("timer-minutes"),":\n            ").concat($("#timer").data("timer-seconds")," GMT+0300"));$(window).width()<=700&&document.querySelector(".event__swiper")&&new Swiper(".swiper-container",{slidesPerView:"auto",spaceBetween:8,pagination:{el:".swiper-pagination",type:"bullets"}}),$(window).width()<=1100&&$(".main__recommendation-block").appendTo(".recommendation"),$(window).width()<=900&&$(".interesting .section-head__link").appendTo(".interesting .container"),$(window).width()<=900&&$(".webinars .section-head__link").appendTo(".webinars .container")});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwiJCIsIndpbmRvdyIsIndpZHRoIiwiYXBwZW5kVG8iLCJhZGRFdmVudExpc3RlbmVyIiwiYWpheFJlcXVlc3QiLCJhamF4Rm9ybSIsInVybCIsImhpc3RvcnkiLCJyZXBsYWNlU3RhdGUiLCJ6IiwiY29uc29sZSIsImxvZyIsImFqYXgiLCJ0eXBlIiwiZGF0YVR5cGUiLCJkYXRhIiwic2VyaWFsaXplIiwic3VjY2VzcyIsInJlc3BvbnNlIiwicmVzdWx0IiwicGFyc2VKU09OIiwiZXJyb3IiLCJhbGVydCIsImZpbHRlckNvbnRlbnRCbG9jayIsImFyckVsZW1lbnRzIiwiZmFkZU91dCIsImVhY2giLCJpbmRleCIsImVsZW1lbnQiLCJpIiwiZSIsInB1c2giLCJsZW5ndGgiLCJmYWRlSW4iLCJvbiIsInByZXZlbnREZWZhdWx0IiwidGhpcyIsInRvZ2dsZUNsYXNzIiwiZmFkZVRvZ2dsZSIsImRvY3VtZW50V2lkdGgiLCJzY3JvbGxiYXJXaWR0aCIsInBhcnNlSW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJpbm5lcldpZHRoIiwiY3NzIiwicGFkZGluZy1yaWdodCIsImNvbmNhdCIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJwYXJlbnQiLCJuZXh0Iiwic2xpZGVUb2dnbGUiLCJwYXJlbnRzIiwiY2hpbGRyZW4iLCJ0ZXh0IiwidGFyZ2V0IiwidG9nZ2xlIiwiYWRkQ2xhc3MiLCJzaGFyZSIsImZpbmQiLCJtb3JlRWxlbWVudCIsImVsIiwiY3VySGVpZ2h0IiwiaGVpZ2h0IiwiYXV0b0hlaWdodCIsImFuaW1hdGUiLCJwcmVwZW5kIiwiaXRlbSIsInF1ZXJ5U2VsZWN0b3IiLCJPdmVybGF5U2Nyb2xsYmFycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwYWRkaW5nQWJzb2x1dGUiLCJnZXRFbGVtZW50QnlJZCIsImlkIiwiZW5kdGltZSIsImNsb2NrIiwiZGF5c1NwYW4iLCJob3Vyc1NwYW4iLCJtaW51dGVzU3BhbiIsInNlY29uZHNTcGFuIiwidXBkYXRlQ2xvY2siLCJ0Iiwic2Vjb25kcyIsIm1pbnV0ZXMiLCJob3VycyIsIkRhdGUiLCJwYXJzZSIsIk1hdGgiLCJmbG9vciIsInRvdGFsIiwiZGF5cyIsImlubmVySFRNTCIsInNsaWNlIiwiY2xhc3NMaXN0IiwiYWRkIiwiY2xlYXJJbnRlcnZhbCIsInRpbWVpbnRlcnZhbCIsInNldEludGVydmFsIiwiaW5pdGlhbGl6ZUNsb2NrIiwiU3dpcGVyIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsInBhZ2luYXRpb24iXSwibWFwcGluZ3MiOiJBQUFBLGFBRUFBLFNBQVNDLG1CQUFxQixXQUNBLGdCQUF4QkQsU0FBU0UsWUFDWEMsRUFBRUMsUUFBUUMsU0FBVyxLQUFPRixFQUFFLDBCQUEwQkcsU0FBUyx5QkFJckVGLE9BQU9HLGlCQUFpQixPQUFRLFdBSzlCLFNBQVNDLEVBQVlDLEVBQVVDLEdBQzdCLElBQ0VDLFFBQVFDLGFBQWEsS0FBTSxLQUFNLEtBQ2pDLE1BQU9DLEdBQ1BDLFFBQVFDLElBQUlGLEdBR2RWLEVBQUVhLEtBQUssQ0FDTE4sSUFBS0EsRUFDTE8sS0FBTSxPQUNOQyxTQUFVLE9BQ1ZDLEtBQU1oQixFQUFFLElBQU1NLEdBQVVXLFlBRXhCQyxRQUFTLFNBQWlCQyxHQUV4QixJQUFJQyxFQUFTcEIsRUFBRXFCLFVBQVVGLEdBQ3pCUixRQUFRQyxJQUFJUSxJQUVkRSxNQUFPLFNBQWVILEdBRXBCSSxNQUFNLG9DQXFIWixTQUFTQyxJQUNQLElBQUlDLEVBQWMsR0FDbEJ6QixFQUFFLFlBQVkwQixRQUFRLEtBQ3RCMUIsRUFBRSwwQkFBMEIyQixLQUFLLFNBQVVDLEVBQU9DLEdBQ2hEN0IsRUFBRSxZQUFZMkIsS0FBSyxTQUFVRyxFQUFHQyxHQUM5Qi9CLEVBQUUrQixHQUFHZixLQUFLLFVBQVloQixFQUFFNkIsR0FBU2IsS0FBSyxhQUFlUyxFQUFZ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b0NBQW9DRyxTQUFTLDJCQUMzRUgsRUFBRUMsUUFBUUMsU0FBVyxLQUFPRixFQUFFLGlDQUFpQ0csU0FBUyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmRvY3VtZW50Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiaW50ZXJhY3RpdmVcIikge1xuICAgICQod2luZG93KS53aWR0aCgpIDw9IDcwMCAmJiAkKCcubWFpbl9fY29udGVudC1oZWFkLXVpJykuYXBwZW5kVG8oJy5tYWluX19jb250ZW50LXRpbWVyJyk7XG4gIH1cbn07XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XG4gIC8vIHZhcmlhYmxlc1xuICAvLyAvdmFyaWFibGVzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gdW5pdmVyc2FsIGZ1bmN0aW9uXG4gIGZ1bmN0aW9uIGFqYXhSZXF1ZXN0KGFqYXhGb3JtLCB1cmwpIHtcbiAgICB0cnkge1xuICAgICAgaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgbnVsbCwgXCIjXCIpO1xuICAgIH0gY2F0Y2ggKHopIHtcbiAgICAgIGNvbnNvbGUubG9nKHopO1xuICAgIH1cblxuICAgICQuYWpheCh7XG4gICAgICB1cmw6IHVybCxcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgZGF0YVR5cGU6IFwiaHRtbFwiLFxuICAgICAgZGF0YTogJChcIiNcIiArIGFqYXhGb3JtKS5zZXJpYWxpemUoKSxcbiAgICAgIC8vINCh0LXQsNGA0LjQu9C40LfRg9C10Lwg0L7QsdGK0LXQutGCXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKHJlc3BvbnNlKSB7XG4gICAgICAgIC8v0JTQsNC90L3Ri9C1INC+0YLQv9GA0LDQstC70LXQvdGLINGD0YHQv9C10YjQvdC+XG4gICAgICAgIHZhciByZXN1bHQgPSAkLnBhcnNlSlNPTihyZXNwb25zZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uIGVycm9yKHJlc3BvbnNlKSB7XG4gICAgICAgIC8vINCU0LDQvdC90YvQtSDQvdC1INC+0YLQv9GA0LDQstC70LXQvdGLXG4gICAgICAgIGFsZXJ0KFwi0J7RiNC40LHQutCwLiDQlNCw0L3QvdGL0LUg0L3QtSDQvtGC0L/RgNCw0LLQu9C10L3Riy5cIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzY3JvbGxFbXVsYXRpb24oKSB7XG4gICAgdmFyIGRvY3VtZW50V2lkdGggPSBwYXJzZUludChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpO1xuICAgIHZhciB3aW5kb3dzV2lkdGggPSBwYXJzZUludCh3aW5kb3cuaW5uZXJXaWR0aCk7XG4gICAgdmFyIHNjcm9sbGJhcldpZHRoID0gd2luZG93c1dpZHRoIC0gZG9jdW1lbnRXaWR0aDtcbiAgICAkKFwiYm9keVwiKS5jc3Moe1xuICAgICAgXCJwYWRkaW5nLXJpZ2h0XCI6IFwiXCIuY29uY2F0KHNjcm9sbGJhcldpZHRoLCBcInB4XCIpXG4gICAgfSk7XG4gICAgJChcImJvZHlcIikudG9nZ2xlQ2xhc3MoXCJibG9ja1wiKTtcbiAgfSAvLyAgL3VuaXZlcnNhbCBmdW5jdGlvblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIGV2ZW50XG4gIC8vINCk0LjQu9GM0YLRgCDQvdCwINGB0YLRgNCw0L3QuNGG0LUgcHJvZ3JhbS1ldmVudHMuaHRtbFxuXG5cbiAgJChcIiNwcm9ncmFtLWV2ZW50cy1mb3JtXCIpLm9uKFwiaW5wdXQgc3VibWl0XCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGFqYXhSZXF1ZXN0KFwicHJvZ3JhbS1ldmVudHMtZm9ybVwiLCBcInRlc3QucGhwXCIpO1xuICB9KTsgLy8gL9Ck0LjQu9GM0YLRgCDQvdCwINGB0YLRgNCw0L3QuNGG0LUgcHJvZ3JhbS1ldmVudHMuaHRtbFxuICAvLyDQpNC40LvRjNGC0YAg0L3QsCDRgdGC0YDQsNC90LjRhtC1IHNwZWFrZXJzLmh0bWwgKNC/0L7QuNGB0LopXG5cbiAgJChcIiNzcGVha2Vycy1zZWFyY2hcIikub24oXCJpbnB1dCBzdWJtaXRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgYWpheFJlcXVlc3QoXCJzcGVha2Vycy1zZWFyY2hcIiwgXCJ0ZXN0LnBocFwiKTtcbiAgfSk7IC8vIC/QpNC40LvRjNGC0YAg0L3QsCDRgdGC0YDQsNC90LjRhtC1IHNwZWFrZXJzLmh0bWwgKNC/0L7QuNGB0LopXG4gIC8vINCk0LjQu9GM0YLRgCDQvdCwINGB0YLRgNCw0L3QuNGG0LUgc3BlYWtlcnMuaHRtbCAo0YHQvtGA0YLQuNGA0L7QstC60LAg0YHQv9C40LrQtdGA0L7QsilcblxuICAkKFwiI3NwZWFrZXJzLXNvcnRcIikub24oXCJpbnB1dCBzdWJtaXRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgYWpheFJlcXVlc3QoXCJzcGVha2Vycy1zb3J0XCIsIFwidGVzdC5waHBcIik7XG4gIH0pOyAvLyAv0KTQuNC70YzRgtGAINC90LAg0YHRgtGA0LDQvdC40YbQtSBzcGVha2Vycy5odG1sICjRgdC+0YDRgtC40YDQvtCy0LrQsCDRgdC/0LjQutC10YDQvtCyKVxuICAvLyDQpNC40LvRjNGC0YAg0L3QsCDRgdGC0YDQsNC90LjRhtC1IHByb2ZpbGUuaHRtbCBcblxuICAkKFwiI2VkaXQtZm9ybVwiKS5vbihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBhamF4UmVxdWVzdChcImVkaXQtZm9ybVwiLCBcInRlc3QucGhwXCIpO1xuICB9KTsgLy8gL9Ck0LjQu9GM0YLRgCDQvdCwINGB0YLRgNCw0L3QuNGG0LUgcHJvZmlsZS5odG1sIFxuXG4gICQoXCJidXR0b24ubWVudV9fZGVza3RvcC1lbGVtZW50XCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ21lbnVfX2Rlc2t0b3AtZWxlbWVudC0tb3BlbicpO1xuICAgICQoJy5oZWFkZXItbW9kYWxfX25hdicpLmZhZGVUb2dnbGUoNDAwKTtcbiAgfSk7XG4gICQoXCIubGFuZ3VhZ2VcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcygnbGFuZ3VhZ2UtLW9wZW4nKTtcbiAgICAkKCcuaGVhZGVyLW1vZGFsX19sYW5ndWFnZScpLmZhZGVUb2dnbGUoNDAwKTtcbiAgfSk7XG4gICQoXCIuaGVhZGVyX19hY291bnRcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcygnaGVhZGVyX19hY291bnQtLW9wZW4nKTtcbiAgICAkKCcuaGVhZGVyLW1vZGFsX19hY291bnQnKS5mYWRlVG9nZ2xlKDQwMCk7XG4gIH0pO1xuICAkKHdpbmRvdykud2lkdGgoKSA8PSAxMjc5ICYmICQoJy5tZW51Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIHNjcm9sbEVtdWxhdGlvbigpO1xuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ21lbnUtLW9wZW4nKTtcbiAgICAkKHRoaXMpLmhhc0NsYXNzKCdtZW51LS1vcGVuJykgJiYgKCQoJy5sYW5ndWFnZScpLnJlbW92ZUNsYXNzKCdsYW5ndWFnZS0tb3BlbicpLCAkKCcuaGVhZGVyLW1vZGFsX19sYW5ndWFnZScpLmZhZGVPdXQoMTAwKSk7XG4gIH0pO1xuICAkKFwiLmZpbHRlcl9fc3dpdGNoLXRleHRcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgJCh0aGlzKS5wYXJlbnQoKS50b2dnbGVDbGFzcyhcImZpbHRlcl9fc3dpdGNoLS1hY3RpdmVcIik7XG4gICAgJCh0aGlzKS5uZXh0KCkuc2xpZGVUb2dnbGUoNDAwKTtcbiAgfSk7XG4gICQoXCIuZmlsdGVyX19zd2l0Y2gtbW9kYWwtbGFiZWxcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICQodGhpcykucGFyZW50cyhcIi5maWx0ZXJfX3N3aXRjaFwiKS5jaGlsZHJlbihcIi5maWx0ZXJfX3N3aXRjaC10ZXh0XCIpLnRleHQoJChlLnRhcmdldCkudGV4dCgpKTtcbiAgICAkKHRoaXMpLnBhcmVudHMoXCIuZmlsdGVyX19zd2l0Y2gtbW9kYWxcIikudG9nZ2xlKDApO1xuICAgICQodGhpcykucGFyZW50cyhcIi5maWx0ZXJfX3N3aXRjaFwiKS50b2dnbGVDbGFzcyhcImZpbHRlcl9fc3dpdGNoLS1hY3RpdmVcIik7XG4gIH0pO1xuICAkKFwiLmNydW1ic19fY3J1bWJcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICQoZS50YXJnZXQpLnBhcmVudHMoJy5maWx0ZXItdG9wJykubGVuZ3RoICYmICgkKHRoaXMpLnRvZ2dsZUNsYXNzKCdjcnVtYnNfX2NydW1iLS1hY3RpdmUnKSwgZmlsdGVyQ29udGVudEJsb2NrKCkpO1xuICAgICQoZS50YXJnZXQpLnBhcmVudHMoXCIuY3J1bWJzX19jcnVtYlwiKS50b2dnbGVDbGFzcyhcImNydW1ic19fY3J1bWItLWFjdGl2ZVwiKTtcbiAgICAkKGUudGFyZ2V0KS5wYXJlbnRzKFwiLmNydW1ic1wiKS5jaGlsZHJlbihcIi5jcnVtYnNfX2NydW1iLS1hY3RpdmVcIikubGVuZ3RoID09PSAwID8gJChlLnRhcmdldCkucGFyZW50cyhcIi5jcnVtYnNcIikuY2hpbGRyZW4oXCIuY3J1bWJzX19jbGVhclwiKS5yZW1vdmVDbGFzcyhcImNydW1ic19fY2xlYXItLWFjdGl2ZVwiKSA6ICQoZS50YXJnZXQpLnBhcmVudHMoXCIuY3J1bWJzXCIpLmNoaWxkcmVuKFwiLmNydW1ic19fY2xlYXJcIikuYWRkQ2xhc3MoXCJjcnVtYnNfX2NsZWFyLS1hY3RpdmVcIik7XG4gIH0pO1xuICAkKFwiLmNydW1ic19fY2xlYXJcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgJCh0aGlzKS5wYXJlbnRzKFwiLmNydW1ic1wiKS5jaGlsZHJlbihcIi5jcnVtYnNfX2NydW1iXCIpLnJlbW92ZUNsYXNzKFwiY3J1bWJzX19jcnVtYi0tYWN0aXZlXCIpO1xuICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJjcnVtYnNfX2NsZWFyLS1hY3RpdmVcIik7XG4gICAgZmlsdGVyQ29udGVudEJsb2NrKCk7XG4gIH0pO1xuICAkKCcuZmlsdGVyLWxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgJCgnLmZpbHRlci1saW5rLS1hY3RpdmUnKS5yZW1vdmVDbGFzcygnZmlsdGVyLWxpbmstLWFjdGl2ZScpO1xuICAgICQodGhpcykuYWRkQ2xhc3MoJ2ZpbHRlci1saW5rLS1hY3RpdmUnKTtcbiAgfSk7XG4gICQoJ2JvZHknKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBzaGFyZSA9ICQoZS50YXJnZXQpLmhhc0NsYXNzKCdzaGFyZScpICYmICQoZS50YXJnZXQpIHx8ICQoZS50YXJnZXQpLnBhcmVudHMoJy5zaGFyZScpLmxlbmd0aCAmJiAkKCQoZS50YXJnZXQpLnBhcmVudHMoJy5zaGFyZScpWzBdKSB8fCBudWxsO1xuICAgIHNoYXJlICYmIHNoYXJlLmZpbmQoJy5pbmZvcm1hdGlvbi1zaGFyZScpLnRvZ2dsZUNsYXNzKCdpbmZvcm1hdGlvbi1zaGFyZS0tYWN0aXZlJyk7XG4gICAgJChlLnRhcmdldCkuaGFzQ2xhc3MoJ2F2YXRhcnNfX21vcmUnKSAmJiAkKGUudGFyZ2V0KSAmJiAkKGUudGFyZ2V0KS50b2dnbGVDbGFzcygnYXZhdGFyc19fbW9yZS0tYWN0aXZlJyk7XG4gICAgdmFyIG1vcmVFbGVtZW50ID0gJChlLnRhcmdldCkuaGFzQ2xhc3MoJ2F2YXRhcnNfX21vcmUtZWxlbWVudCcpICYmICQoZS50YXJnZXQpIHx8ICQoZS50YXJnZXQpLnBhcmVudHMoJy5hdmF0YXJzX19tb3JlLWVsZW1lbnQnKS5sZW5ndGggJiYgJCgkKGUudGFyZ2V0KS5wYXJlbnRzKCcuYXZhdGFyc19fbW9yZS1lbGVtZW50JylbMF0pIHx8IG51bGw7XG4gICAgbW9yZUVsZW1lbnQgJiYgKG1vcmVFbGVtZW50LnRvZ2dsZUNsYXNzKCdhdmF0YXJzX19tb3JlLWVsZW1lbnQtLWFjdGl2ZScpLCBtb3JlRWxlbWVudC5maW5kKCcuYXZhdGFyc19fbW9yZS10ZXh0Jykuc2xpZGVUb2dnbGUoNDAwKSk7XG4gIH0pO1xuICAkKCcuY29udGVudF9fbW9yZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAkKCcuY2FyZC0taGlkZGVuJykucmVtb3ZlQ2xhc3MoJ2NhcmQtLWhpZGRlbicpO1xuICB9KTtcbiAgJCgnLm1haW5fX2NvbnRlbnQtbW9yZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAkKCcubWFpbl9fY29udGVudC1tb3JlJykudG9nZ2xlQ2xhc3MoJ21haW5fX2NvbnRlbnQtbW9yZS0tb3BlbicpO1xuXG4gICAgaWYgKCEkKCcubWFpbl9fY29udGVudC10ZXh0LS1hY3RpdmUnKS5sZW5ndGgpIHtcbiAgICAgICQoJy5tYWluX19jb250ZW50LXRleHQnKS50b2dnbGVDbGFzcygnbWFpbl9fY29udGVudC10ZXh0LS1hY3RpdmUnKTtcbiAgICAgIHZhciBlbCA9ICQoJy5tYWluX19jb250ZW50LXRleHQnKSxcbiAgICAgICAgICBjdXJIZWlnaHQgPSBlbC5oZWlnaHQoKSxcbiAgICAgICAgICBhdXRvSGVpZ2h0ID0gZWwuY3NzKCdoZWlnaHQnLCAnYXV0bycpLmhlaWdodCgpO1xuICAgICAgZWwuaGVpZ2h0KGN1ckhlaWdodCkuYW5pbWF0ZSh7XG4gICAgICAgIGhlaWdodDogYXV0b0hlaWdodFxuICAgICAgfSwgMjAwKTtcbiAgICAgICQoJy5tYWluX19jb250ZW50LW1vcmUtdGV4dCcpLnRleHQoJCgnLm1haW5fX2NvbnRlbnQtbW9yZS10ZXh0JykuZGF0YSgnc3dpdGNoLXRleHQtc3RhcnQnKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy5tYWluX19jb250ZW50LXRleHQnKS50b2dnbGVDbGFzcygnbWFpbl9fY29udGVudC10ZXh0LS1hY3RpdmUnKTtcbiAgICAgICQoJy5tYWluX19jb250ZW50LXRleHQnKS5jc3MoJ2hlaWdodCcsICQoJy5tYWluX19jb250ZW50LXRleHQnKS5kYXRhKCd0ZXh0LWhlaWdodCcpKTtcbiAgICAgICQoJy5tYWluX19jb250ZW50LW1vcmUtdGV4dCcpLnRleHQoJCgnLm1haW5fX2NvbnRlbnQtbW9yZS10ZXh0JykuZGF0YSgnc3dpdGNoLXRleHQtZW5kJykpO1xuICAgIH1cbiAgfSk7XG4gICQoJy5wYXJ0aWNpcGFudHNfX3RvZ2dsZS1idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgJCgnLnBhcnRpY2lwYW50c19fdG9nZ2xlLWJ1dHRvbicpLnJlbW92ZUNsYXNzKCdwYXJ0aWNpcGFudHNfX3RvZ2dsZS1idXR0b24tLWFjdGl2ZScpO1xuICAgICQodGhpcykuYWRkQ2xhc3MoJ3BhcnRpY2lwYW50c19fdG9nZ2xlLWJ1dHRvbi0tYWN0aXZlJyk7XG4gIH0pOyAvLyAvZXZlbnRcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB1bmlxdWUgZnVuY3Rpb25cblxuICBmdW5jdGlvbiBmaWx0ZXJDb250ZW50QmxvY2soKSB7XG4gICAgdmFyIGFyckVsZW1lbnRzID0gW107XG4gICAgJCgnLmNvbnRlbnQnKS5mYWRlT3V0KDEwMCk7XG4gICAgJCgnLmNydW1ic19fY3J1bWItLWFjdGl2ZScpLmVhY2goZnVuY3Rpb24gKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAkKCcuY29udGVudCcpLmVhY2goZnVuY3Rpb24gKGksIGUpIHtcbiAgICAgICAgJChlKS5kYXRhKCduYW1lJykgPT09ICQoZWxlbWVudCkuZGF0YSgndGFnLW5hbWUnKSAmJiBhcnJFbGVtZW50cy5wdXNoKGUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coYXJyRWxlbWVudHMpO1xuICAgICQoYXJyRWxlbWVudHMpLmxlbmd0aCA/ICQoYXJyRWxlbWVudHMpLmZhZGVJbigxMDApIDogJCgnLmNvbnRlbnQnKS5mYWRlSW4oMTAwKTtcbiAgfSAvLyAvdW5pcXVlIGZ1bmN0aW9uXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gUGFnZSBsb2FkXG5cblxuICAkKHdpbmRvdykud2lkdGgoKSA8PSAxMjc5ICYmICQoJy5oZWFkZXItbW9kYWxfX25hdi1lbGVtZW50JykuYXBwZW5kVG8oJy5tZW51X19kZXNrdG9wJyk7XG4gICQod2luZG93KS53aWR0aCgpIDw9IDcwMCAmJiAkKCcubWVudV9fZGVza3RvcCcpLnByZXBlbmQoJCgnLmhlYWRlci1tb2RhbF9fYWNvdW50JykpOyAvLyDQnNC10YXQsNC90LjQutCwINC00L7QsdCw0LLQu9C10L3QuNGPINC60YDQvtGI0LrQvtC5INC00LDRgtGLINC90LAg0L/Qu9Cw0L3RiNC10YLQsNGFXG5cbiAgJCh3aW5kb3cpLndpZHRoKCkgPD0gNzAwICYmICQoJy5oZWFkZXJfX2J1dHRvbicpLmFwcGVuZFRvKCcubWVudV9fZGVza3RvcCcpO1xuXG4gIGlmICgkKHdpbmRvdykud2lkdGgoKSA8PSA5MDApIHtcbiAgICAkKCcuY2FyZCcpLmVhY2goZnVuY3Rpb24gKGluZGV4LCBpdGVtKSB7XG4gICAgICAkKGl0ZW0pLmZpbmQoJy5jYXJkX19oZWFkLWNydW1icycpLnByZXBlbmQoXCI8ZGl2IGNsYXNzPVxcXCJjYXJkX19oZWFkLWluZm9cXFwiPlwiLmNvbmNhdCgkKGl0ZW0pLmZpbmQoJy5jYXJkX19mb290ZXIgLmNhcmRfX2RheScpLnRleHQoKSwgXCI8L2Rpdj5cIikpO1xuICAgIH0pO1xuICB9IC8vIC/QnNC10YXQsNC90LjQutCwINC00L7QsdCw0LLQu9C10L3QuNGPINC60YDQvtGI0LrQvtC5INC00LDRgtGLINC90LAg0L/Qu9Cw0L3RiNC10YLQsNGFXG5cblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9fcmVjb21tZW5kYXRpb24tYmxvY2snKSAmJiAkKHdpbmRvdykud2lkdGgoKSA+IDExMDAgJiYgT3ZlcmxheVNjcm9sbGJhcnMoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tYWluX19yZWNvbW1lbmRhdGlvbi1ibG9ja1wiKSwge1xuICAgIHBhZGRpbmdBYnNvbHV0ZTogdHJ1ZVxuICB9KTsgLy8g0KLQkNCZ0JzQldCgXG5cbiAgZnVuY3Rpb24gZ2V0VGltZVJlbWFpbmluZyhlbmR0aW1lKSB7XG4gICAgdmFyIHQgPSBEYXRlLnBhcnNlKGVuZHRpbWUpIC0gRGF0ZS5wYXJzZShuZXcgRGF0ZSgpKTtcbiAgICB2YXIgc2Vjb25kcyA9IE1hdGguZmxvb3IodCAvIDEwMDAgJSA2MCk7XG4gICAgdmFyIG1pbnV0ZXMgPSBNYXRoLmZsb29yKHQgLyAxMDAwIC8gNjAgJSA2MCk7XG4gICAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcih0IC8gKDEwMDAgKiA2MCAqIDYwKSAlIDI0KTtcbiAgICB2YXIgZGF5cyA9IE1hdGguZmxvb3IodCAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICd0b3RhbCc6IHQsXG4gICAgICAnZGF5cyc6IGRheXMsXG4gICAgICAnaG91cnMnOiBob3VycyxcbiAgICAgICdtaW51dGVzJzogbWludXRlcyxcbiAgICAgICdzZWNvbmRzJzogc2Vjb25kc1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBpbml0aWFsaXplQ2xvY2soaWQsIGVuZHRpbWUpIHtcbiAgICB2YXIgY2xvY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgdmFyIGRheXNTcGFuID0gY2xvY2sucXVlcnlTZWxlY3RvcignI3RpbWVyLWRheXMnKTtcbiAgICB2YXIgaG91cnNTcGFuID0gY2xvY2sucXVlcnlTZWxlY3RvcignI3RpbWVyLWhvdXJzJyk7XG4gICAgdmFyIG1pbnV0ZXNTcGFuID0gY2xvY2sucXVlcnlTZWxlY3RvcignI3RpbWVyLW1pbnV0ZXMnKTtcbiAgICB2YXIgc2Vjb25kc1NwYW4gPSBjbG9jay5xdWVyeVNlbGVjdG9yKCcjdGltZXItc2Vjb25kcycpO1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlQ2xvY2soKSB7XG4gICAgICB2YXIgdCA9IGdldFRpbWVSZW1haW5pbmcoZW5kdGltZSk7XG4gICAgICBkYXlzU3Bhbi5pbm5lckhUTUwgPSB0LmRheXM7XG4gICAgICBob3Vyc1NwYW4uaW5uZXJIVE1MID0gKCcwJyArIHQuaG91cnMpLnNsaWNlKC0yKTtcbiAgICAgIG1pbnV0ZXNTcGFuLmlubmVySFRNTCA9ICgnMCcgKyB0Lm1pbnV0ZXMpLnNsaWNlKC0yKTtcbiAgICAgIHNlY29uZHNTcGFuLmlubmVySFRNTCA9ICgnMCcgKyB0LnNlY29uZHMpLnNsaWNlKC0yKTtcblxuICAgICAgaWYgKHQudG90YWwgPD0gMCkge1xuICAgICAgICBjbG9jay5jbGFzc0xpc3QuYWRkKCdtYWluX19jb250ZW50LXN0YXJ0LS1maW5pc2gnKTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1laW50ZXJ2YWwpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZUNsb2NrKCk7XG4gICAgdmFyIHRpbWVpbnRlcnZhbCA9IHNldEludGVydmFsKHVwZGF0ZUNsb2NrLCAxMDAwKTtcbiAgfVxuXG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZXInKSkge1xuICAgIHZhciBkZWFkbGluZSA9IFwiXFxuICAgICAgICAgICAgXCIuY29uY2F0KCQoJyN0aW1lcicpLmRhdGEoJ3RpbWVyLW1vbnRoJyksIFwiIFxcbiAgICAgICAgICAgIFwiKS5jb25jYXQoJCgnI3RpbWVyJykuZGF0YSgndGltZXItZGF5JyksIFwiIFxcbiAgICAgICAgICAgIFwiKS5jb25jYXQoJCgnI3RpbWVyJykuZGF0YSgndGltZXIteWVhcicpLCBcIiBcXG4gICAgICAgICAgICBcIikuY29uY2F0KCQoJyN0aW1lcicpLmRhdGEoJ3RpbWVyLWhvdXJzJyksIFwiOlxcbiAgICAgICAgICAgIFwiKS5jb25jYXQoJCgnI3RpbWVyJykuZGF0YSgndGltZXItbWludXRlcycpLCBcIjpcXG4gICAgICAgICAgICBcIikuY29uY2F0KCQoJyN0aW1lcicpLmRhdGEoJ3RpbWVyLXNlY29uZHMnKSwgXCIgR01UKzAzMDBcIik7XG4gICAgaW5pdGlhbGl6ZUNsb2NrKCd0aW1lcicsIGRlYWRsaW5lKTtcbiAgfSAvLyAv0KLQkNCZ0JzQldCgXG5cblxuICAkKHdpbmRvdykud2lkdGgoKSA8PSA3MDAgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV2ZW50X19zd2lwZXInKSAmJiBuZXcgU3dpcGVyKCcuc3dpcGVyLWNvbnRhaW5lcicsIHtcbiAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXG4gICAgc3BhY2VCZXR3ZWVuOiA4LFxuICAgIHBhZ2luYXRpb246IHtcbiAgICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcbiAgICAgIHR5cGU6ICdidWxsZXRzJ1xuICAgIH0gLy8gYXV0b0hlaWdodDogdHJ1ZVxuXG4gIH0pO1xuICAkKHdpbmRvdykud2lkdGgoKSA8PSAxMTAwICYmICQoJy5tYWluX19yZWNvbW1lbmRhdGlvbi1ibG9jaycpLmFwcGVuZFRvKCcucmVjb21tZW5kYXRpb24nKTtcbiAgJCh3aW5kb3cpLndpZHRoKCkgPD0gOTAwICYmICQoJy5pbnRlcmVzdGluZyAuc2VjdGlvbi1oZWFkX19saW5rJykuYXBwZW5kVG8oJy5pbnRlcmVzdGluZyAuY29udGFpbmVyJyk7XG4gICQod2luZG93KS53aWR0aCgpIDw9IDkwMCAmJiAkKCcud2ViaW5hcnMgLnNlY3Rpb24taGVhZF9fbGluaycpLmFwcGVuZFRvKCcud2ViaW5hcnMgLmNvbnRhaW5lcicpOyAvLyAvUGFnZSBsb2FkXG59KTsiXX0=
