

export class Player{
    constructor(cardArea, totalCardView){
        this.cardArea      = cardArea;
        this.totalCardView = totalCardView;
        this.totalCard     = 0;
        this.containAce    = false;
    }

    resetTotalCard(){
        this.totalCard = 0;
    }

    addTotalCardView(cardValue){
        this.totalCard += cardValue;
        this.totalCardView.textContent = this.totalCard;
    }

    checkContainAce(cardIsAce){
        if(cardIsAce == true){
            this.containAce = true;
        }
    }

    subtractTotalCard10(){
        this.totalCard -= 10;
        this.totalCardView.textContent = this.totalCard;
        this.containAce = false;
    }
}