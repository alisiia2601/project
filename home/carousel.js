let newsItems = document.querySelectorAll('.newsCarousel > img')
let newsBtns = document.querySelectorAll('.newsCarousel > div')

prevNewsItem.addEventListener('click', onClickNewsBtn);
nextNewsItem.addEventListener('click', onClickNewsBtn);

function onClickNewsBtn(event){
    let elem = event.target;
    let act = (elem.id == "nextNewsItem")? -1: 1
    let posElem = []

    newsItems.forEach((elem, key) => {
        // let elemHasClass = elem.classList.contains("newsItemRight") || elem.classList.contains("newsItemCenter") || elem.classList.contains("newsItemLeft")
        let index = key + act
        if(index < 0){index = newsItems.length -1} 
        else if (index > newsItems.length -1) {index = 0}
        posElem.push([index, elem.classList[0]])
        elem.classList = []
    })
    posElem.forEach((elem, key) => {
        newsItems[elem[0]].classList.add(elem[1])
    })
}

