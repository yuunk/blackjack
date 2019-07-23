import { Id } from '../js-class/id.js';
import { Player } from './player.js';

class Croupier extends Player{
    constructor(cardArea, totalCardView){
        super(cardArea, totalCardView);
        this.firstHiddenCard = "";
    }

    saveFirstHiddenCard(){
        this.firstHiddenCard = this.cardArea.firstElementChild.textContent;
    }

    openFirstCard(){
        this.cardArea.firstElementChild.classList.remove('inside-out-card');
        this.cardArea.firstElementChild.textContent = this.firstHiddenCard;
        this.totalCardView.textContent = this.totalCard;
    }

    reverseFirstCard(){
        this.saveFirstHiddenCard();
        this.cardArea.firstElementChild.textContent = "";
        this.cardArea.firstElementChild.classList.add('inside-out-card');
        this.totalCardView.textContent = '?';
        }
}

const croupier = new Croupier(Id.croupierCards, Id.croupierTotalCardView);

export { croupier }