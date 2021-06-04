// ==UserScript==
// @name         Gcloud auto select account
// @namespace    https://github.com/mortenlj/userscripts
// @version      0.3.1
// @downloadURL  https://raw.githubusercontent.com/mortenlj/userscripts/master/gcloud_account.user.js
// @description  Select my NAV gcloud account automatically and approve access
// @author       Morten Lied Johansen
// @match        https://accounts.google.com/o/oauth2/auth*
// @match        https://accounts.google.com/signin/oauth/consent*
// @grant        window.close
// ==/UserScript==
(function() {
    'use strict';
    const initialDelay = 500;
    const retryInterval = 500;

    function docReady(fn) {
        // see if DOM is already available
        if (document.readyState === "complete" || document.readyState === "interactive") {
            // Ready, wait 500ms and make the call
            setTimeout(fn, initialDelay);
        } else {
            document.addEventListener("DOMContentLoaded", function () {
                // When ready, wait another 500ms before calling
                setTimeout(fn, initialDelay);
            });
        }
    }

    function selectAccount() {
        console.log("Checking for account selector")
        let accountSelector = document.querySelector('[data-identifier="morten.lied.johansen@nav.no"]');
        if (accountSelector != null) {
            console.log("Selecting NAV account (if possible)")
            accountSelector.click()
        }
        setTimeout(selectAccount, retryInterval)
    }

    function approve() {
        console.log("Checking for approve access button")
        let submitButton = document.querySelector('[id="submit_approve_access"]');
        if (submitButton != null) {
            console.log("Approving access")
            return submitButton.click();
        } else {
            setTimeout(approve, retryInterval)
        }
    }

    docReady(selectAccount)
    docReady(approve)

})();
