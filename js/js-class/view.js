import { Id } from './id.js';
export class View{
    static showContinueModal(){
        Id.mask.classList.remove('hidden');
        Id.continueModal.classList.remove('hidden');
        Id.continueModal.classList.add('modal-flex');
    }

    static hideContinueModal(){
        Id.mask.classList.add('hidden');
        Id.continueModal.classList.add('hidden');
        Id.continueModal.classList.remove('modal-flex');
    }

    static showGameOverModal(){
        Id.mask.classList.remove('hidden');
        Id.gameOverModal.classList.remove('hidden');
        Id.gameOverModal.classList.add('modal-flex');
    }

    static showBet(){
        Id.betAction.classList.remove('hidden');
        Id.betAction.classList.add('bet-action-flex');
        Id.gameStartButton.classList.remove('hidden');
    }

    static hideBet(){
        Id.betAction.classList.add('hidden');
        Id.betAction.classList.remove('bet-action-flex');
        Id.gameStartButton.classList.add('hidden');
    }

    static firstBet(){
        this.showBet();
        Id.moneyView.classList.remove('hidden');
        
    }

    static continueToBet(){
        Id.gameAction.classList.add('hidden');
        this.showBet();
        Id.gameStartButton.classList.remove('hidden')
    }

    static showCheckEndsModal(){
        Id.mask.classList.remove('hidden');
        Id.checkEndsModal.classList.remove('hidden');
        Id.checkEndsModal.classList.add('modal-flex');
    }

    static hideCheckEndsModal(){
        Id.mask.classList.add('hidden');
        Id.checkEndsModal.classList.add('hidden');
        Id.checkEndsModal.classList.remove('modal-flex');
    }

    static hideGameAction(){
        
    }

}
