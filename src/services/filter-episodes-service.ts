//import { IncomingMessage } from "http";
import { repositoryPodecast } from "../repositories/podcasts-repository";
import { PodCastTransferModel } from "../models/podcast-transfer-model";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes= async (
    podcastName : String | undefined): Promise<PodCastTransferModel> =>{

    //define a interface de retorno
    let responseFormat: PodCastTransferModel = {
        statusCode:0,
        body:[],
    } 

    // buscando os dados
    const querystring = podcastName?.split("?p=")[1] || "";
    const data = await repositoryPodecast(querystring);
    



    //Verifica se tem conteudo
/*     if (  data.length !== 0 ) {
        responseFormat.statusCode = StatusCode.OK;

    }else{
        responseFormat.statusCode = StatusCode.NO_CONTENT;
    } */
    
    responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT;

    responseFormat.body = data;
    
    return responseFormat;

};