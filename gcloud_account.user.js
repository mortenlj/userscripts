// ==UserScript==
// @name         Gcloud auto select account
// @namespace    https://github.com/mortenlj/userscripts
// @version      0.2
// @downloadURL  https://raw.githubusercontent.com/mortenlj/userscripts/master/gcloud_account.user.js
// @description  Select my NAV gcloud account automatically and approve access
// @author       Morten Lied Johansen
// @match        https://accounts.google.com/o/oauth2/auth*
// @match        https://accounts.google.com/signin/oauth/consent*
// @grant        window.close
// ==/UserScript==
(function() {
    'use strict';

    function docReady(fn) {
        // see if DOM is already available
        if (document.readyState === "complete" || document.readyState === "interactive") {
            // call on next available tick
            setTimeout(fn, 1);
        } else {
            document.addEventListener("DOMContentLoaded", fn);
        }
    }

    function selectAccount() {
        console.log("Checking for account selector")
        let accountSelector = document.querySelector('[data-identifier="morten.lied.johansen@nav.no"]');
        if (accountSelector != null) {
            console.log("Selecting NAV account (if possible)")
            accountSelector.click()
        }
        setTimeout(selectAccount, 200)
    }

    function approve() {
        console.log("Checking for approve access button")
        let submitButton = document.querySelector('[id="submit_approve_access"]');
        if (submitButton != null) {
            console.log("Approving access")
            return submitButton.click();
        } else {
            setTimeout(approve, 200)
        }
    }

    docReady(selectAccount)
    docReady(approve)

})();
