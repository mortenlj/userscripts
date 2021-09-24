// ==UserScript==
// @name         Microsoft online auto flow
// @namespace    https://github.com/mortenlj/userscripts
// @version      0.1.1
// @downloadURL  https://raw.githubusercontent.com/mortenlj/userscripts/master/microsoftonline.user.js
// @description  Automate giving access to application
// @author       Morten Lied Johansen
// @match        https://login.microsoftonline.com/common/oauth2/deviceauth
// @match        https://login.microsoftonline.com/*/reprocess*
// ==/UserScript==

(function() {
    'use strict';
    const initialDelay = 500;
    const retryInterval = 1000;

    function docReady(fn) {
        // see if DOM is already available
        if (document.readyState === "complete" || document.readyState === "interactive") {
            // Ready, wait a bit and make the call
            setTimeout(fn, initialDelay);
        } else {
            document.addEventListener("DOMContentLoaded", function () {
                // When ready, wait a bit more before calling
                setTimeout(fn, initialDelay);
            });
        }
    }

    function selectAccount() {
        console.log("Checking for account selector")
        let accountSelector = document.querySelector('[data-test-id="morten.lied.johansen@nav.no"]');
        if (accountSelector != null) {
            console.log("Selecting NAV account (if possible)")
            accountSelector.click()
        }
        setTimeout(selectAccount, retryInterval)
    }

    function approve() {
        console.log("Checking for approve access button")
        let submitButton = document.querySelector('[aria-describedby~="appConfirmTitle"]');
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
