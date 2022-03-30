import { Sounds } from "../assetLoading/Sounds";
import { Game } from "../Game";

class Menu {
    private static instance: Menu;
    private game: Game;

    private constructor(game: Game) {
        this.game = game;

        this.registerEvents();
    }

    public static getInstance = (game: Game): Menu => {
        if (!this.instance) {
            this.instance = new Menu(game);
        }

        return this.instance;
    }

    private registerEvents = () => {
        $(".menu-button").on('mouseover', () => {
            Sounds.MENU_SELECT.currentTime = 0;
            Sounds.MENU_SELECT.play();
        })

        $("#new-game").on('click', () => {
            $('#main-menu').hide();
            this.game.start();
        });

        $("#resume-game").on('click', () => {
            $('#pause-menu').hide();
            this.game.resume();
        });

        $("#exit-game").on('click', () => {
            $('#pause-menu').hide();
            this.game.gameOver();
        });

        $("#reset-scores").on('click', () => {
            $("#scores-cleared").text("Cleared!");
            $("#scores-cleared").show().fadeOut(500);
            // ASTEROIDS.scoreManager.clearHighScore();
            Sounds.SCORE_CLEARED.currentTime = 0;
            Sounds.SCORE_CLEARED.play();
        });
    }

    public showStart = () => {
        $("#main-menu").show();
    }

    public showPause = () => {
        $("#pause-menu").show();
    }

    private flashHighScore = () => {
        $("#game-over-score").fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500);
    }

    public showGameOver = (finalScore: number, enemiesKilled: number, isHighScore: boolean, isWin: boolean) => {
        let scoreMessage: string = "";
        let gameEndMessage: string = "";

        if (isHighScore) {
            scoreMessage = "New high score!: " + finalScore;
            this.flashHighScore();
        } else {
            scoreMessage = "Final score: " + finalScore;
        }

        gameEndMessage = isWin ? "YOU WIN!" : "GAME OVER";

        $("#game-end-message").text(gameEndMessage);
        $("#game-over-score").text(scoreMessage);
        $("#game-over-enemies-killed").text("Enemies killed: " + enemiesKilled);
        $("#game-over").show();

        setTimeout(() => { $("#game-over").fadeOut(this.showStart) }, 4000);
    }

    public showWaveTransition = (wave: number, deathBonus: number, seconds: number) => {
        let waveTransition: JQuery<HTMLElement> = $("#wave-transition");
        waveTransition.empty();
        waveTransition.fadeIn(1000);
        waveTransition.append("<p class=\"game-over-text\">WAVE " + wave + "</p>");

        if (deathBonus && deathBonus > -1) {
            waveTransition.append("<p class=\"game-over-text\">No death bonus: " + deathBonus + "</p>").fadeIn(300);
        }

        if (seconds > 0) {
            waveTransition.append("<p class=\"game-over-text\">Fast clear bonus: 100 * " + seconds + " seconds remaining = " + (100 * seconds).toString() + "</p>").fadeIn(300);
        }

        setTimeout(() => { $("#wave-transition").fadeOut(this.game.waveStart) }, 5000);
    }
}

export { Menu }