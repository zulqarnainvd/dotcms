import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
    selector: 'dot-categories-add-new',
    templateUrl: './dot-categories-add-new.component.html',
    styleUrls: ['./dot-categories-add-new.component.scss']
})
export class DotCategoriesAddNewComponent {
    constructor(private ref: DynamicDialogRef) {}
    categoryForm = new FormGroup({
        categoryName: new FormControl('', Validators.required),
        key: new FormControl(''),
        keywords: new FormControl('')
    });

    onSave(): void {
        this.ref.close(this.categoryForm.value);
    }

    onCancel() {
        this.ref.close();
    }
}
