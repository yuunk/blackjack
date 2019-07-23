import { user } from '../player_class/user.js';
import { croupier } from '../player_class/croupier.js';
import { Id } from './id.js';

export class Judge{

    static aceIsOver(player){
        if(player.containAce && player.totalCard > 21){
            return true;
        }
    }
    //private
    static outputBurst(){
        Id.resultText.textContent = 'burst!';
    }

    static outputResult(){
        if(croupier.totalCard > 21){
            Id.resultText.textContent = 'Your Win';
            user.win();            
            return;
        }
    
        if(user.totalCard > croupier.totalCard){
            Id.resultText.textContent = 'Your Win!';
            user.win();
            return;
        }
    
        if(user.totalCard < croupier.totalCard){
            Id.resultText.textContent = 'Your Lose!';
            user.lose();
            return;
        }
    
        if(user.totalCard === croupier.totalCard){
            Id.resultText.textContent = 'draw'
            return;
        }
    }

}
