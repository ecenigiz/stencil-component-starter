import {Component, Prop, h, State} from "@stencil/core";
import { format } from "../../utils/utils";

@Component({
  tag: "my-component",
  styleUrl: "my-component.css",
  shadow: true
})
export class MyComponent {
  @Prop() first: string;
  @Prop() last: string;

  @Prop() initialValue: number = 1;
  @Prop() amountOfIncrease: number = 5;
  @State() value: number;

  componentWillLoad() {
    this.value = this.initialValue;
  }

  private getText(): string {
    return format(this.first, this.last);
  }

  increase() {
    this.value += this.amountOfIncrease;
  }

  decrease() {
    this.value -= this.amountOfIncrease;
  }

  render() {
    return <div>
      <div>Hello, World! I'm {this.getText()}</div>
      <p>
        <button onClick={() => this.decrease()}>Decrease</button>
        <span class="value">{this.value}</span>
        <button onClick={() => this.increase()}>Increase</button>
      </p>
    </div>;

  }
}
