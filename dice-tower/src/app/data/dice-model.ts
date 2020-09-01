export class Dice implements IDice {
    literal: string;
    class: DiceClass;
    schema: DiceSchema;

    constructor(d_name: string, 
                d_class: DiceClass, 
                min?: number, 
                max?: number, 
                d_sides?: number[]) {
    // TODO Validate
        this.literal = d_name;
        this.class = d_class;
        this.schema = new DiceSchema(d_class, min, max, d_sides);
    }

    getSides() {
        return this.schema.getSides();
    }

    getMin() {
        return this.schema.minimum;
    }

    getMax() {
        return this.schema.maximum;
    }
}

export class DiceSchema implements IDiceSchema {
    number_of_sides: number;
    minimum: number;
    maximum: number;
    sides: number[]; // TODO find ordered structure to hold sides
    dice_class: DiceClass;

    getSides() {
        const export_sides = Array.from(this.sides);
        return export_sides;
    }

    constructor(dice_class: DiceClass, min?: number, max?: number, sides?: number[]) {
        // TODO Validate params
        this.dice_class = dice_class;
        this.sides = [];
        switch(dice_class) { 
            case 0: { 
                this.minimum = 1;
                this.maximum = max;
                for (let side = this.minimum; side <= this.maximum; side++) {
                    this.sides.push(side);
                  }
                break; 
            } 
            case 1: { 
                this.minimum = min;
                this.maximum = max;
                for (let side = this.minimum; side <= this.maximum; side++) {
                    this.sides.push(side);
                  }
                break; 
            } 
            default: { 
                this.minimum = Math.min(...sides);
                this.maximum = Math.max(...sides);
                this.sides = Array.from(sides);
               break; 
            } 
         } 
    }
}




/**
 * Dice Classes:
 *
 * Basic:
 * basic 'd20' dice set:
 * d4
 * d6
 * d8
 * d12
 * d20
 *
 * Advanced:
 * dN
 * ranges from M to N; 1 <= M < N <= 2;
 *
 * Custom:
 * d[A, B,..]
 * custom number of sides (N >= 2)
 * custom values for each side
 */

export interface IDice {
    literal: string;
    class: DiceClass;
    schema: DiceSchema;
    getSides();
}


export interface IDiceSchema {
    dice_class: DiceClass
    number_of_sides: number;
    minimum: number;
    maximum: number;
    getSides();
}

export enum DiceClass {
    Basic,
    Advanced,
    Custom
}


