import * as http from "http";
import {getfilterEpisodes, getListEpisodes} from "./controllers/podcasts-controller"
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";


export const app =  async (request: http.IncomingMessage, response: http.ServerResponse)=>{
            // querystring
            //http://localhost:3636/api/episode?p=flow
            const baseurl = request.url?.split("?")[0];
          //  console.log(baseurl);
          //  console.log(querystring);



            // listar podcasts

            if(request.method === HttpMethod.GET && baseurl === Routes.LIST){
                await getListEpisodes(request,response);
            }

            if(request.method === HttpMethod.GET && baseurl === Routes.PODCASTS){
                await getfilterEpisodes(request,response);
            }
        };
