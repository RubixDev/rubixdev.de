"use strict";
addLoadEvent(function () {
    const discordButton = document.getElementById('discordButton');
    discordButton.addEventListener('click', function () {
        copyText('Rubix#7875');
        discordButton.setAttribute('tooltip', 'Copied \'Rubix#7875\' to Clipboard');
    });
    discordButton.addEventListener('mouseout', function () {
        setTimeout(function () {
            discordButton.setAttribute('tooltip', 'Copy to Clipboard');
        }, 300);
    });
});
addLoadEvent(function () {
    const birthday = new Date(2005, 1, 18);
    const diff = Date.now() - birthday.getTime();
    const ageDt = new Date(diff);
    const year = ageDt.getUTCFullYear();
    const age = Math.abs(year - 1970);
    const ageHeader = document.getElementById('age-header');
    ageHeader.innerText = age + '-year-old student';
});
