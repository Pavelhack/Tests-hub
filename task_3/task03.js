const moduleX = (function () {

    return initializeBlock;

    // **
    // ------------------------
    // **

    function initializeBlock(ctx) {
        console.log(ctx); // 1
    }

})();


// modlueX(); === undefined

// TDZ -- ?