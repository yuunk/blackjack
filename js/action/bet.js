import { Id } from '../js-class/id.js';
import { user } from '../player_class/user.js';

Id.bet1000.addEventListener('click', ()=>{
    if(user.money == 0){
        return;
    }
    user.bet1000();
    user.updateMoneyView();
});

Id.bet100.addEventListener('click', ()=>{
    if(user.money == 0){
        return;
    }
    user.bet100();
    user.updateMoneyView();
});

Id.reset.addEventListener('click', ()=>{
    user.resetBet();
    user.updateMoneyView();
});

