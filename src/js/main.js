function copyText(text) {
    const temp = document.createElement('textarea')
    temp.innerHTML = text
    document.body.appendChild(temp)
    temp.select()
    temp.setSelectionRange(0, 99999)
    document.execCommand('copy')
    document.body.removeChild(temp)
}

function _addNavbarListItem(list, href, html) {
    const listItem = document.createElement('li')
    const link = document.createElement('a')
    link.setAttribute('href', href)
    link.innerHTML = html
    listItem.appendChild(link)
    list.appendChild(listItem)
}

function addNavbarListItem(list, href, icon, text) {
    if (
        window.location.href.includes('src')
        || window.location.href.includes('min')
        || window.location.href.includes('github.io')
    ) {
        href = `/${window.location.pathname.split('/')[1]}${href}`
    }
    _addNavbarListItem(list, href, `<i class="${icon}"></i><span style="vertical-align: middle;">${text}</span>`)
}

function addLoadEvent(func) {
    const oldOnLoad = window.onload
    if (typeof window.onload != 'function') {
        window.onload = func
    } else {
        window.onload = function () {
            if (oldOnLoad) {
                oldOnLoad(undefined)
            }
            func()
        }
    }
}

addLoadEvent(function () {
    let navbar = document.getElementsByTagName('nav')
    if (!navbar) {
        return
    }
    navbar = navbar[0]

    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.setAttribute('id', 'nav-checkbox')
    navbar.appendChild(checkbox)

    const navbarList = document.createElement('div')
    navbarList.setAttribute('id', 'navbar-list')
    const list = document.createElement('ul')

    addNavbarListItem(
        list,
        '/',
        'fas fa-home',
        'Home'
    )
    addNavbarListItem(
        list,
        '/creations',
        'fas fa-code',
        'Creations'
    )
    addNavbarListItem(
        list,
        '/videos',
        'fas fa-film',
        'Videos'
    )

    navbarList.appendChild(list)
    navbar.appendChild(navbarList)

    const hamburgerLabel = document.createElement('label')
    hamburgerLabel.setAttribute('for', 'nav-checkbox')

    const hamburgerContent = document.createElement('div')
    hamburgerContent.setAttribute('id', 'hamburger-content')

    const hamburgerLine = document.createElement('div')
    hamburgerLine.setAttribute('id', 'hamburger-middle')

    hamburgerContent.appendChild(hamburgerLine)
    hamburgerLabel.appendChild(hamburgerContent)
    navbar.appendChild(hamburgerLabel)
})

// addLoadEvent(function () {
//     const anchors = document.getElementsByTagName('a')
//     for (let i = 0; i < anchors.length; i++) {
//         const anchor = anchors[i]
//         anchor.setAttribute()
//     }
// })
