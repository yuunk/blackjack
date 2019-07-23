import { Id }  from './js-class/id.js';
import { user } from './player_class/user.js';
import { cards, Card } from './js-class/card.js';
import { croupier } from './player_class/croupier.js'
import { View } from './js-class/view.js';

Id.play.addEventListener('click', ()=>{
    Id.play.classList.add('hidden');
    Id.switchAction.classList.remove('switch-action-flex');
    View.firstBet();
});

Id.gameStartButton.addEventListener('click', ()=>{
    
    if(user.totalBet == 0){
        alert('bet be 100 or more');
        return;
    }

    View.hideBet();
    Id.gameAction.classList.remove('hidden');
    
    for(let i = 0; i < 2; i++){
        Card.draw(cards, croupier);
        Card.draw(cards, user);
    }
    
    croupier.reverseFirstCard();
});

