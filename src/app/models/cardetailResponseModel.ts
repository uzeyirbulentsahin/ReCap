
import { CarImage } from "./carimage";
import { ResponseModel } from "./responseModel";

export interface CarDetailResponseModel extends ResponseModel{
    data:CarImage[]  
}