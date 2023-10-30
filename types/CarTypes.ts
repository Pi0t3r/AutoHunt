type Engine = {
  value: string;
};
type Version = {
  value: string;
  engine: Engine[];
};
type Generation = {
  value: string;
  versions: Version[];
};
type Model = {
  value: string;
  generations: Generation[];
};
export type Car = {
  value: string;
  models: Model[];
};
interface carDetailsProps {
  brand: string;
  model: string;
  generation: string;
  version: string;
  engine: string;
  mileage: number;
  body: string;
  drive: string;
  firstRegister: string;
  fuel: string;
  gearbox: string;
  price: number;
  yearbook: number;
  vin: string;
  createAdvert: string;
}

export interface carDataProps {
  data: carDetailsProps;
}
