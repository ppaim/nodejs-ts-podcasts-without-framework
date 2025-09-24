import { PodCastModel } from "./podcast-models";

export interface PodCastTransferModel{
    statusCode: number,
    body: PodCastModel[]


}