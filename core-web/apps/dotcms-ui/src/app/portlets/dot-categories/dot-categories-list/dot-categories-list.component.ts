import { Component, EventEmitter, OnDestroy, Output, ViewChild } from '@angular/core';
import { DotListingDataTableComponent } from '@components/dot-listing-data-table/dot-listing-data-table.component';
import { Observable, Subject } from 'rxjs';
import { DotCategoriesListStore, DotCategoriesListState } from './store/dot-categories-list-store';
import { DotCategory } from '@dotcms/app/shared/models/categories/dot-categories.model';
import { take, takeUntil } from 'rxjs/operators';
import { MenuItem } from 'primeng/api/menuitem';
import { DialogService } from 'primeng/dynamicdialog';
import { DotCategoriesAddNewComponent } from './dot-categories-add-new/dot-categories-add-new.component';
import { DotMessageService } from '@dotcms/app/api/services/dot-message/dot-messages.service';
@Component({
    selector: 'dot-categories-list',
    templateUrl: './dot-categories-list.component.html',
    styleUrls: ['./dot-categories-list.component.scss'],
    providers: [DotCategoriesListStore]
})
export class DotCategoriesListComponent implements OnDestroy {
    vm$: Observable<DotCategoriesListState> = this.store.vm$;
    addCategorySelector$ = this.store.addCategorySelector$;
    private destroy$: Subject<boolean> = new Subject<boolean>();
    @Output() updateCategory: EventEmitter<MenuItem> = new EventEmitter();
    @ViewChild('listing', { static: false })
    listing: DotListingDataTableComponent;

    constructor(
        private dotMessageService: DotMessageService,
        private store: DotCategoriesListStore,
        public dialogService: DialogService
    ) {
        this.addCategorySelector$.pipe(takeUntil(this.destroy$)).subscribe((addCategory) => {
            if (addCategory) {
                this.dialogService
                    .open(DotCategoriesAddNewComponent, {
                        header: this.dotMessageService.get('categories.create.title'),
                        width: '30rem',
                        closable: true,
                        closeOnEscape: false
                    })
                    .onClose.subscribe(() => {
                        this.store.updateAddCategory(false);
                    });
            } else {
                this.store.updateAddCategory(false);
            }
        });
    }

    ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.complete();
    }

    /**
     * The function clears the global search of listing-data-table by calling the clearGlobalSearch() function on the listing
     * object
     */
    clearState() {
        this.listing.clearGlobalSearch();
    }

    /**
     * It set a selected category to the parent component, updates the endpoint for the listing component,
     * and then loads the first page of the listing component
     * @param {DotCategory} category - DotCategory - The category object that is being passed to the
     * function.
     */
    addBreadCrumb(category: DotCategory) {
        const getSubCategoryEndPoint = 'v1/categories/children';
        this.store.updateCategoryEndPoint(getSubCategoryEndPoint);
        this.store.addCategoriesBreadCrumb({ label: category.categoryName, id: category.inode });
        this.updateCategory.emit({ label: category.categoryName, id: category.inode });
        this.listing.paginatorService.url = getSubCategoryEndPoint;
        this.listing.paginatorService.setExtraParams('inode', category.inode);
        this.listing.loadFirstPage();
    }

    /**
     * It updates the breadcrumb, category listing and parent component based on the selected category
     * @param event - The event that triggered the function.
     */
    async updateBreadCrumb(event) {
        const getCategoryEndPoint = 'v1/categories';
        const getSubCategoryEndPoint = 'v1/categories/children';
        const { item } = event;
        let { categoryBreadCrumb } = await this.store.categoryBreadCrumbSelector$
            .pipe(take(1))
            .toPromise();
        categoryBreadCrumb = categoryBreadCrumb.filter(
            ({ tabindex }: MenuItem) => Number(tabindex) <= Number(item.tabindex)
        );
        this.store.updateCategoriesBreadCrumb(categoryBreadCrumb);
        this.updateCategory.emit(item);
        if (item.label === 'Top') {
            this.store.updateCategoryEndPoint(getCategoryEndPoint);
            this.listing.paginatorService.url = getCategoryEndPoint;
            this.listing.paginatorService.deleteExtraParams('inode');
        } else {
            this.listing.paginatorService.url = getSubCategoryEndPoint;
            this.listing.paginatorService.setExtraParams('inode', item.id);
        }

        this.listing.paginatorService.deleteExtraParams('filter');
        this.listing.loadFirstPage();
    }

    /**
     * It takes an array of categories and updates the store with the new array
     * @param {DotCategory[]} categories - DotCategory[] - An array of DotCategory objects.
     */
    updateSelectedCategories(categories: DotCategory[]): void {
        this.store.updateSelectedCategories(categories);
    }
}
