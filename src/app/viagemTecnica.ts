export class ViagemTecnica{
    empresa: string;
    cidade: string; 
    roteiro:String 
    data: string;
    saida:String;
    retorno:String;
    professor: string;
    componente: String;
    conteudo:string;
    cargaHoraria: number;
    turma:string;
    quantidadeAlunos:number;
    hospedagem:String;
    endereco:String;
    outrosServidores:String;
    justificativa:String;
    objetivo:String;
    metodologia:String;
    formasDeAvaliacaoDaAprendizagem:String;
    id:number;
    idUsuario:number;
    


    constructor(empresa,cidade,roteiro,data,saida,retorno,professor,componente,conteudo,cargaHoraria,turma,
        quantidadeAlunos,endereco,outrosServidores,justificativa,objetivo,
        metodologia,formasDeAvaliacaoDaAprendizagem,id,idUsuario){
        this.empresa = empresa;
        this.cidade = cidade;
        this.roteiro= roteiro;
        this.data=data;
        this.saida=saida;
        this.retorno=retorno;
        this.professor=professor;
        this.componente=componente;
        this.conteudo=conteudo;
        this.cargaHoraria=cargaHoraria;
        this.turma= turma;
        this.quantidadeAlunos=quantidadeAlunos;
        this.endereco=endereco;
        this.outrosServidores=outrosServidores;
        this.justificativa=justificativa;
        this.objetivo=objetivo;
        this.metodologia=metodologia;
        this.formasDeAvaliacaoDaAprendizagem=formasDeAvaliacaoDaAprendizagem;
        this.id= id;
        this.idUsuario=idUsuario;
    }   
        
        
}