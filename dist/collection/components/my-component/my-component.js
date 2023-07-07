import { h } from "@stencil/core";
import { format } from "../../utils/utils";
export class MyComponent {
    constructor() {
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
        return h("div", null,
            h("div", null,
                "Hello, World! I'm ",
                this.getText()),
            h("p", null,
                h("button", { onClick: () => this.decrease() }, "Decrease"),
                h("span", { class: "value" }, this.value),
                h("button", { onClick: () => this.increase() }, "Increase")));
    }
    static get is() { return "my-component"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["my-component.css"]
    }; }
    static get styleUrls() { return {
        "$": ["my-component.css"]
    }; }
    static get properties() { return {
        "first": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "first",
            "reflect": false
        },
        "last": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "last",
            "reflect": false
        },
        "initialValue": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "initial-value",
            "reflect": false,
            "defaultValue": "1"
        },
        "amountOfIncrease": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "amount-of-increase",
            "reflect": false,
            "defaultValue": "5"
        }
    }; }
    static get states() { return {
        "value": {}
    }; }
}
