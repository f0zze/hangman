interface Drawable {
    draw(ctx: CanvasRenderingContext2D): void;
}

class RightHand implements Drawable {
    public constructor() {}

    public draw(ctx: CanvasRenderingContext2D) {
        ctx.moveTo(200, 190);
        ctx.lineTo(230, 250);

        ctx.strokeStyle = "black";
        ctx.stroke();
    }
}

class LeftHand implements Drawable {
    public constructor() {}

    public draw(ctx: CanvasRenderingContext2D) {
        ctx.moveTo(200, 190);
        ctx.lineTo(170, 250);

        ctx.strokeStyle = "black";
        ctx.stroke();
    }
}

class RightLeg implements Drawable {
    public constructor() {}

    public draw(ctx: CanvasRenderingContext2D) {
        ctx.moveTo(200, 350);
        ctx.lineTo(240, 400);

        ctx.strokeStyle = "black";
        ctx.stroke();
    }
}

class LeftLeg implements Drawable {
    public constructor() {}

    public draw(ctx: CanvasRenderingContext2D) {
        ctx.moveTo(200, 350);
        ctx.lineTo(160, 400);
        ctx.strokeStyle = "black";
        ctx.stroke();
    }
}

class Stick implements Drawable {
    public constructor() {}

    public draw(ctx: CanvasRenderingContext2D) {
        ctx.moveTo(20, ctx.canvas.height);
        ctx.lineTo(20, 20);
        ctx.lineTo(200, 20);
        ctx.lineTo(200, 70);

        ctx.strokeStyle = "black";
        ctx.stroke();
    }
}

class Body implements Drawable {
    public constructor() {}

    public draw(ctx: CanvasRenderingContext2D) {
        ctx.moveTo(200, 170);
        ctx.lineTo(200, 350);

        ctx.strokeStyle = "black";
        ctx.stroke();
    }
}

class Head implements Drawable {
    public constructor() {}

    public draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(200, 120, 50, 0, 2 * Math.PI);
        ctx.stroke();
    }
}

class Stand implements Drawable {
    public constructor() {}

    public draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.moveTo(0, ctx.canvas.height);
        ctx.lineTo(40, ctx.canvas.height);
        ctx.lineWidth = 5;
        ctx.stroke();
        ctx.closePath();
    }
}

export class HangmanCanvas {
    private head: Head;
    private stick: Stick;
    private body: Body;
    private leftLeg: LeftLeg;
    private rightLeg: RightLeg;
    private rightHand: RightHand;
    private leftHand: LeftHand;
    private stand: Stand;

    private toDisplay: Set<Drawable> = new Set();
    private drawOrder: Map<number, Drawable> = new Map<number, Drawable>();

    constructor(public width: number, public height: number) {
        this.head = new Head();
        this.stick = new Stick();
        this.body = new Body();
        this.rightHand = new RightHand();
        this.leftHand = new LeftHand();

        this.leftLeg = new LeftLeg();
        this.rightLeg = new RightLeg();

        this.stand = new Stand();

        this.drawOrder.set(1, this.head);
        this.drawOrder.set(2, this.body);
        this.drawOrder.set(3, this.leftLeg);
        this.drawOrder.set(4, this.rightLeg);
        this.drawOrder.set(5, this.leftHand);
        this.drawOrder.set(6, this.rightHand);
    }

    public draw(ctx: CanvasRenderingContext2D) {
        this.stick.draw(ctx);
        this.stand.draw(ctx);
        for (const drawable of this.toDisplay) {
            drawable.draw(ctx);
        }
    }

    public drawElement(count: number) {
        for (let i = 1; i <= Math.min(count, this.drawOrder.size); i++) {
            this.toDisplay.add(this.drawOrder.get(i)!);
        }
    }
}

export function createCanvasGame(canvas: HTMLCanvasElement) {
    const hangmanCanvas = new HangmanCanvas(canvas.width, canvas.height);
    const ctx = canvas.getContext("2d")!;
    let rafId: number | undefined = undefined;

    function animate() {
        ctx.clearRect(0, 0, canvas.height, canvas.width);
        hangmanCanvas.draw(ctx);
        rafId = requestAnimationFrame(animate);
    }

    animate();

    function dispose() {
        if (rafId) {
            window.cancelAnimationFrame(rafId);
        }
    }

    return { hangmanCanvas, dispose };
}
