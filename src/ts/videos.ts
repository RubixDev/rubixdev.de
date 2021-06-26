import { addLoadEvent } from "./main";

function createButtonsDiv(videoFileName: string, videoYouTubeLink: string) {
    const divButtons = document.createElement('div')
    divButtons.setAttribute('class', 'buttons-div')

    const aDownload = document.createElement('a')
    aDownload.setAttribute('href', `https://downloads.rubixdev.de/videos/${videoFileName}`)
    aDownload.setAttribute('tabindex', '-1')

    const buttonDownload = document.createElement('button')
    buttonDownload.setAttribute('class', 'btn btn-small btn-dl btn-hover-light')

    const spanDownload = document.createElement('span')
    spanDownload.setAttribute('class', 'vertical-align')
    spanDownload.innerHTML = 'Download'

    buttonDownload.appendChild(spanDownload)
    aDownload.appendChild(buttonDownload)
    divButtons.appendChild(aDownload)

    const aYouTube = document.createElement('a')
    aYouTube.setAttribute('href', videoYouTubeLink)
    aYouTube.setAttribute('target', '_blank')
    aYouTube.setAttribute('rel', 'noopener noreferrer')
    aYouTube.setAttribute('tabindex', '-1')

    const buttonYouTube = document.createElement('button')
    buttonYouTube.setAttribute('class', 'btn btn-small btn-yt btn-hover-dark')

    const spanYouTube = document.createElement('span')
    spanYouTube.setAttribute('class', 'vertical-align')
    spanYouTube.innerHTML = 'Watch'

    buttonYouTube.appendChild(spanYouTube)
    aYouTube.appendChild(buttonYouTube)
    divButtons.appendChild(aYouTube)

    return divButtons
}

function createTextDiv(videoDescription: string) {
    const divText = document.createElement('div')
    divText.setAttribute('class', 'text-div')
    divText.innerHTML = videoDescription

    return divText
}

addLoadEvent(function () {
    const sections = document.getElementsByClassName('video-section') as HTMLCollection
    for (let [index, section] of sections.entries()) {

        const videoTitle = (section.getElementsByClassName('title')[0] as HTMLElement).innerText
        const videoFileName = (section.getElementsByClassName('filename')[0] as HTMLElement).innerText
        const videoYouTubeLink = (section.getElementsByClassName('yt-link')[0] as HTMLElement).innerText
        const videoDescription = section.getElementsByClassName('description')[0].innerHTML

        section.innerHTML = ''

        const divDarkerBg = document.createElement('div')
        divDarkerBg.setAttribute('class', 'darker-bg')

        const h3VideoTitle = document.createElement('h3')
        h3VideoTitle.setAttribute('class', 'video-title')
        h3VideoTitle.innerHTML = videoTitle

        divDarkerBg.appendChild(h3VideoTitle)

        const divSplit = document.createElement('div')
        divSplit.setAttribute('class', 'split big-section')

        if (index % 2 === 0) {
            divSplit.appendChild(createButtonsDiv(videoFileName, videoYouTubeLink))
            divSplit.appendChild(createTextDiv(videoDescription))
        } else {
            divSplit.appendChild(createTextDiv(videoDescription))
            divSplit.appendChild(createButtonsDiv(videoFileName, videoYouTubeLink))
        }

        divDarkerBg.appendChild(divSplit)
        section.appendChild(divDarkerBg)
    }
})
