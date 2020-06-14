function tabs(tabsContentSelector, tabsParentSelector, activeClass) {
    let tabcontents = document.querySelectorAll(tabsContentSelector),
        tabcontentButtons = document.querySelectorAll(tabsParentSelector);

    function hideTabs(tab) {
        for(let i = 0;i<tabcontentButtons.length;i++){
            tabcontents[i].style.display = 'none';
            tabcontentButtons[i].classList.remove(activeClass);
        }
        tabcontents[tab].style.display = 'block';
        tabcontents[tab].classList.add('fade');
        tabcontentButtons[tab].classList.add(activeClass);
    }
    hideTabs(0);
    
    for(let i = 0;i<tabcontentButtons.length;i++){
        tabcontentButtons[i].addEventListener('click', () => {
            hideTabs(i);
        });
    }
}
