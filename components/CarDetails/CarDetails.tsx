import { carDataProps, InfoProps } from "@/types/myTypes";

const Info = ({ title, value }: InfoProps) => {
  return (
    <div className="inline-flex">
      <span className="mr-1 text-{primary.main} font-bold">{title}:</span>
      <span>{value}</span>
    </div>
  );
};

const CarDetails = ({ data }: carDataProps) => {
  return (
    <div className="p-1 text-center">
      <p>
        {data.brand} • {data.model} • {data.generation} • {data.version}
      </p>
      <span>{data.engine}</span>
      <div className="flex flex-wrap flex-column">
        <Info title="Yearbook" value={data.yearbook} />
        <Info title="Mileage" value={`${data.mileage} km`} />
        <Info title="Fuel type" value={data.fuel} />
        <Info title="Gearbox" value={data.gearbox} />
        <Info title="Body type" value={data.body} />
        <Info title="VIN" value={data.vin} />
        <Info title="First register" value={data.firstRegister} />
      </div>
    </div>
  );
};

export default CarDetails;
