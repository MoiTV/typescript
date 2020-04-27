class Animal {
    private sing: string = 'lalalala';

    constructor(sound: string) {
        this.sing = sound;
    }

    greet(): string {
        return `Hello ${this.sing}`;
    }
}

let lion = new Animal('rarraar');
lion.greet();
