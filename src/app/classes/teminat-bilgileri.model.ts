export class TeminatBilgi {

    private _turu: string='';
    public get Turu(): string {
        return this._turu;
    }
    public set Turu(value: string) {
        this._turu = value;
    }

    private _kalite: string='';
    public get Kalite(): string {
        return this._kalite;
    }
    public set Kalite(value: string) {
        this._kalite = value;
    }

    private _onayNo: string='';
    public get OnayNo(): string {
        return this._onayNo;
    }
    public set OnayNo(value: string) {
        this._onayNo = value;
    }

    private _tarih: string='';
    public get Tarih(): string {
        return this._tarih;
    }
    public set Tarih(value: string) {
        this._tarih = value;
    }

}
