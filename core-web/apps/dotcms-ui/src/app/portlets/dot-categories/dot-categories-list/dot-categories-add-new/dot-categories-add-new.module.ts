import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DotCategoriesAddNewComponent } from './dot-categories-add-new.component';
import { DotMessagePipeModule } from '@pipes/dot-message/dot-message-pipe.module';
import { DotPortletBaseModule } from '@components/dot-portlet-base/dot-portlet-base.module';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@NgModule({
    declarations: [DotCategoriesAddNewComponent],
    exports: [DotCategoriesAddNewComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DotMessagePipeModule,
        DotPortletBaseModule,
        InputTextareaModule,
        InputTextModule,
        ButtonModule
    ]
})
export class DotCategoriesAddNewModule {}
