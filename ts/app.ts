import {poepChinees} from "./otherTest";
import {poep} from "./test";

export class Game extends Phaser.Game {

    constructor () {

        super(10, 10);

        let chinees = new poepChinees(new poep(5));
        console.log('doing stuff');
    }

}
