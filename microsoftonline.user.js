// ==UserScript==
// @name         Microsoft online auto flow
// @namespace    https://github.com/mortenlj/userscripts
// @version      0.1
// @downloadURL  https://raw.githubusercontent.com/mortenlj/userscripts/master/microsoftonline.user.js
// @description  Automate giving access to application
// @author       Morten Lied Johansen
// @match        https://login.microsoftonline.com/common/oauth2/deviceauth -- select account
// @match        https://login.microsoftonline.com/62366534-1ec3-4962-8869-9b5535279d0b/reprocess?ctx=rQIIARXPv3OTUADA8ZCfbTyfvV7dvHPJpPcUHvCA3jk8IL9JkZhEkyVH4EGqoRAKwbi4Ojiok7OLV0f_gOrs4HXVidHroou7dfuOn--dEnePPWyI7kJQ5AWCC86ToSC7IpRtzEPKCpRnsSMgG8X79b3zgx_n-7sT8-Pb1zdqX9RbFwzzi2F-FvdMkiZLpNPNsUP_52URnNIVdZK57ThhepJ8KjVslkou5hSIHA9BAfMctLHHQsHjJOoqoseJ_OdSAyMeY5EXIEcdHgoKRlCWsQKVhSjyIpIUl11clIuX5SK786FyhardZG4P_tbbZ-_P0MvftcK3yn1tHC5VqhizvjggD5MYWVwq0Kl5fJf1MY6iDj45Rag1kbH8gD3k3lT1P1XmVa3w9XrhHfjOEIuohDQJITqEukH4iSlZsev6PV96TDfx0WY1bGb81BnjdqZqTjvupJMgeBRw80AiPatjbfhMz56MoGiTZ82hSbTpVibRVrMgaaqzznyYjDKN9INWoD4frLuc5PBcn6ZD2d2Go-6RMV62lTAOomxqiGuoRC0kxrPAear2iLH2tsiS3STOpBdXa-Oe6huJkkZhV3LjlR-EWNkG-srUAldr-oTkgMlBMQelHJRzUMlBNQe1HOzkYDcH9Rxc-wc1&sessionid=1c0028ca-223d-4c60-88cd-36edefa4166e -- "Prøver du å logge på kubectl"
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
