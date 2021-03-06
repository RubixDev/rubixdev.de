export function copyText(text: string) {
    const temp = document.createElement('textarea')
    temp.innerHTML = text
    document.body.appendChild(temp)
    temp.select()
    temp.setSelectionRange(0, 99999)
    document.execCommand('copy')
    document.body.removeChild(temp)
}

export function addLoadEvent(func: () => void) {
    const oldOnLoad: any = window.onload
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

declare global {
    interface HTMLCollection {
        entries(): [number, HTMLElement][]
    }
}

HTMLCollection.prototype.entries = function () {
    const out = []
    for (let i = 0; i < this.length; i++) {
        out.push([i, this[i]] as [number, HTMLElement])
    }
    return out
}

function _addNavbarListItem(list: HTMLUListElement, href: string, html: string) {
    const listItem = document.createElement('li')
    const link = document.createElement('a')
    link.setAttribute('href', href)
    link.innerHTML = html
    listItem.appendChild(link)
    list.appendChild(listItem)
}

function addNavbarListItem(list: HTMLUListElement, href: string, icon: string, text: string) {
    if (
        window.location.href.includes('src')
        || window.location.href.includes('min')
        || window.location.href.includes('github.io')
    ) {
        href = `/${window.location.pathname.split('/')[1]}${href}`
    }
    _addNavbarListItem(list, href, `<i class="${icon}"></i><span style="vertical-align: middle;">${text}</span>`)
}

addLoadEvent(function () {
    const navbars = document.getElementsByTagName('nav')
    if (!navbars) {
        return
    }
    const navbar = navbars[0]

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
