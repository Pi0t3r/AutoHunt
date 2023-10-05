import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
export default function Footer() {
  return (
    <Box
      sx={{
        display: "block",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "space-around",
          padding: 5,
        }}
      >
        <FacebookIcon
          sx={{
            width: 34,
            height: 34,
          }}
        />
        <InstagramIcon
          sx={{
            width: 34,
            height: 34,
          }}
        />
        <TwitterIcon
          sx={{
            width: 34,
            height: 34,
          }}
        />
        <YouTubeIcon
          sx={{
            width: 34,
            height: 34,
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "center",
        }}
      >
        <Typography variant="body2">Privacy Policy |</Typography>
        <Typography variant="body2"> Terms & Conditions |</Typography>
        <Typography variant="body2"> Feedback</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexFlow: "column nowrap",
          alignItems: "center",
          marginTop:2,
          paddingBottom:4,
        }}
      >
        <Typography variant="body1">Customer service:</Typography>
        <Typography variant="body2">+48 123 321 231</Typography>
        <Typography variant="body2">help@autohunt.com</Typography>
        <Typography variant="body2">Mon - Fri, 08:00 - 17:00</Typography>
      </Box>
    </Box>
  );
}
