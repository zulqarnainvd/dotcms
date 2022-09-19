import { NgModule } from '@angular/core';
import { DotContainerPermissionsComponent } from '@portlets/dot-containers/container-create/dot-container-permissions/dot-container-properties.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DotPortletBaseModule } from '@components/dot-portlet-base/dot-portlet-base.module';
import { InplaceModule } from 'primeng/inplace';
import { SharedModule } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { TreeSelectModule } from 'primeng/treeselect';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
    declarations: [DotContainerPermissionsComponent],
    exports: [DotContainerPermissionsComponent],
    imports: [
        CommonModule,
        FormsModule,
        DotPortletBaseModule,
        InplaceModule,
        SharedModule,
        AccordionModule,
        CheckboxModule,
        TableModule,
        CardModule,
        TreeSelectModule,
        DropdownModule,
        ButtonModule,
        InputTextModule
    ]
})
export class DotContainerPermissionsModule {}
