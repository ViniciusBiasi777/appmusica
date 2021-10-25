export class Contato {

    private _id : number
    private _nomemusica :string;
    private _nomeartista :string;
    private _ano :number;
    private _numeromusicas :number;
    private _gravadora :string;
    private _genero :string;
    private _tema :string;

    constructor(private nomemusica :string, private nomeartista : string, private ano :number, private numeromusicas :number, private gravadora :string, private genero :string, private tema :string){
        let chave = new Date;
        this._id = chave.getTime()
        this._nomemusica = nomemusica
        this._nomeartista = nomeartista
        this._ano = ano
        this._numeromusicas = numeromusicas
        this._gravadora = gravadora
        this._genero = genero
        this._tema = tema
    }

    public getId() : number{
        return this._id
    }

    public getNomemusica() : string {
        return  this._nomemusica
    }

    public getNomeartista() : string {
        return this._nomeartista
    }

    public getAno() : number {
        return this._ano
    }

    public getNumeromusicas() : number {
        return this._numeromusicas
    }

    public getGravadora() : string {
        return this._gravadora
    }

    public getGenero() : string {
        return this._genero
    }

    public getTema() : string {
        return this._tema
    }

    public setNomemusica(nomemusica: string) : void {
        this._nomemusica = nomemusica
    }

    public setNomeartista(nomeartista: string) : void {
        this._nomeartista = nomeartista
    }

    public setAno(ano: number) : void {
        this._ano = ano
    }

    public setNumeromusicas(numeromusicas: number) : void {
        this._numeromusicas = numeromusicas
    }

    public setGravadora(gravadora: string) : void {
        this._gravadora = gravadora
    }

    public setGenero(genero: string) : void {
        this._genero = genero
    }

    public setTema(tema: string) : void {
        this._tema = tema
    }
}

