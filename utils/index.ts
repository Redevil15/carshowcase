export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': "02d983342fmsh45bcb99091f6f61p18974ajsnea143c2e7fff" ,
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
  const response = await fetch( 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
    headers: headers,
  });

  const result = await response.json();

  return result
}