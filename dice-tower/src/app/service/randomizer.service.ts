import { Injectable } from '@angular/core';
import { Dice } from '../data/dice-model';

@Injectable({
  providedIn: 'root'
})
export class RandomizerService {

  constructor() { }

  getRandom(dice: Dice) {
    switch (dice.class) {
      case 0: {
        return dice.getMax();
      };
      case 1: {
        return dice.getMax();
      };
      default: {
        return dice.getMax();
      }
    }
  }
}
