import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Dice } from '../data/dice-model';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RandomizerService {

  randomizerApiURL: string = 'https://www.random.org/integers/';

  constructor(
    private http: HttpClient
  ) { 
  }

  // FIX Blocked by CORS - Resolve first
  getRandom(numSides: number): Observable<number> {

    const headers = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
    };

    let paramstring = `?num=1$min=0&max=${numSides-1}&col=1&base=10&format=plain&rnd=new`;
    // https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new
    let url = this.randomizerApiURL + paramstring;
    let roll = this.http.get<number>(url, headers)
      .pipe(
        tap((res: number) => console.log("Retrieved " + res)));
    
    return roll;
  }

  getPseudo(dice: Dice) {
    switch (dice.class) {
      case 0: {
        return this.getRandomInRange(dice.getMin(), dice.getMax());
      };
      case 1: {
        return this.getRandomInRange(dice.getMin(), dice.getMax());
      };
      default: {
        return this.getRandomElement(dice.getSides());
      }
    }
  }

  getRandomInRange(min: number, max: number) {
    const rnd = Math.random();
    const result = Math.round(rnd*(max-min) + min);
    return result;
  }

  getRandomElement(sides: number[]) {
    const rnd = Math.random();
    const numberOfSides = sides.length;
    const rndScaled = Math.round(rnd*numberOfSides);
    const result = sides[rndScaled];
    return result;
  }
}
