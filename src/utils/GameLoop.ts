class GameLoop {
    private static instance: GameLoop;
    private lastTime: number;
    private state: any;
    private prevElapsed: number;
    private prevElapsed2: number;

    private constructor() {
        this.lastTime = 0;
        this.state = null;
        this.prevElapsed = 0;
        this.prevElapsed2 = 2;
    }

    public static getInstance = (): GameLoop => {
        if (!this.instance) {
            this.instance = new GameLoop();
        }

        return this.instance;
    }

    public run = (state: any) => {
        this.state = state;

        if (this.lastTime === 0) {
            window.requestAnimationFrame(this.execute);
            this.lastTime = 0;
        }
    }

    private execute = () => {
        if (this.state === null) {
            this.lastTime = 0;
        } else {
            window.requestAnimationFrame(this.execute)
            const timeNow: number = Date.now();
            let elapsed: number = timeNow - this.lastTime;

            if (elapsed > 0) {
                if (this.lastTime !== 0) {
                    if (elapsed > 1000) {
                        // Cap max elapsed time to 1 second to avoid death spiral
                        elapsed = 1000;
                    }

                    // Hackish fps smoothing
                    const smoothElapsed: number = (elapsed + this.prevElapsed + this.prevElapsed2) / 3;
                    this.state(0.001 * smoothElapsed);
                    this.prevElapsed2 = this.prevElapsed;
                    this.prevElapsed = elapsed;
                }

                this.lastTime = timeNow;
            }
        }
    }
    
    public stop = () => {
        this.run(null);
    }
}

export { GameLoop }