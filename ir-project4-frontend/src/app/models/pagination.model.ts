export class Pagination {
    public totalRecords: number = 0;
    public recordsPerPage: number = 5;
    public pageFirstRecord: number = 0;
    public pageLastRecord: number = 0;
    public currentPage: number = 0;
    public totalPages: number = 0;

    constructor(obj: any = {}) {
        this.totalRecords = obj.totalRecords ?? this.totalRecords;
        this.recordsPerPage = obj.recordsPerPage ?? this.recordsPerPage;
        this.currentPage = obj.currentPage ?? this.currentPage;

        this.updatePagination();
    }

    public nextPage() {
        if (this.currentPage >= this.totalPages) {
            this.firstPage();
        } else {
            this.currentPage += 1;
            this.updatePagination();
        }
    }

    public prevPage() {
        if (this.currentPage <= 1) {
            this.lastPage();
        } else {
            this.currentPage -= 1;
            this.updatePagination();
        }
    }

    public firstPage() {
        if (this.totalRecords === 0) {
            this.currentPage = 0;
        } else {
            this.currentPage = 1;
        }

        this.updatePagination();
    }

    public lastPage() {
        this.currentPage = this.totalPages;
        this.updatePagination();
    }

    public updatePagination() {
        if (this.totalRecords === 0) {
            this.currentPage = 0;
            this.totalPages = 0;
            this.pageFirstRecord = 0;
            this.pageLastRecord = 0;
        } else {
            this.totalPages = Math.ceil(this.totalRecords / this.recordsPerPage);

            if (this.currentPage < 0) {
                this.currentPage = 1;
            }
            if (this.currentPage >= this.totalPages) {
                this.currentPage = this.totalPages;
            }

            this.pageFirstRecord = ((this.currentPage - 1) * this.recordsPerPage) + 1;
            this.pageLastRecord = Math.min(this.pageFirstRecord + this.recordsPerPage - 1, this.totalRecords);
        }
    }
}