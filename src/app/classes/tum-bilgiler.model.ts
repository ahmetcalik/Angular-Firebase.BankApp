import { TeminatBilgi } from "./teminat-bilgileri.model";
import { MusteriBilgi } from "./musteri-bilgileri.model";


export class tumBilgi {

    private _tAdi: any='';
    public get tAdi(): any {
        return this._tAdi;
    }
    public set tAdi(value: any) {
        this._tAdi = value;
    }

    private _tsoyadi: any='';
    public get tSoyadi(): any {
        return this._tsoyadi;
    }
    public set tSoyadi(value: any) {
        this._tsoyadi = value;
    }

    private _ttc: any='';
    public get tTc(): any {
        return this._ttc;
    }
    public set tTc(value: any) {
        this._ttc = value;
    }

    private _tno: any='';
    public get tNo(): any {
        return this._tno;
    }
    public set tNo(value: any) {
        this._tno = value;
    }

    private _tTuru: any='';
    public get tTuru(): any {
        return this._tTuru;
    }
    public set tTuru(value: any) {
        this._tTuru = value;
    }

    private _tkalite: any='';
    public get tKalite(): any {
        return this._tkalite;
    }
    public set tKalite(value: any) {
        this._tkalite = value;
    }

    private _tonayNo: any='';
    public get tOnayNo(): any {
        return this._tonayNo;
    }
    public set tOnayNo(value: any) {
        this._tonayNo = value;
    }

    private _ttarih: any='';
    public get tTarih(): any {
        return this._ttarih;
    }
    public set tTarih(value: any) {
        this._ttarih = value;
    }

    private _teminatBilgi: Array<TeminatBilgi> =new Array<TeminatBilgi>;
    public get TeminatBilgi():Array<TeminatBilgi> {
        return this._teminatBilgi;
    }
    public set TeminatBilgi(value: Array<TeminatBilgi> ) {
        this._teminatBilgi = value;
    }

    private _tumBilgi: Array<MusteriBilgi> =new Array<MusteriBilgi>;
    public get TumBilgi():Array<MusteriBilgi> {
        return this._tumBilgi;
    }
    public set TumBilgi(value: Array<MusteriBilgi> ) {
        this._tumBilgi = value;
    }
}
