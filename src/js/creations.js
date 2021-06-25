addLoadEvent(function () {
    const curseForgeButtons = document.getElementsByClassName('btn-curseforge')
    for (let buttonIndex = 0; buttonIndex < curseForgeButtons.length; buttonIndex++) {
        const button = curseForgeButtons[buttonIndex]
        const curseForgeIcon = document.createElement('i')
        curseForgeIcon.setAttribute('class', 'si si-curseforge')
        button.appendChild(curseForgeIcon)
    }
})
