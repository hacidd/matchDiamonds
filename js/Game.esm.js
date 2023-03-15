import { Common } from './Common.esm.js'
import { gameLevels } from './gameLevels.esm.js'
import { DATALOADED_EVENT_NAME } from './Loader.esm.js'


class Game extends Common {
	constructor() {
		super()
	}

    playLevel(level) {
        window.removeEventListener(DATALOADED_EVENT_NAME, this.playLevel)
        const levelInfo = gameLevels[level - 1]
        this.animate()
    }

    animate() {
        console.log('Lets Game');
        this.animationFrame = window.requestAnimationFrame(() => this.animate())
    }
}

export const game = new Game()