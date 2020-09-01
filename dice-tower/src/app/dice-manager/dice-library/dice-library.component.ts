import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { Dice, DiceClass } from '../../data/dice-model';

import { RandomizerService } from '../../service/randomizer.service';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-dice-library',
  templateUrl: './dice-library.component.html',
  styleUrls: ['./dice-library.component.css']
})
export class DiceLibraryComponent implements OnInit {

  sampleDice: Dice;
  randomResult: number = 0;
  constructor(private randomizer: RandomizerService) { 

  }

  ngOnInit(): void {
    this.sampleDice = new Dice('d6', DiceClass.Basic, 2, 6);
  }

  getRandom(dice: Dice) {
    this.randomizer.getRandom(dice.getSides().length)
    .pipe(
      tap((res: number) => console.log("Rolled " + res)))
      .subscribe(
        (position: number) => {
        this.randomResult = dice.getSides()[position];
      }
    )
  }

  getPseudo(dice: Dice) {
    this.randomResult = this.randomizer.getPseudo(dice);
  }

  rerollSampleDice() {
    this.sampleDice = new Dice('d6', DiceClass.Basic, 2, 6);
    console.log(`Rerolled: ${this.sampleDice.literal}`);
  }

}
