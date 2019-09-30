import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { CartCount } from '../models/cartcount.model';


export const ADD_CART_COUNT = '[CARTCOUNT] Add';
export const REMOVE_CART_COUNT = '[CARTCOUNT] REmove';


export class AddCartCount implements Action {
    readonly type = ADD_CART_COUNT;
     constructor(public payload: CartCount[]) {}
}

export class RemoveCartCount implements Action {
    readonly type = REMOVE_CART_COUNT;
     constructor(public payload: number) {}
}

export type Actions = AddCartCount | RemoveCartCount ;
