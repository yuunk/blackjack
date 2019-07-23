import { Id } from '../js-class/id.js';
import { Player } from './player.js';
class User extends Player{
    constructor(cardArea, totalCardView) {
        super(cardArea, totalCardView);
        this.money = 10000;
        this.totalBet = 0;
        this.state = '';
    }

    bet1000() {
        this.money -= 1000;
        this.totalBet += 1000;
    }

    bet100() {
        this.money -= 100;
        this.totalBet += 100;
    }

    resetBet() {
        this.money += this.totalBet;
        this.totalBet = 0;
    }

    updateMoneyView(){
        Id.userMoney.textContent = this.money;
        Id.totalBet.textContent = this.totalBet;
    }

    win(){
        this.money += this.totalBet * 2;
        this.totalBet = 0;
    }

    lose(){
        this.totalBet = 0;
        this.state    = 'lose';
    }

    noMoney(){
        if(this.money === 0){
            return true;
        }
    }
}

const user = new User(Id.userCards, Id.userTotalCardView);

export { user };