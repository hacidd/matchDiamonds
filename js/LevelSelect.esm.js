import { Common, HIDDEN_CLASS, HIDDEN_SCREEN, VISIBLE_SCREEN } from './Common.esm.js'
import { canvas } from './Canvas.esm.js'
import { DATALOADED_EVENT_NAME, loader } from './Loader.esm.js'
import { game } from './Game.esm.js'
import { media } from './Media.esm.js'
import { gameLevels } from './gameLevels.esm.js'
import { userData } from './UserData.esm.js'

const LEVEL_SELECT_BUTTON_ID = 'level-select__button'
const LEVEL_SELECT_ID = 'js-level-select-screen'
class LevelSelect extends Common {
	constructor() {
		super(LEVEL_SELECT_ID)
	}

	createButtons() {
		while (this.element.firstChild) {
			this.element.removeChild(this.element.firstChild)
		}

		gameLevels.some(gameLevel => this.createButton(gameLevel.level))
	}

	createButton(value) {
		if (!userData.checkAvailabilityLevel(value)) {
			return true
		}
		const button = document.createElement('button')

		button.type = 'button'
		button.classList.add(LEVEL_SELECT_BUTTON_ID)
		button.textContent = value
		button.value = value
		button.addEventListener('click', event => this.buttonOnClickHandler(event))
		this.element.appendChild(button)
	}
	buttonOnClickHandler(event) {
		this.changeVisibilityScreen(this.element, HIDDEN_SCREEN)
		this.changeVisibilityScreen(canvas.element, VISIBLE_SCREEN)
		this.loadLevel(event.currentTarget.value)
	}

	loadLevel(level) {
		media.diamondsSprite = loader.loadImage('images/diamonds-transparent.png')
		media.backgroundImage = loader.loadImage('images/levelbackground.png')
		window.addEventListener(DATALOADED_EVENT_NAME, () => game.playLevel(level))
	}
}

export const levelSelect = new LevelSelect()
