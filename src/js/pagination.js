const paginationList = document.querySelector(".pagination-list");

const refs = {
    paginationList: document.querySelector(".pagination-list"),
    prevBtn: document.querySelector(".btn-prev"),
    nextBtn: document.querySelector(".btn-next"),
}

const params = {
    page: 1,
    lastPage: 100
}

function generateButtons(page, lastPage) {
    let buttons = [];
    for (let i = page; i <= lastPage; i += 1) {
        const button = `<button>${i}</button>`;
        buttons.push(button);
    }
    buttons.push(`<button>...</button><button>${params.lastPage}</button>`)
    return buttons;
}

refs.paginationList.innerHTML =  generateButtons(1, 5).join("");

refs.paginationList.addEventListener('click', onPaginationBtnClick);

function onPaginationBtnClick(event) {
    // if (event.target.textContent === "...") {
    //     console.log(params.page);
        // refs.paginationList.innerHTML =  generateButtons(params.page - 1, params.page + 1).join("");
    // params.page -= 1;
    // }
    params.page = Number(event.target.textContent);
    if (params.page > 3) {
        refs.prevBtn.disabled = false;
    }
    else {
        refs.prevBtn.disabled = true;
    }
    if (params.page - 2 <= 0) {
        refs.paginationList.innerHTML =  generateButtons(1, 5).join("");
        return;
    }
    refs.paginationList.innerHTML =  generateButtons(params.page - 2, params.page + 2).join("");
}

refs.prevBtn.addEventListener('click', onPrevBtnClick);
refs.nextBtn.addEventListener('click', onNextBtnClick);

function onPrevBtnClick() {
    console.log(params.page);
    if (params.page - 4 < 0) {
        return;
    }
    refs.paginationList.innerHTML =  generateButtons(params.page - 3, params.page).join("");
    params.page -= 1;
}

function onNextBtnClick() {
    refs.paginationList.innerHTML =  generateButtons(params.page, params.page + 3).join("");
    params.page += 1;
}