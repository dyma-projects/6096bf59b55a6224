import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-exercice1-enfant",
  templateUrl: "./exercice1-enfant.component.html",
  styleUrls: ["./exercice1-enfant.component.css"],
})
export class Exercice1EnfantComponent implements OnInit {
  public value: number = 0;
  @Output() private valueEv: EventEmitter<boolean> = new EventEmitter();
  constructor() {}

  public addition(): void {}

  public soustration(): void {}

  myEventEmit(isAdd: boolean) {
    if (isAdd) {
      this.value++;
    } else {
      this.value--;
    }
    this.valueEv.emit(isAdd);
  }

  ngOnInit() {}
}
