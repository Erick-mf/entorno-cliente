class Cat {
    constructor(name) {
        this.name = name;
        this.tiredness = 0;
        this.hunger = 0;
        this.loneliness = 0;
        this.happiness = 0;
    }

    feed(amount) {
        this.hunger -= amount;
        if (this.hunger < 0) { this.hunger = 0; }
        console.log(`${this.name} ha sido alimentado.`);
    }

    sleep(hours) {
        this.tiredness -= hours * 10;
        if (this.tiredness < 0) { this.tiredness = 0; }
        console.log(`${this.name} ha dormido.`);
    }

    pet(minutes) {
        if (Math.random() > 0.2) {
            this.loneliness -= minutes * 5;
            this.happiness += minutes * 5;
            if (this.loneliness < 0) { this.loneliness = 0; }
            if (this.happiness > 100) { this.happiness = 100; }
            console.log(`${this.name} ha sido acariciado y está feliz.`);
        } else {
            console.log(`${this.name} no quiere ser acariciado en este momento.`);
        }
    }

    status() {
        let status = `${this.name} está `;
        status += (this.tiredness > 50) ? 'muy cansado, ' : 'bien descansado, ';
        status += (this.hunger > 50) ? 'muy hambriento, ' : 'bien alimentado, ';
        status += (this.loneliness > 50) ? 'muy solitario, ' : 'contento con su compañía, ';
        status += (this.happiness > 50) ? 'y MUY feliz!' : 'y un poco triste.';
        console.log(status);
    }
}

let gato = new Cat('Paws');
gato.status();
gato.feed(30);
gato.sleep(5);
gato.pet(10);
gato.status();
