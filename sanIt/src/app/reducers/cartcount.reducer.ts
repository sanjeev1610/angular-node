import { CartCount } from './../models/cartcount.model';
import { Action } from '@ngrx/store';
import * as CartCountActions from './../actions/cartcount.action';

var countArray = [];
countArray = JSON.parse(localStorage.getItem('cart'));
let cartCount: number;
if(countArray === null) {
    cartCount = 0;
} else {
    cartCount = countArray.length;
}
// if (cartCount !== 0) {
//     cartCount = countArray.length;
// } else {
//     cartCount = 0;
// }
console.log(cartCount);
const intialState: CartCount = {
    count: cartCount
};

export function reducer(state: CartCount[] = [intialState], action: CartCountActions.Actions) {

    switch (action.type) {
        case CartCountActions.ADD_CART_COUNT:
            return [...state, action.payload];
        default :
            return state;
    }
    

}



