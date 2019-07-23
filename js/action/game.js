import { Id } from "../js-class/id.js";
import { Judge } from '../js-class/judge.js';
import { cards, Card } from '../js-class/card.js';
import { user } from "../player_class/user.js";
import { croupier } from "../player_class/croupier.js";
import { View } from '../js-class/view.js';

Id.hit.addEventListener('click', () => {
    if(user.totalCard > 21){
        return;
    }
    hit(user);
    if (user.totalCard > 21) {
        user.lose();
        setTimeout(Judge.outputBurst, 1000);
        setTimeout(View.showContinueModal, 2000);
    }
});

Id.stand.addEventListener('click', () => {
    if(user.totalCard > 21){
        return;
    }
    Id.mask.classList.remove('hidden');
    croupier.openFirstCard();
    autoDraw();
    
});

function autoDraw() {
    if (croupier.totalCard >= 17) {
        setTimeout(Judge.outputResult, 2000);
        setTimeout(View.showContinueModal, 2000);
        return;
    }

    const roop = setInterval(() => {
        hit(croupier);
        if (croupier.totalCard >= 17) {
            clearInterval(roop);
            setTimeout(Judge.outputResult, 2000);
            if(user.noMoney() && user.state === 'lose'){
                setTimeout(View.showGameOverModal, 2000);
            }else{
                setTimeout(View.showContinueModal, 2000);
            }
        }
    }, 1500);
}

function hit(player) {

    Card.draw(cards, player);

    if (Judge.aceIsOver(player)) {
        player.subtractTotalCard10();
        return;
    }
}

function hoge(){
    if(user.noMoney()){

    }else{
        setTimeout
    }
}

