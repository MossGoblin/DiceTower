import { Component, OnInit } from '@angular/core';

import { Dice, DiceClass } from '../../data/dice-model';

import { RandomizerService } from '../../service/randomizer.service';

@Component({
  selector: 'app-dice-library',
  templateUrl: './dice-library.component.html',
  styleUrls: ['./dice-library.component.css']
})
export class DiceLibraryComponent implements OnInit {

  sampleDice: Dice;
  constructor(private randomizer: RandomizerService) { 

  }

  ngOnInit(): void {
    this.sampleDice = new Dice('d6', DiceClass.Basic, 2, 6);
  }

  getRandom(dice: Dice) {
    return this.randomizer.getRandom(dice);
  }

}
