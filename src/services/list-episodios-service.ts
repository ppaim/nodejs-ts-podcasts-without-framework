import { devNull } from "os";
import {repositoryPodecast } from "../repositories/podcasts-repository"
import { PodCastTransferModel } from "../models/podcast-transfer-model";
import { StatusCode } from "../utils/status-code";


export const serviceListEpisodies = async () =>{


    //define a interface de retorno
    let responseFormat: PodCastTransferModel = {
        statusCode:0,
        body:[],
    } 

    const data = await repositoryPodecast();

    
    responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT;
    
    responseFormat.body = data;
        
    return responseFormat;
}