const deleteAllBtn = document.querySelector('.delete-all__btn');

const options =  {
    hour: 'numeric', minute: 'numeric'
}

function renderFromProgress () {
    const doneList = document.querySelector('.done-card__card-list')

    const cardItem = document.createElement('li');
    cardItem.classList.add('progress-card__card-item');

    const btnWrapper = document.createElement('div');
    btnWrapper.classList.add('card-item__btn--wrapper');

    const btnBack = document.createElement('button');
    btnBack.classList.add('card-item__btn-back');
    btnBack.classList.add('card-item__btn');
    btnBack.textContent = 'delete';

    const descrWrap = document.createElement('div');
    descrWrap.classList.add('card-item__descr--wrapper');

    const title = document.createElement('p');
    title.classList.add('card-item__title');

    const titleSpan = document.createElement('span');
    title.classList.add('card-item__stat-title');
    titleSpan.textContent = 'Title: '

    const description = document.createElement('p');
    description.classList.add('card-item__descr');

    const descrSpan = document.createElement('span');
    descrSpan.classList.add('card-item__stat-descr');
    descrSpan.textContent = 'Description: '

    const footer = document.createElement('div');
    footer.classList.add('card-item__footer--wrapper')

    const user = document.createElement('p');
    user.classList.add('card-item__footer-user');

    const userSpan = document.createElement('span');
    userSpan.classList.add('card-item__footer-user-text');
    userSpan.textContent = 'user: '

    const date = document.createElement('p');
    date.classList.add('card-item__footer-date');

    const dateSpan = document.createElement('span');
    dateSpan.classList.add('card-item__footer-user-date');
    dateSpan.innerText = `${new Intl.DateTimeFormat('ru', options).format(new Date())}`;



    btnWrapper.append(btnBack);

    descrWrap.append(title);
    title.append(titleSpan);
    descrWrap.append(description);
    description.append(descrSpan);

    footer.append(user);
    user.append(userSpan);
    footer.append(date);
    date.append(dateSpan);

    cardItem.append(btnWrapper);
    cardItem.append(descrWrap);
    cardItem.append(footer);

    doneList.append(cardItem);
    
    // addCounter();
}



deleteAllBtn.addEventListener('click', renderFromProgress);