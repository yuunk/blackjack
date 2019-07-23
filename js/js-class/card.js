export class Card {
    constructor() {
        this.init_cardsValue();
        this.playingCards;
        this.randomPatternIndex;
        this.randomNumberIndex;
        this.randomPattern;
        this.randomNumber;
        this.text;
    }

    init_cardsValue() {
        this.diamond = new Array(14);
        this.heart   = new Array(14);
        this.club    = new Array(14);
        this.spade   = new Array(14);
        this.playingCards = [this.diamond, this.heart, this.club, this.spade];
        this.diamond[0] = "◆";
        this.heart[0] = "♥";
        this.club[0] = "♣";
        this.spade[0] = "♠";

        for(let i = 0; i < 4; i++){
            for (let j = 1; j < 14; j++) {
                this.playingCards[i][j] = j;
            }
        }
    }

    createElement(){
        var cardElement = document.createElement('div');
        cardElement.className ='card';
        cardElement.textContent = this.text;
        cardElement.style.color = this.switchColorText();
        return cardElement;
    }

    removeIsSelectedCard(){
        const removeNumberIndex = this.playingCards[this.randomPatternIndex].indexOf(this.randomNumber);
        this.playingCards[this.randomPatternIndex].splice(removeNumberIndex, 1);
    }

    initIsSelectedCard(){
        this.setRandomPattern();
        this.setRandomNumber();
        this.text = this.randomPattern + this.convertSelectedNumber('text');
    }

     //private
    setRandomPattern(){
        this.randomPatternIndex = Math.floor(Math.random() * 4);
        this.randomPattern = this.playingCards[this.randomPatternIndex][0];
    }
    //private
    setRandomNumber(){
        do{
            this.randomNumberIndex = Math.floor(Math.random() * 13) + 1;
            this.randomNumber  = this.playingCards[this.randomPatternIndex][this.randomNumberIndex];
        }while(this.randomNumber === undefined);
    }

    //private
    switchColorText(){
        if(this.randomPattern  == '◆' || this.randomPattern == '♥'){
            return 'red';
        }else{
            return 'black';
        }
    }

    //private
    convertSelectedNumber(target){
        if(this.randomNumber >= 11){
            if(target === 'value'){
                return 10;
            }
            if(target === 'text'){
                switch(this.randomNumber){
                    case 11:
                        return 'J';
                    case 12:
                        return 'Q';
                    case 13:
                        return 'K';
                }
            }
            
        }
        
        if(this.randomNumber == 1){
            if(target === 'value'){
                return 11;
            }
            
            if(target === 'text'){
                return 'A';
            }
        }
        return this.randomNumber;
    }

    selectedCardIsAce(){
        if(this.randomNumber === 1){
            console.log('cards function if');
            return true;
        }
        return false;
    }

    returnPlayingCards(croupierCards, userCards){
        this.init_cardsValue();
        croupierCards.textContent = null;
        userCards.textContent = null;
    }

    static draw(cards, player){
        cards.initIsSelectedCard();
        player.checkContainAce(cards.selectedCardIsAce());
        player.cardArea.appendChild(cards.createElement());
        player.addTotalCardView(cards.convertSelectedNumber('value'));
        cards.removeIsSelectedCard();
    }

}

var cards = new Card();

export { cards };


