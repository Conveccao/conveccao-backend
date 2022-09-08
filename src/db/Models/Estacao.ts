export default class Station{
    private _id: number;
    private _lat: number;
    private _lon: number;
    private _reference: string;

    public constructor (id: number, lat: number, lon: number, reference: string){
        this._id = id;
        this._lat = lat;
        this._lon = lon;
        this._reference = reference;
    }

    public getId = (): number => {
        return this._id;
    }

    public getLat = (): number => {
        return this._lat;
    }

    public getLon = (): number => {
        return this._lon;
    }

    public getReference = (): string => {
        return this._reference;
    }
}