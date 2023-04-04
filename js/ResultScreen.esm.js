import { Common } from "./Common.esm";



const RESULT_SCREEN_END_SCREEN_ID = 'js-end-screen'
const RESULT_SCREEN_HEADER_ID = 'js-game-result'
const RESULT_SCREEN_USER_POINTS_ID = 'js-user-points'
const RESULT_SCREEN_HIGH_SCORES_ID = 'js-high-scores'
const RESULT_SCREEN_BACK_BUTTON_ID = 'js-back-to-levels' 
const RESULT_SCREEN_RESTART_LEVEL_BUTTON_ID = 'js-restart-level'

class ResultScreen extends Common {
    constructor() {
        super(RESULT_SCREEN_END_SCREEN_ID)
    }
}

bindToElements() {
    this.resultTextElement = this.bindToElement(RESULT_SCREEN_HEADER_ID)
    this.userPointsElement = this.bindToElement(RESULT_SCREEN_USER_POINTS_ID)
    this.highScoresElement = this.bindToElement(RESULT_SCREEN_HIGH_SCORES_ID)

    const backButtonElement = this.bindToElement(RESULT_SCREEN_BACK_BUTTON_ID)
    const restartButtonElement = this.bindToElement(RESULT_SCREEN_RESTART_LEVEL_BUTTON_ID)

    backButtonElement.addEventListener("click", () => console.log('click'))
    restartButtonElement
}



export const resultScreen = new ResultScreen()