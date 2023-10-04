import { carDataProps } from "@/types/myTypes";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface InfoProps {
  image: React.ReactNode;
  title: string | number;
}

const Info = ({ image, title }: InfoProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {image}
      <Typography>{title}</Typography>
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
      <Box sx={{ display: "flex", flexFlow: "row wrap", gap: 5 }}>
        <Info title={data.fuel} image={<LocalGasStationIcon />} />
        <Info title={data.gearbox} image={<LocalGasStationIcon />} />
        <Info title={data.drive} image={<LocalGasStationIcon />} />
        <Info title={data.mileage} image={<LocalGasStationIcon />} />
        <Info title={data.firstRegister} image={<LocalGasStationIcon />} />
        <Info title={data.vin} image={<LocalGasStationIcon />} />
        <Info title={data.firstRegister} image={<LocalGasStationIcon />} />
        <Info title={data.yearbook} image={<LocalGasStationIcon />} />
      </Box>
    </Box>
    // <div className={styles.infoCar}>
    //   <p className={styles.title}>Details</p>
    //   <dl>
    //     <p>Price {data.price}</p>
    //     <dt>Vehicle Body</dt>
    //     <dd>{data.body}</dd>
    //
    //     <dt>Yearbook</dt>
    //     <dd>{data.yearbook}</dd>
    //
    //   </dl>
    //   <p>created: {data.createAdvert}</p>
    // </div>
  );
};

export default CarDetails;
