// ==UserScript==
// @name         Slack Signin!
// @namespace    https://github.com/mortenlj/userscripts
// @version      0.3
// @downloadURL  https://raw.githubusercontent.com/mortenlj/userscripts/master/slack_signin.user.js
// @description  Click the "Sign in with <SAML provider>" button
// @author       Morten Lied Johansen
// @match        https://*.slack.com/*
// ==/UserScript==

(function() {
    'use strict';

    function clickButton()
    {
        let saml_sign_in_button = document.getElementById("index_saml_sign_in_with_saml");
        if (saml_sign_in_button) {
            saml_sign_in_button.click();
        }
    }

    setTimeout(clickButton, 500); // wait for elements to be in dom

})();