export class AlertDto {
    
    public _occurrence: string
    public _place: string
    public _date: string
    public _hour: string

    constructor(occurrence: string, place: string, date: string, hour: string) {
        this._occurrence = occurrence
        this._place = place
        this._date = date
        this._hour = hour
    }
}