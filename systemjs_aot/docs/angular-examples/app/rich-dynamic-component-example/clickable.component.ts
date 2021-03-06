import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
    selector: 'ag-clickable',
    template: `
        <button style="height: 21px" (click)="click()">Click Me</button>
    `
})
export class ClickableComponent {
    @Input() cell: any;
    @Output() onClicked = new EventEmitter<boolean>();

    click(): void {
        this.onClicked.emit(this.cell);
    }
}
