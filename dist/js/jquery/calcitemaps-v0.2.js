/* calcite-maps - v0.0.1 - 2016-06-15
*  https://github.com/alaframboise/calcite-maps#readme
*  Copyright (c) 2016 Environmental Systems Research Institute, Inc.
*  Apache 2.0 License */
!function($){"use strict";var navbarSelector=".calcite-navbar .calcite-dropdown li > a",preventOverscrolling=!0;$(navbarSelector).on("click",function(e){if(e.currentTarget.dataset.target){var panelBody,panels,panel=$(e.currentTarget.dataset.target);panel.hasClass("panel")&&(panel.hasClass("in")?(panel.removeClass("in"),panel.collapse("show")):(panels=$(".calcite-panels .panel.in").not(e.currentTarget.dataset.target),panels.collapse("hide"),panel.collapse("show"),panelBody=panel.find(".panel-collapse"),panelBody.hasClass("in")||panelBody.collapse("show")))}}),$("#calciteToggleNavbar").on("click",function(){var body=$("body");body.hasClass("calcite-nav-hidden")?body.removeClass("calcite-nav-hidden"):body.addClass("calcite-nav-hidden")}),$(".calcite-panels .panel .panel-collapse").on("hide.bs.collapse",function(e){$(e.target.parentNode).find(".panel-label").addClass("visible-xs-inline-block"),$(e.target.parentNode).find(".panel-close").addClass("visible-xs-flex")}),$(".calcite-panels .panel .panel-collapse").on("show.bs.collapse",function(e){$(e.target.parentNode).find(".panel-label").removeClass("visible-xs-inline-block"),$(e.target.parentNode).find(".panel-close").removeClass("visible-xs-flex")}),$(".calcite-map").on("touchmove",function(e){preventOverscrolling&&e.preventDefault()}),$(".calcite-dropdown").on("show.bs.dropdown",function(){$(".calcite-dropdown-toggle").addClass("open")}),$(".calcite-dropdown").on("hide.bs.dropdown",function(){$(".calcite-dropdown-toggle").removeClass("open")})}(jQuery);