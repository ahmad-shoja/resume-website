document.addEventListener('DOMContentLoaded', ev => {
    const pageAbout = document.querySelector('#page__about-me')
    const pageLicence = document.querySelector('#page__licences')
    const pageImpossibles = document.querySelector('#page__impossible-list')
    const pageTimeLine = document.querySelector('#page__timeline')
    const pageContact = document.querySelector('#page__contact-me')

    const navButtonProfile = document.querySelector('#button__navigation__menu--profile')
    const navButtonLicence = document.querySelector('#button__navigation__menu--licenses')
    const navButtonImpossibles = document.querySelector('#button__navigation__menu--impossible-list')
    const navButtonTimeline = document.querySelector('#button__navigation__menu--timeline')
    const navButtonContact = document.querySelector('#button__navigation__menu--contact')

    document.querySelectorAll('.button__navigation-menu').forEach(navButton => {
        navButton.addEventListener('click', evt => {
            let selectedPage = pageAbout
            switch (evt.target.id) {
                case 'button__navigation__menu--profile':
                    selectedPage = pageAbout
                    break;
                case 'button__navigation__menu--licenses':
                    selectedPage = pageLicence
                    break;
                case 'button__navigation__menu--impossible-list':
                    selectedPage = pageImpossibles
                    break;
                case 'button__navigation__menu--timeline':
                    selectedPage = pageTimeLine
                    break;
                case 'button__navigation__menu--contact':
                    selectedPage = pageContact
                    break;
            }
            highlightNavButton(selectedPage.id)
            selectedPage.scrollIntoView()


        })
    })


    function onClick(e) {
    }

    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) highlightNavButton(entries[0].target.id)
    }, {threshold: [.3]})

    observer.observe(pageAbout)
    observer.observe(pageLicence)
    observer.observe(pageImpossibles)
    observer.observe(pageTimeLine)
    observer.observe(pageContact)

    function highlightNavButton(pageId) {
        document.querySelectorAll('.button__navigation-menu').forEach(navButton => navButton.classList.remove('selected'))
        switch (pageId) {
            case 'page__about-me':
                navButtonProfile.classList.add('selected');
                break;
            case 'page__licences':
                navButtonLicence.classList.add('selected');
                break;
            case 'page__impossible-list':
                navButtonImpossibles.classList.add('selected');
                break;
            case 'page__timeline':
                navButtonTimeline.classList.add('selected');
                break;
            case 'page__contact-me':
                navButtonContact.classList.add('selected');
                break;
        }
    }

})


