import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-exercice2",
  templateUrl: "./exercice2.component.html",
  styleUrls: ["./exercice2.component.css"],
})
export class Exercice2Component implements OnInit {
  public valeur: string;
  @ViewChild("inputRef", { static: true })
  public elInput: ElementRef<HTMLInputElement>;

  constructor() {}

  // public valueInput(): void {
  //   console.log(this.valueInput);
  // }

  public changeText() {
    this.valeur = this.elInput.nativeElement.value;
  }
  ngOnInit() {}
}
