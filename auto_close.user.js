// ==UserScript==
// @name         Auto-close tab!
// @namespace    https://github.com/mortenlj/userscripts
// @version      0.5.2
// @downloadURL  https://raw.githubusercontent.com/mortenlj/userscripts/master/auto_close.user.js
// @description  Fade out and close the tab automatically
// @author       Morten Lied Johansen
// @match        https://*.slack.com/ssb/signin_redirect*
// @match        https://*.slack.com/archives/
// @match        https://cloud.google.com/sdk/auth_success
// @match        https://login.microsoftonline.com/appverify
// @match        http://localhost/?code=*
// @match        http://localhost/google?state=*
// @match        https://*.zoom.us/j/*
// @match        https://zoom.us/j/*
// @grant        window.close
// ==/UserScript==

(function() {
    'use strict';

    function fadeToBlack()
    {
        console.log("starting fade to black");

        document.querySelector('body').style.transition = "all 4s linear";
        document.querySelector('body').style.backgroundColor = "black";
    }

    function close()
    {
        console.log("time to close the window now");
        window.close();
    }

    setTimeout(fadeToBlack, 200); // Wait for dom to load.
    setTimeout(close, 5*1000); // wait a few seconds, to make sure actions happen.

})();
