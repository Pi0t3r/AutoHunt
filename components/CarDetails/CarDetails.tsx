import { carDataProps, InfoProps } from "@/types/myTypes";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Info = ({ title, value }: InfoProps) => {
  return (
    <Box
      sx={{
        display: "inline-flex",
      }}
    >
      <Typography
        variant="body2"
        sx={{ marginRight: 1, color: "primary.main", fontWeight: "bold" }}
      >
        {title}:
      </Typography>
      <Typography variant="body2">{value}</Typography>
    </Box>
  );
};

const CarDetails = ({ data }: carDataProps) => {
  return (
    <Box
      sx={{
        padding: 1,
        textAlign: "center",
      }}
    >
      <Typography variant="body1">
        {data.brand} • {data.model} • {data.generation} • {data.version}
      </Typography>
      <Typography variant="body2">{data.engine}</Typography>
      <Box
        sx={{
          display: "flex",
          flexFlow: "column wrap",
        }}
      >
        <Info title="Yearbook" value={data.yearbook} />
        <Info title="Mileage" value={`${data.mileage} km`} />
        <Info title="Fuel type" value={data.fuel} />
        <Info title="Gearbox" value={data.gearbox} />
        <Info title="Body type" value={data.body} />
        <Info title="VIN" value={data.vin} />
        <Info title="First register" value={data.firstRegister} />
      </Box>
    </Box>
  );
};

export default CarDetails;
