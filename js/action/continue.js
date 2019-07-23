'use strict';

import { Id } from '../js-class/id.js';
import { View } from '../js-class/view.js';
import { user } from '../player_class/user.js';
import { cards } from '../js-class/card.js';
import { croupier } from '../player_class/croupier.js';

Id.continueYes.addEventListener('click', ()=>{
    View.hideContinueModal();
    View.continueToBet();
    nextGame();
});

Id.continueNo.addEventListener('click', ()=>{
    View.hideContinueModal();
    View.showCheckEndsModal();
});

Id.endsYes.addEventListener('click', ()=>{
    location.reload();
});

Id.endsNo.addEventListener('click', ()=>{
    View.hideCheckEndsModal();
    View.showContinueModal();
});

Id.gameOverOk.addEventListener('click', ()=>{
    location.reload();
});


function nextGame(){
    user.updateMoneyView();
    user.resetTotalCard();
    croupier.resetTotalCard();
    cards.returnPlayingCards(Id.croupierCards, Id.userCards);
    clearTextContent();
}

function clearTextContent(){
    Id.userTotalCardView.textContent     = '';
    Id.croupierTotalCardView.textContent = '';
    Id.resultText.textContent            = '';
}

