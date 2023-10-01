import { CarProps } from "@/types";
import { FilterProps } from "@/types";
import axios from "axios";

export async function fetchCars(filters: { year: string; fuel_type: string; limit: string; model: any; make: string }) {
  const { make, year, model, limit, fuel_type } = filters;
  const apiKey = '1126204450mshd83ba7fa13b491dp1ebe3djsnae766e33565f';
  const rapidApiHost = 'cars-by-api-ninjas.p.rapidapi.com';

  try {
    const response = await axios.get(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars`, {
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': rapidApiHost,
      },
      params: {
        make,
        year,
        model,
        limit,
        fuel_type,


      },
    });

    const result = response.data;
    // console.log(result);
    return result;
  } catch (error) {
    console.error('Error fetching cars:', error);
    throw error;
  }
}export const generateCarImageUrl =(car:CarProps ,angle?:string)=>{
  const url=new URL('https://cdn.imagin.studio/getimage'); 
  const {make , year, model}=car
  url.searchParams.append('customer','hrjavascript-mastery');
  url.searchParams.append('make',make);
  url.searchParams.append('modelFamily',model.split(' ')[0]);
  url.searchParams.append('zoomType','fullscreen');
  url.searchParams.append('modelYear',`${year}`);
  url.searchParams.append('angle',`${angle}`);
  return `${url}`;
   

}
export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const updateSearchParams = (type: string, value: string) => {
  // Get the current URL search params
  const searchParams = new URLSearchParams(window.location.search);

  // Set the specified search parameter to the given value
  searchParams.set(type, value);

  // Set the specified search parameter to the given value
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

export const deleteSearchParams = (type: string) => {
  // Set the specified search parameter to the given value
  const newSearchParams = new URLSearchParams(window.location.search);

  // Delete the specified search parameter
  newSearchParams.delete(type.toLocaleLowerCase());

  // Construct the updated URL pathname with the deleted search parameter
  const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;

  return newPathname;
};


    
