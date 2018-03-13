var fs = require('fs');

var configFile = (function () {
    for (var i = 0; i < process.argv.length; i++) {
        if (process.argv[i].indexOf('-config=') === 0)
            return process.argv[i].split('=')[1];
    }
    return 'config.json';
})();


try {
    global.config = JSON.parse(fs.readFileSync(configFile));
} catch (e) {
    console.error('Failed to read config file ' + configFile + '\n\n' + e);
    return;
}

global.version = "v0.99.3.3";
global.feePercent = config.blockUnlocker.poolFee / 100;
global.devDonationAddress = 'XwnmG9j8tZ6eeztCRYd5LpLDnF9ktiamwCZzgk7apXDRYnwB9hFJSahAFktnAwSKUTERZN5pHTTjR8eGjGGqyDRQ1aiFMypda';
global.coreDevDonationAddress = 'XwnmG9j8tZ6eeztCRYd5LpLDnF9ktiamwCZzgk7apXDRYnwB9hFJSahAFktnAwSKUTERZN5pHTTjR8eGjGGqyDRQ1aiFMypda';
global.doDonations = config.blockUnlocker.devDonation > 0 || config.blockUnlocker.coreDevDonation > 0;
