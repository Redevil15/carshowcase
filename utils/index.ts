import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {
  const {manufacturer, year, model, limit, fuel} = filters;

  const headers = {
    'X-RapidAPI-Key': "02d983342fmsh45bcb99091f6f61p18974ajsnea143c2e7fff" ,
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
  const response = await fetch( `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {
    headers: headers,
  });

  const result = await response.json();

  return result
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;

  //Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  //Calculate total rate per day
  const rentalRatePerDay =  basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0)
}

export const generateCarImageUrl = (car: CarProps, angle?:string) => {
  const url = new URL('https://cdn.imagin.studio/getimage');

  const { make, year, model } = car;

  url.searchParams.append('customer', 'hrjavascript-mastery');
  url.searchParams.append('make', make)
  url.searchParams.append('modelFamily', model.split(' ')[0])
  url.searchParams.append('zoomType', 'fullscreen')
  url.searchParams.append('modelYear', `${year}`)
  url.searchParams.append('angle', `${angle}`)

  return `${url}`
}