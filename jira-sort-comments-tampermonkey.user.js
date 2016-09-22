// ==UserScript==
// @name         Sort JIRA comments.
// @namespace    https://github.com/skehlet/jira-sort-comments-tampermonkey
// @version      0.5
// @description  Force JIRA comments to be sorted in the order you prefer.
// @author       Steve Kehlet
// @match        https://jira.atlassian.com/browse/*
// @downloadURL  https://github.com/skehlet/jira-sort-comments-tampermonkey/raw/master/jira-sort-comments-tampermonkey.user.js
// @include      http*://*atlassian.net/secure/RapidBoard.jspa*
// @include      http*://jira*/secure/RapidBoard.jspa*
// @include      http*://*/jira/secure/RapidBoard.jspa*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var desiredSortOrder = 'asc'; // change me to 'desc' if you prefer

    $('.issue-activity-sort-link').each(function () {
        var sortLink = $(this);
        // the link shows the order that will result if you click on it
        if (sortLink.attr('data-order') == desiredSortOrder) {
            // use .issue-view if present (there's a sidebar and scrollable frame to the right), otherwise window
            var selector = $('.issue-view').length > 0 ? '.issue-view' : window;
            var scrollPos = $(selector).scrollTop();
            // scroll back to where we were after clicking
            $(selector).one('scroll', function () {
                $(selector).scrollTop(scrollPos);
            });
            sortLink.click();
        }
    });
})();
