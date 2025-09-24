import fs from "fs";
import path from "path";
import {PodCastModel} from "../models/podcast-models"



const pathData = path.join(__dirname,"../repositories/podcasts.json");

export const repositoryPodecast = async (
        podcastName?:String                 // "? Interrogação indica que é opcional pode vir ou não o parametro
    ): Promise<PodCastModel[]> => {
    const rawData = fs.readFileSync(pathData,"utf-8");
    let jsonFile = JSON.parse(rawData);

     if(podcastName){
       jsonFile = jsonFile.filter((podcast: PodCastModel) => podcast.podcastName === podcastName);
     }

    return jsonFile;


}