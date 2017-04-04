export default class boot extends Phaser.State {

    game: Phaser.Game;
    constructor () {
        super ();

        console.log('boot constructor');

    }

    public init() {
        console.log('init boot')
    }

    public create(): void {
        console.log('creating in boot);');
    }

    public update(): void{
        console.log('boot update!');
    }

}