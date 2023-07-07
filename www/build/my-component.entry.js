import { r as registerInstance, h } from './core-4db5aae1.js';

function format(first, last) {
    return ((first || "") + (last ? ` ${last}` : ""));
}

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.initialValue = 1;
        this.amountOfIncrease = 5;
    }
    componentWillLoad() {
        this.value = this.initialValue;
    }
    getText() {
        return format(this.first, this.last);
    }
    increase() {
        this.value += this.amountOfIncrease;
    }
    decrease() {
        this.value -= this.amountOfIncrease;
    }
    render() {
        return h("div", null, h("div", null, "Hello, World! I'm ", this.getText()), h("p", null, h("button", { onClick: () => this.decrease() }, "Decrease"), h("span", { class: "value" }, this.value), h("button", { onClick: () => this.increase() }, "Increase")));
    }
    static get style() { return "#test {\n  color: red;\n}\n\nbutton {\n  font-size: 20px;\n}\n.value {\n  padding: 0 10px 0 10px;\n  font-size: 20px;\n  font-weight: bold;\n}"; }
};

export { MyComponent as my_component };
