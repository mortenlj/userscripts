// ==UserScript==
// @name         Outlook for web usability
// @namespace    https://github.com/mortenlj/userscripts
// @version      0.2
// @downloadURL  https://raw.githubusercontent.com/mortenlj/userscripts/master/outlook_for_web.user.js
// @description  Make Outlook for web usable
// @author       Morten Lied Johansen
// @match        https://outlook.office.com/*
// @require      https://code.jquery.com/jquery-3.5.1.min.js
// ==/UserScript==

(function () {
    'use strict';

    const TIMEOUT = 500
    const STRINGS = {
        en: {
            filter: "Filter",
            sort: "Sort",
            oldest: "Oldest on top",
        },
        no: {
            filter: "Filtrer",
            sort: "Sorter",
            oldest: "Eldste øverst",
        }
    }

    /**
     * Change the sort order of emails to Oldest on top
     */
    function fixSortOrder($) {
        let s

        function selectStrings() {
            let html = $("html")
            let lang = "en"
            if (html !== undefined) {
                lang = html.attr("lang")
            }
            return STRINGS[lang]
        }

        function clickFilter() {
            let filter = $(`div:contains('${s.filter}')`).last()
            if (filter !== undefined) {
                console.log("Clicking filter button")
                filter.click()
                setTimeout(clickSort, TIMEOUT)
            } else {
                setTimeout(clickFilter, TIMEOUT)
            }
        }

        function clickSort() {
            let sort = $(`[name='${s.sort}']`)
            if (sort !== undefined) {
                console.log("Clicking sort button")
                sort.click()
                setTimeout(clickOldestOnTop, TIMEOUT)
            } else {
                setTimeout(clickSort, TIMEOUT)
            }
        }

        function clickOldestOnTop() {
            let oldest = $(`[name='${s.oldest}']`)
            if (oldest !== undefined) {
                console.log("Selecting oldest on top")
                oldest.click()
            } else {
                setTimeout(clickOldestOnTop, TIMEOUT)
            }
        }

        s = selectStrings()
        setTimeout(clickFilter, 2000);
    }

    jQuery.noConflict();

    jQuery(document).ready(fixSortOrder)
})();
