import { MouseEventHandler } from "react";

export interface CustonButtonProps{
    title:string;
    containerStyles?:string;
    handleClick?:MouseEventHandler<HTMLButtonElement
>
btntype?:"button"|"submit";
textStyles?:string;
rightIcon?:string;
isDisabled?:boolean;


}
export interface SearchManufacturesProps{
    manufacturer: string;
    setManufacturer :(manufacturer: string)=>void;
}
export interface CarProps{
    city_mpg:number;
    class:string;
    combination_mpg:number;
    cylinders:number;
    displacement:
    number;
    drive:string;
    fuel_type:string;
    highway_mpg:number;
    make:string;
    model:string;
    transmission:string;
    year:number;
   

}