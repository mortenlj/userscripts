// ==UserScript==
// @name         Outlook for web usability
// @namespace    https://github.com/mortenlj/userscripts
// @version      0.3.2
// @downloadURL  https://raw.githubusercontent.com/mortenlj/userscripts/master/outlook_for_web.user.js
// @description  Make Outlook for web usable
// @author       Morten Lied Johansen
// @match        https://outlook.office.com/*
// @match        https://outlook.office365.com/*
// @match        https://outlook.office365.com.mcas.ms/*
// @require      https://code.jquery.com/jquery-3.5.1.min.js
// ==/UserScript==

(function () {
    'use strict';

    const TIMEOUT = 500

    /**
     * Change the sort order of emails to Oldest on top
     */
    function fixSortOrder($) {
        function clickFilter() {
            let filter = $("div:contains('Filtrer')").last()
            if (filter !== undefined) {
                console.log("Clicking filter button")
                filter.click()
                setTimeout(clickSort, TIMEOUT)
            } else {
                setTimeout(clickFilter, TIMEOUT)
            }
        }

        function clickSort() {
            let sort = $("[name='Sorter']")
            if (sort !== undefined) {
                console.log("Clicking sort button")
                sort.click()
                setTimeout(clickOldestOnTop, TIMEOUT)
            } else {
                setTimeout(clickSort, TIMEOUT)
            }
        }

        function clickOldestOnTop() {
            let oldest = $("[name='Eldste øverst']")
            if (oldest !== undefined) {
                console.log("Selecting oldest on top")
                oldest.click()
            } else {
                setTimeout(clickOldestOnTop, TIMEOUT)
            }
        }
        setTimeout(clickFilter, 2000);
    }

    jQuery.noConflict();

    jQuery(document).ready(fixSortOrder)
})();
