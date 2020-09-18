// ==UserScript==
// @name         Outlook for web usability
// @namespace    https://github.com/mortenlj/userscripts
// @version      0.1
// @downloadURL  https://raw.githubusercontent.com/mortenlj/userscripts/master/outlook_for_web.user.js
// @description  Make Outlook for web usable
// @author       Morten Lied Johansen
// @match        https://outlook.office.com/*
// @require      https://code.jquery.com/jquery-3.5.1.min.js
// ==/UserScript==

(function () {
    'use strict';

    /**
     * Change the sort order of emails to Oldest on top
     */
    function fixSortOrder($) {
        function clickFilter() {
            let filter = $("div:contains('Filter')").last()
            if (filter !== undefined) {
                console.log("Clicking filter button")
                filter.click()
                setTimeout(clickSort, 20)
            }
        }

        function clickSort() {
            let sort = $("[name='Sort']")
            if (sort !== undefined) {
                console.log("Clicking sort button")
                sort.click()
                setTimeout(clickOldestOnTop, 20)
            } else {
                setTimeout(clickSort, 20)
            }
        }

        function clickOldestOnTop() {
            let oldest = $("[name='Oldest on top']")
            if (oldest !== undefined) {
                console.log("Selecting oldest on top")
                oldest.click()
            } else {
                setTimeout(clickOldestOnTop, 20)
            }
        }
        clickFilter();
    }

    jQuery.noConflict();

    jQuery(document).ready(fixSortOrder)
})();
