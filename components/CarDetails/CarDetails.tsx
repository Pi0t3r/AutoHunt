import { carDataProps, InfoProps } from "@/types";

const Info = ({ title, value }: InfoProps) => {
  return (
    <li className="text-main font-medium p-4 border-2 m-2 rounded-md shadow-lg bg-slate-50">
      {title}: <span className="text-black font-normal">{value}</span>
    </li>
  );
};



const CarDetails = ({ data }: carDataProps) => {
  return (
    <>
      <p className="text-center font-medium italic">
        {data.brand} • {data.model} • {data.generation} • {data.version} •{" "}
        {data.engine}
      </p>
      <ul className="flex flex-row flex-wrap">
        <Info title="Yearbook" value={data.yearbook} />
        <Info title="Mileage" value={`${data.mileage} km`} />
        <Info title="Fuel type" value={data.fuel} />
        <Info title="Gearbox" value={data.gearbox} />
        <Info title="Body type" value={data.body} />
        <Info title="VIN" value={data.vin} />
        <Info title="First register" value={data.firstRegister} />
      </ul>
    </>
  );
};

export default CarDetails;
