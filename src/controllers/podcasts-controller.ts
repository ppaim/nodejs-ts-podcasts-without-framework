import {IncomingMessage,ServerResponse} from "http";
import {serviceListEpisodies} from "../services/list-episodios-service"
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { ContentType } from "../utils/content-type";
import { PodCastTransferModel } from "../models/podcast-transfer-model";

export const getListEpisodes = async (
    req: IncomingMessage,
    res: ServerResponse 
)=>{

    const content: PodCastTransferModel = await serviceListEpisodies();
        
    res.writeHead(content.statusCode,{"Content-Type":ContentType.JSON});
    res.end(JSON.stringify(content.body))
}; 

//   "cover": "https://i.ytimg.com/vi/g-1ZLqvRvrg/maxresdefault.jpg",
//           "link": "https://www.youtube.com/watch?v=g-1ZLqvRvrg",


export const getfilterEpisodes = async(
     req: IncomingMessage,
     res: ServerResponse 

) => {

    const querystring = req.url?.split("?p=")[1] || "";  // pega somente a parte final, se nao vir nada coloca vazio

    const content:PodCastTransferModel = await serviceFilterEpisodes(req.url); // ;;req.url
    
    res.writeHead(content.statusCode, {"Content-Type":ContentType.JSON});
    res.write(JSON.stringify(content.body));
    
    res.end();

};