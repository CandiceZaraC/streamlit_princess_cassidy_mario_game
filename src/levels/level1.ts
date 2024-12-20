class Level1 {
    constructor() {
        this.assetsLoaded = false;
        this.backgroundImage = null;
        this.characterSprite = null;
    }

    initialize() {
        this.loadAssets();
    }

    loadAssets() {
        const backgroundImagePath = './assets/backgrounds/level1-background.png';
        const characterSpritePath = './assets/characters/mario-sprite.png';

        Promise.all([
            this.loadImage(backgroundImagePath),
            this.loadImage(characterSpritePath)
        ]).then(([background, character]) => {
            this.backgroundImage = background;
            this.characterSprite = character;
            this.assetsLoaded = true;
            this.startGameplay();
        });
    }

    loadImage(src) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve(img);
            img.onerror = reject;
        });
    }

    startGameplay() {
        if (this.assetsLoaded) {
            // Start the gameplay mechanics for level 1
            console.log('Level 1 started with assets loaded.');
        }
    }
}

export default Level1;