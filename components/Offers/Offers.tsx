/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";
import {
  Box,
  FormControl,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  Select,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Collapse,
  CardActions,
  SelectChangeEvent,
  Typography,
  IconButton,
  styled,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import { useEffect, useState } from "react";
import Filters from "../filters/Filters";
import { ExpandMoreProps } from "@/types/myTypes";

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

// Defining the Offers component
export default function Offers() {
  const [expanded, setExpanded] = useState(false);
  // State variables
  const [advertData, setAdvertData] = useState<any[]>([]); // Store advertisement data
  const [sortOption, setSortOption] = useState<string>("default"); // Store the selected sorting option

  // State variable to store sorted advertisement data
  const [sortedAdvertData, setSortedAdvertData] = useState<any[]>([]);

  // Function to handle sorting option change
  const handleChangeSortOption = (event: SelectChangeEvent) => {
    setSortOption(event.target.value); // Update the sorting option state
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // Effect to sort advertisement data based on the selected sorting option
  useEffect(() => {
    const sortAdvertData = () => {
      const sortedData = [...advertData]; // Create a copy of the advertisement data
      // Sort the data based on the selected sorting option
      if (sortOption === "Low") {
        sortedData.sort((a, b) => a.price - b.price); // Sort by price (Low to high)
      } else if (sortOption === "High") {
        sortedData.sort((a, b) => b.price - a.price); // Sort by price (High to low)
      }
      setSortedAdvertData(sortedData); // Update the sorted advertisement data state
    };

    sortAdvertData();
  }, [advertData, sortOption]);
  // Function to render advertisement data
  const showAdvert = () => {
    if (advertData.length === 0) {
      return (
        <Typography variant="body1">No ads in selected filters</Typography>
      ); // Display loading message if there's no advertisement data
    } else {
      return (
        <List
          sx={{
            listStyle: "none",
            // padding: "10px 5px",
            display: "flex",
            flexFlow: "row wrap",
          }}
        >
          {sortedAdvertData.map((post) => (
            <ListItem key={post.id} style={{ display: "block" }}>
              <Link
                href={`/advert/${post.id}`}
                key={post.id}
                style={{
                  display: "flex",
                  flexFlow: "row wrap",
                  textDecoration: "none",
                  width: "100%",
                  border: "1px solid black",
                }}
              >
                <Card sx={{ maxWidth: 400 }}>
                  <CardHeader
                    title={`${post.brand} ${post.model}`}
                    subheader={`${post.price} PLN`}
                  />
                  {post.images && post.images.length > 0 && (
                    <CardMedia
                      component="img"
                      height="250"
                      width="100%"
                      alt="Title image car"
                      image={post.images[0]}
                    />
                  )}
                  <CardContent>
                    <Typography variant="body1">{post.mileage} km</Typography>
                    <Typography variant="body1">{post.yearbook}</Typography>
                    <Typography variant="body1">{post.fuel}</Typography>
                    <Typography variant="body1">{post.mileage}</Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <ExpandMore
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                  </CardActions>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography>Siema</Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </Link>
            </ListItem>
          ))}
        </List>
      );
    }
  };
  // Calculate the length of the filtered and sorted advertisement data
  const filteredLength = sortedAdvertData.length;
  // Render the Offers component
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "white",
        textAlign: "center",
        color: "black",
      }}
    >
      <Typography fontSize={20} variant="h2">
        What you're looking for?
      </Typography>
      <Box>
        <Filters
          filteredLength={filteredLength}
          setAdvertData={setAdvertData}
        />
      </Box>
      <Box>
        <FormControl
          sx={{
            m: 1,
            minWidth: 100,
          }}
        >
          <InputLabel id="sort">Sort</InputLabel>
          <Select
            labelId="sort"
            autoWidth
            label="sort"
            value={sortOption}
            onChange={handleChangeSortOption}
          >
            <MenuItem value={"default"}></MenuItem>
            <MenuItem value={"Low"}>By price (Low to high)</MenuItem>
            <MenuItem value={"High"}>By price (High to low)</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box
        sx={{
          marginTop: 10,
          backgroundColor: "#c6c6c6b3",
          width: "100%",
        }}
      >
        {showAdvert()}
      </Box>
    </Box>
  );
}
