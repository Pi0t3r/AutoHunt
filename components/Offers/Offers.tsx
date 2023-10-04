/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  FormControl,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import Filters from "../filters/Filters";

// Defining the Offers component
export default function Offers() {
  // State variables
  const [advertData, setAdvertData] = useState<any[]>([]); // Store advertisement data
  const [sortOption, setSortOption] = useState<string>("default"); // Store the selected sorting option

  // State variable to store sorted advertisement data
  const [sortedAdvertData, setSortedAdvertData] = useState<any[]>([]);

  // Function to handle sorting option change
  const handleChangeSortOption = (event: SelectChangeEvent) => {
    setSortOption(event.target.value); // Update the sorting option state
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
            display: "flex",
            flexFlow: "row wrap",
          }}
        >
          {sortedAdvertData.map((post) => (
            <ListItem key={post.id} style={{ display: "block" }}>
              <Card sx={{ maxWidth: 400 }}>
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
                  <Typography gutterBottom variant="h5" component="div">
                    {post.brand} {post.model}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexFlow: "row wrap",
                      justifyContent: "space-between",
                    }}
                  >
                    {post.generation} • {post.yearbook} • {post.mileage} km •{" "}
                    {post.fuel}
                    <Typography
                      variant="body1"
                      sx={{ color: "primary.main", display: "inherit" }}
                    >
                      {post.price}{" "}
                      <Typography
                        variant="body1"
                        sx={{
                          marginLeft: 0.5,
                          color: "black",
                        }}
                      >
                        PLN
                      </Typography>
                    </Typography>
                  </Box>
                </CardContent>
                <CardActions>
                  <Button size="small" variant="contained" color="primary">
                    <Link
                      href={`/advert/${post.id}`}
                      key={post.id}
                      style={{
                        textDecoration: "none",
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      Show more
                    </Link>
                  </Button>
                </CardActions>
              </Card>
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
