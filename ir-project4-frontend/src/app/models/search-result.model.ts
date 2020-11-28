export class SearchResult {
    public handle: string = '{Handle}';
    public username: string = '{Username}';
    public language: string = '{Language}';
    public content: string = '{Content}';
    public verified: boolean = false;

    constructor(obj: any = {}) {
        this.handle = obj.handle ?? this.handle;
        this.username = obj.username ?? this.username;
        this.language = obj.language ?? this.language;
        this.content = obj.content ?? this.content;
        this.verified = obj.verified ?? this.verified;
    }
}