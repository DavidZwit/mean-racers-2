import boot from "./states/boot";

export class Game extends Phaser.Game {

    private static instance: Phaser.Game = null;

    constructor () {

        super(10, 10);

        this.state.add('boot', boot);

    }

    public update() {
        console.log('game update');
    }

    /* Returns an instance of the game */
    public static getInstance(): Phaser.Game {
        if (Game.instance === null) {
            this.instance = new Game();
        }
        return this.instance;
    }

    /* Starts the first state */
    public start (): void {
        this.state.start('boot');
    }

}
