export const body = [
  { value: "suv", label: "Suv" },
  { value: "coupe", label: "Coupe" },
  { value: "avant", label: "Avant" },
  { value: "sedan", label: "Sedan" },
  { value: "compact", label: "Compact" },
];
export const fuelOptions = [
  { value: "diesel", label: "Diesel" },
  { value: "gasoline", label: "Gasoline" },
  { value: "electric", label: "Electric" },
  { value: "hybrid", label: "Hybrid" },
  { value: "lpg", label: "LPG" },
];

export const options = [
  {
    value: "audi",
    label: "Audi",
    models: [
      {
        value: "a1",
        label: "A1",
        generations: [
          {
            value: "I",
            label: "I (2010-2018)",
            versions: [
              {
                value: "hatchback-3d",
                label: "Hatchback 3d (2010-2015)",
                engine: [
                  {
                    value: "1.2tfsi-86km-63kw",
                    label: "1.2TFSI 86KM 63kW",
                  },
                  {
                    value: "1.4tfsi-122km-90kw",
                    label: "1.4TFSI 122KM 90kW",
                  },
                  {
                    value: "1.4tfsi-185km-136kw",
                    label: "1.4TFSI 185KM 136kW",
                  },
                  {
                    value: "1.4tfsi-119g-122km-90kw",
                    label: "1.4TFSI 119g 122KM 90kW",
                  },
                  {
                    value: "1.4tfsi-cod-140km-103kw",
                    label: "1.4TFSI CoD 140KM 103kW",
                  },
                  {
                    value: "1.6tdi-105km-77kw",
                    label: "1.6TDI 105KM 77kW",
                  },
                  {
                    value: "1.6tdi-90km-66kw",
                    label: "1.6TDI 90KM 66kW",
                  },
                  {
                    value: "2.0tdi-143km-105kw",
                    label: "2.0TDI 143KM 105kW",
                  },
                ],
              },
              {
                value: "sportback-5d",
                label: "Sportback 5d (2011-2015)",
                engine: [
                  {
                    value: "1.2tfsi-86km-63kw",
                    label: "1.2TFSI 86KM 63kW",
                  },
                  {
                    value: "1.4tfsi-122km-90kw",
                    label: "1.4TFSI 122KM 90kW",
                  },
                  {
                    value: "1.4tfsi-185km-136kw",
                    label: "1.4TFSI 185KM 136kW",
                  },
                  {
                    value: "1.4tfsi-cod-140km-103kw",
                    label: "1.4TFSI CoD 140KM 103kW",
                  },
                  {
                    value: "1.6tdi-105km-77kw",
                    label: "1.6TDI 105KM 77kW",
                  },
                  {
                    value: "1.6tdi-90km-66kw",
                    label: "1.6TDI 90KM 66kW",
                  },
                  {
                    value: "2.0tdi-143km-105kw",
                    label: "2.0TDI 143KM 105kW",
                  },
                ],
              },
              {
                label: "S1 Sportback (2014-2018)",
                value: "s1-sportback",
                engine: [
                  {
                    value: "2.0tfsi-231km-170kw",
                    label: "2.0TFSI 231KM 170kW",
                  },
                ],
              },
              {
                value: "s1-hatchback-3d",
                label: "S1 Hatchback 3d",
                engine: [
                  {
                    value: "2.0tfsi-231km-170kw",
                    label: "2.0TFSI 231KM 170kW",
                  },
                ],
              },
              {
                value: "sportback-5d-facelift",
                label: "Sportback 5d Facelifting (2015-2018)",
                engine: [
                  {
                    value: "1.0tfsi-ultra-95km-70kw",
                    label: "1.0TFSI ultra 95KM 70kW",
                  },
                  {
                    value: "1.4tfsi-125km-92kw",
                    label: "1.4TFSI 125KM 92kW",
                  },
                  {
                    value: "1.4tfsi-cod-150km-110kw",
                    label: "1.4TFSI CoD 150KM 110kW",
                  },
                  {
                    value: "1.8tfsi-192km-141kw",
                    label: "1.8TFSI 192KM 141kW",
                  },
                  {
                    value: "1.4tdi-ultra-90km-66kw",
                    label: "1.4TDI ultra 90KM 66kW",
                  },
                  {
                    value: "1.6tdi-116km-85kw",
                    label: "1.6TDI 116KM 85kW",
                  },
                ],
              },
              {
                value: "hatchback-3d-facelift",
                label: "Hatchback 3d Facelifting",
                engine: [
                  {
                    value: "1.4tfsi-125km-92kw",
                    label: "1.4TFSI 125KM 92kW",
                  },
                  {
                    value: "1.4tfsi-cod-150km-110kw",
                    label: "1.4TFSI CoD 150KM 110kW",
                  },
                  {
                    value: "1.8tfsi-192km-141kw",
                    label: "1.8TFSI 192KM 141kW",
                  },
                  {
                    value: "1.4tdi-ultra-90km-66kw",
                    label: "1.4TDI ultra 90KM 66kW",
                  },
                  {
                    value: "1.6tdi-116km-85kw",
                    label: "1.6TDI 116KM 85kW",
                  },
                ],
              },
            ],
          },
          {
            value: "II",
            label: "II (2018-present)",
            versions: [
              {
                value: "I",
                label: "I (2018-present)",
                engine: [
                  {
                    value: "1.0-25-tfsi-95km-70kw",
                    label: "1.0 25 TFSI 95KM 70kW",
                  },
                  {
                    value: "1.0-30-tfsi-116km-85kw",
                    label: "1.0 30 TFSI 116KM 85kW",
                  },
                  {
                    value: "1.0tfsi-110km-81kw",
                    label: "1.0TFSI 110KM 81kW",
                  },
                  {
                    value: "1.5-35-tfsi-150km-110kw",
                    label: "1.0 35 TFSI 150KM 110kW",
                  },
                  {
                    value: "2.0-40-tfsi-200km-147kw",
                    label: "2.0 40 TFSI 200KM 147kW",
                  },
                  {
                    value: "2.0-40-tfsi-207km-152kw",
                    label: "2.0 40 TFSI 207KM 152kW",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        value: "a2",
        label: "A2",
        generations: [
          {
            value: "I",
            label: "I (1999-2005)",
            versions: [
              {
                value: "I",
                label: "II",
                engine: [
                  {
                    value: "1.4-16v-75km-55kw",
                    label: "1.4 16V 75KM 55kW",
                  },
                  {
                    value: "1.6tfsi-110km-81kw",
                    label: "1.6TFSI 110KM 81kW",
                  },
                  {
                    value: "1.2tdi-3l-61km-45kw",
                    label: "1.2TDI 3L 61KM 45kW",
                  },
                  {
                    value: "1.4tdi-75km-55kw",
                    label: "1.4TDI 75KM 55kW",
                  },
                  {
                    value: "1.4tdi-90km-66kw",
                    label: "1.4TDI 90KM 66kW",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        value: "a3",
        label: "A3",
        generations: [
          {
            value: "8l",
            label: "8L (1996-2003)",
            versions: [
              {
                value: "hatchback",
                label: "Hatchback (1996-2003)",
                engine: [
                  {
                    value: "1.6-i-102km-75kw",
                    label: "1.6 i 102KM 75kW",
                  },
                  {
                    value: "1.6-i-101km-74kw",
                    label: "1.6 i 101KM 74kW",
                  },
                  {
                    value: "1.8-20v-125km-92kw",
                    label: "1.8 20V 125KM 92kW",
                  },
                  {
                    value: "1.8-t-150km-110kw",
                    label: "1.8 T 150KM 110kW",
                  },
                  {
                    value: "1.8-t-180km-132kw",
                    label: "1.8 T 180KM 132kW",
                  },
                  {
                    value: "1.9-tdi-110km-81kw",
                    label: "1.9TDI 110KM 81kW",
                  },
                  {
                    value: "1.9-tdi-90km-66kw",
                    label: "1.9TDI 90KM 66kW",
                  },
                  {
                    value: "1.9-tdi-pd-100km-74kw",
                    label: "1.9TDI PD 100KM 74kW",
                  },
                  {
                    value: "1.9-tdi-pd-130km-96kw",
                    label: "1.9TDI PD 130KM 96kW",
                  },
                  {
                    value: "1.9-tdi-quattro-130km-96kw",
                    label: "1.9TDI quattro 130KM 96kW",
                  },
                ],
              },
              {
                value: "s3-hatchback",
                label: "S3 Hatchback (1999-2003)",
                engine: [
                  {
                    value: "1.8-t-210km-154kw",
                    label: "1.8 T 210KM 154kW",
                  },
                  {
                    value: "1.8-t-225km-165kw",
                    label: "1.8 T 225KM 165kW",
                  },
                ],
              },
            ],
          },
          {
            value: "8p",
            label: "8P (2003-2013)",
            versions: [
              {
                value: "hatchback-3d",
                label: "Hatchback 3d (2003-2012)",
                engine: [
                  {
                    value: "1.2tfsi-105km-77kw",
                    label: "1.2 TFSI 105KM 77kW",
                  },
                  {
                    value: "1.4tfsi-125km-92kw",
                    label: "1.4 TFSI 125KM 92kW",
                  },
                  {
                    value: "1.6-102km-75kw",
                    label: "1.6 102KM 75kW",
                  },
                  {
                    value: "1.6fsi-115km-85kw",
                    label: "1.6 FSI 115KM 85kW",
                  },
                  {
                    value: "1.8tfsi-160km-118kw",
                    label: "1.8 TFSI 160KM 118kW",
                  },
                  {
                    value: "2.0fsi-150km-110kw",
                    label: "2.0 FSI 150KM 110kW",
                  },
                  {
                    value: "2.0tfsi-200km-147kw",
                    label: "2.0 TFSI 200KM 147kW",
                  },
                  {
                    value: "3.2-vr6-250km-184kw",
                    label: "3.2 VR6 250KM 184kW",
                  },
                  {
                    value: "1.6-tdi-90km-66kw",
                    label: "1.6TDI 90KM 66kW",
                  },
                  {
                    value: "1.6-tdi-105km-77kw",
                    label: "1.6TDI 105KM 77kW",
                  },
                  {
                    value: "1.6-tdi-99g-105km-77kw",
                    label: "1.6TDI 99g 105KM 77kW",
                  },
                  {
                    value: "1.9-tdi-105km-77kw",
                    label: "1.9TDI 105KM 77kW",
                  },
                  {
                    value: "1.9-tdi-e-105km-77kw",
                    label: "1.9TDI e 105KM 77kW",
                  },
                  {
                    value: "2.0-tdi-cr-140km-103kw",
                    label: "2.0TDI CR 140KM 103kW",
                  },
                  {
                    value: "2.0-tdi-cr-170km-125kw",
                    label: "2.0TDI CR 170KM 125kW",
                  },
                  {
                    value: "2.0-tdi-pd-140km-103kw",
                    label: "2.0TDI PD 140KM 103kW",
                  },
                  {
                    value: "2.0-tdi-pd-170km-125kw",
                    label: "2.0TDI PD 170KM 125kW",
                  },
                ],
              },
              {
                value: "sportback",
                label: "Sportback (2004-2013)",
                engine: [
                  {
                    value: "1.2tfsi-105km-77kw",
                    label: "1.2 TFSI 105KM 77kW",
                  },
                  {
                    value: "1.4tfsi-125km-92kw",
                    label: "1.4 TFSI 125KM 92kW",
                  },
                  {
                    value: "1.6-102km-75kw",
                    label: "1.6 102KM 75kW",
                  },
                  {
                    value: "1.6fsi-115km-85kw",
                    label: "1.6 FSI 115KM 85kW",
                  },
                  {
                    value: "1.8tfsi-160km-118kw",
                    label: "1.8 TFSI 160KM 118kW",
                  },
                  {
                    value: "2.0fsi-150km-110kw",
                    label: "2.0 FSI 150KM 110kW",
                  },
                  {
                    value: "2.0tfsi-200km-147kw",
                    label: "2.0 TFSI 200KM 147kW",
                  },
                  {
                    value: "3.2-vr6-250km-184kw",
                    label: "3.2 VR6 250KM 184kW",
                  },
                  {
                    value: "1.6-tdi-90km-66kw",
                    label: "1.6TDI 90KM 66kW",
                  },
                  {
                    value: "1.6-tdi-105km-77kw",
                    label: "1.6TDI 105KM 77kW",
                  },
                  {
                    value: "1.6-tdi-102g-105km-77kw",
                    label: "1.6TDI 102g 105KM 77kW",
                  },
                  {
                    value: "1.9-tdi-105km-77kw",
                    label: "1.9TDI 105KM 77kW",
                  },
                  {
                    value: "1.9-tdi-e-105km-77kw",
                    label: "1.9TDI e 105KM 77kW",
                  },
                  {
                    value: "2.0-tdi-cr-140km-103kw",
                    label: "2.0TDI CR 140KM 103kW",
                  },
                  {
                    value: "2.0-tdi-cr-170km-125kw",
                    label: "2.0TDI CR 170KM 125kW",
                  },
                  {
                    value: "2.0-tdi-pd-140km-103kw",
                    label: "2.0TDI PD 140KM 103kW",
                  },
                  {
                    value: "2.0-tdi-pd-170km-125kw",
                    label: "2.0TDI PD 170KM 125kW",
                  },
                ],
              },
              {
                value: "s3-hatchback-3d",
                label: "S3 Hatchback 3d (2006-2012)",
                engine: [
                  {
                    value: "2.0tfsi-265km-195kw",
                    label: "2.0TFSI 265KM 195kW",
                  },
                ],
              },
              {
                value: "cabriolet",
                label: "Cabriolet (2007-2013)",
                engine: [
                  {
                    value: "1.2tfsi-105km-77kw",
                    label: "1.2 TFSI 105KM 77kW",
                  },
                  {
                    value: "1.4tfsi-125km-92kw",
                    label: "1.4 TFSI 125KM 92kW",
                  },
                  {
                    value: "1.6-102km-75kw",
                    label: "1.6 102KM 75kW",
                  },
                  {
                    value: "1.8tfsi-160km-118kw",
                    label: "1.8 TFSI 160KM 119kW",
                  },
                  {
                    value: "2.0tfsi-200km-147kw",
                    label: "2.0 TFSI 200KM 147kW",
                  },
                  {
                    value: "1.6tdi-105km-77kw",
                    label: "1.6TDI 105M 77kW",
                  },
                  {
                    value: "1.9tdi-105km-77kw",
                    label: "1.9TDI 105M 77kW",
                  },
                  {
                    value: "2.0tdi-cr-140km-103kw",
                    label: "2.0TDI CR 140KM 103kW",
                  },
                ],
              },
              {
                value: "s3-sportback",
                label: "S3 Sportback (2008-2013)",
                engine: [
                  {
                    value: "2.0tfsi-265km-195kw",
                    label: "2.0TFSI 265KM 195kW",
                  },
                  {
                    value: "2.5tfsi-340km-250kw",
                    label: "2.5TFSI 340KM 250kW",
                  },
                ],
              },
            ],
          },
          {
            value: "8v",
            label: "8V (2012-2020)",
            versions: [
              {
                value: "hatchback-3d",
                label: "Hatchback 3d (2012-2016)",
                engine: [
                  {
                    value: "1.2tfsi-105km-77kw",
                    label: "1.2 TFSI 105KM 77kW",
                  },
                  {
                    value: "1.2tfsi-110km-81kw",
                    label: "1.2 TFSI 110KM 81kW",
                  },
                  {
                    value: "1.4tfsi-122km-90kw",
                    label: "1.4TFSI 122KM 90kW",
                  },
                  {
                    value: "1.4tfsi-125km-92kw",
                    label: "1.4TFSI 125KM 92kW",
                  },
                  {
                    value: "1.4tfsi-cod-140km-103kw",
                    label: "1.4TFSI CoD 140KM 103kW",
                  },
                  {
                    value: "1.4tfsi-cod-ultra-150km-110kw",
                    label: "1.4TFSI CoD ultra 150KM 110kW",
                  },
                  {
                    value: "1.8tfsi-180km-132kw",
                    label: "1.8TFSI 180KM 132kW",
                  },
                  {
                    value: "1.6tdi-105km-77kw",
                    label: "1.6TDI 105KM 77kW",
                  },
                  {
                    value: "1.6tdi-clean-diesel-110km-81kw",
                    label: "1.6TDI clean diesel 110KM 81kW",
                  },
                  {
                    value: "1.6tdi-ultra-110km-81kw",
                    label: "1.6TDI ultra 110KM 81kW",
                  },
                  {
                    value: "2.0tdi-150km-110kw",
                    label: "2.0TDI 150KM 110kW",
                  },
                  {
                    value: "2.0tdi-184km-135kw",
                    label: "2.0TDI 184KM 135kW",
                  },
                  {
                    value: "2.0tdi-clean-diesel-150km-110kw",
                    label: "2.0TDI clean diesel 150KM 110kW",
                  },
                  {
                    value: "2.0tdi-clean-diesel-184km-135kw",
                    label: "2.0TDI clean diesel 184KM 135kW",
                  },
                ],
              },
              {
                value: "limousine",
                label: "Limousine (20013-2016)",
                engine: [
                  {
                    value: "1.4tfsi-125km-92kw",
                    label: "1.4TFSI 125KM 92kW",
                  },
                  {
                    value: "1.4tfsi-cod-140km-103kw",
                    label: "1.4TFSI CoD 140KM 103kW",
                  },
                  {
                    value: "1.4tfsi-cod-ultra-150km-110kw",
                    label: "1.4TFSI CoD ultra 150KM 110kW",
                  },
                  {
                    value: "1.8tfsi-180km-132kw",
                    label: "1.8TFSI 180KM 132kW",
                  },
                  {
                    value: "2.0tfsi-300km-221kw",
                    label: "2.0TFSI 300KM 221kW",
                  },
                  {
                    value: "2.0t-223km-164kw",
                    label: "2.0T 223KM 164kW",
                  },
                  {
                    value: "1.6tdi-105km-77kw",
                    label: "1.6TDI 105KM 77kW",
                  },
                  {
                    value: "1.6tdi-clean-diesel-110km-81kw",
                    label: "1.6TDI clean diesel 110KM 81kW",
                  },
                  {
                    value: "2.0tdi-150km-110kw",
                    label: "2.0TDI 150KM 110kW",
                  },
                  {
                    value: "2.0tdi-clean-diesel-150km-110kw",
                    label: "2.0TDI clean diesel 150KM 110kW",
                  },
                  {
                    value: "2.0tdi-clean-diesel-184km-135kw",
                    label: "2.0TDI clean diesel 184KM 135kW",
                  },
                ],
              },
              {
                value: "s3-limousine",
                label: "S3 Limousine (2013-2016)",
                engine: [
                  {
                    value: "2.0tfsi-300km-221kw",
                    label: "2.0TFSI 300KM 221kW",
                  },
                ],
              },
              {
                value: "s3",
                label: "S3 (2013-2016)",
                engine: [
                  {
                    value: "2.0tfsi-300km-221kw",
                    label: "2.0TFSI 300KM 221kW",
                  },
                ],
              },
              {
                value: "sportback-5d",
                label: "Sportback 5d (2013-2016)",
                engine: [
                  {
                    value: "1.2tfsi-105km-77kw",
                    label: "1.2 TFSI 105KM 77kW",
                  },
                  {
                    value: "1.2tfsi-110km-81kw",
                    label: "1.2 TFSI 110KM 81kW",
                  },
                  {
                    value: "1.4tcng-110km-81kw",
                    label: "1.4 TCNG 110KM 81kW",
                  },
                  {
                    value: "1.4tfsi-122km-90kw",
                    label: "1.4TFSI 122KM 90kW",
                  },
                  {
                    value: "1.4tfsi-125km-92kw",
                    label: "1.4TFSI 125KM 92kW",
                  },
                  {
                    value: "1.4tfsi-140km-103kw",
                    label: "1.4TFSI 140KM 103kW",
                  },
                  {
                    value: "1.4tfsi-cod-140km-103kw",
                    label: "1.4TFSI CoD 140KM 103kW",
                  },
                  {
                    value: "1.4tfsi-cod-ultra-150km-110kw",
                    label: "1.4TFSI CoD ultra 150KM 110kW",
                  },
                  {
                    value: "1.4tfsi-gtron-110km-81kw",
                    label: "1.4TFSI g-tron 110KM 81kW",
                  },
                  {
                    value: "1.8tfsi-180km-132kw",
                    label: "1.8TFSI 180KM 132kW",
                  },
                  {
                    value: "1.6tdi-105km-77kw",
                    label: "1.6TDI 105KM 77kW",
                  },
                  {
                    value: "1.6tdi-clean-diesel-110km-81kw",
                    label: "1.6TDI clean diesel 110KM 81kW",
                  },
                  {
                    value: "1.6tdi-ultra-110km-81kw",
                    label: "1.6TDI ultra 110KM 81kW",
                  },
                  {
                    value: "2.0tdi-150km-110kw",
                    label: "2.0TDI 150KM 110kW",
                  },
                  {
                    value: "2.0tdi-184km-135kw",
                    label: "2.0TDI 184KM 135kW",
                  },
                  {
                    value: "2.0tdi-clean-diesel-150km-110kw",
                    label: "2.0TDI clean diesel 150KM 110kW",
                  },
                  {
                    value: "2.0tdi-clean-diesel-184km-135kw",
                    label: "2.0TDI clean diesel 184KM 135kW",
                  },
                ],
              },
              {
                value: "s3-sportback",
                label: "S3 Sportback (2013-2016)",
                engine: [
                  {
                    value: "2.0tfsi-300km-221kw",
                    label: "2.0TFSI 300KM 221kW",
                  },
                ],
              },
              {
                value: "sportback-etron",
                label: "Sportback e-tron (2014-2016)",
                engine: [
                  {
                    value: "1.4tfsi-etron-204km-150kw",
                    label: "1.4TFSI e-tron 204KM 150kW",
                  },
                ],
              },
              {
                value: "cabriolet",
                label: "Cabriolet (2014-2016)",
                engine: [
                  {
                    value: "1.4tfsi-125km-92kw",
                    label: "1.4TFSI 125KM 92kW",
                  },
                  {
                    value: "1.4tfsi-cod-ultra-150km-110kw",
                    label: "1.4TFSI CoD ultra 150KM 110kW",
                  },
                  {
                    value: "1.8tfsi-180km-132kw",
                    label: "1.8TFSI 180KM 132kW",
                  },
                  {
                    value: "1.6tdi-clean-diesel-110km-81kw",
                    label: "1.6tdi clean diesel 110KM 81kW",
                  },
                  {
                    value: "2.0tdi-clean-diesel-184km-135kw",
                    label: "2.0tdi clean diesel 184KM 135kW",
                  },
                ],
              },
              {
                value: "s3-cabriolet",
                label: "S3 cabriolet (2014-2016)",
                engine: [
                  {
                    value: "2.0tfsi-300km-221kw",
                    label: "2.0TFSI 300KM 221kW",
                  },
                ],
              },
              {
                value: "rs3-sportback",
                label: "RS3 Sportback (2015-2016)",
                engine: [
                  {
                    value: "2.5tfsi-367km-270kw",
                    label: "2.5TFSI 367KM 270kW",
                  },
                ],
              },
              {
                value: "s3-limousine-facelift",
                label: "S3 Limousine Facelifting (2016-2020)",
                engine: [
                  {
                    value: "2.0tfsi-310km-228kw",
                    label: "2.0TFSI 310KM 228kW",
                  },
                  {
                    value: "2.0tfsi-300km-221kw",
                    label: "2.0TFSI 300KM 221kW",
                  },
                ],
              },
              {
                value: "s3-sportback-5d",
                label: "S3 Sportback 5d (2016-2020)",
                engine: [
                  {
                    value: "2.0tfsi-310km-228kw",
                    label: "2.0TFSI 310KM 228kW",
                  },
                  {
                    value: "2.0tfsi-300km-221kw",
                    label: "2.0TFSI 300KM 221kW",
                  },
                ],
              },
              {
                value: "limousine-facelift",
                label: "Limousine Facelift (2016-2020)",
                engine: [
                  {
                    value: "1.0tfsi-115km-85kw",
                    label: "1.0TFSI 115KM 85kW",
                  },
                  {
                    value: "1.4tfsi-cod-ultra-150km-110kw",
                    label: "1.4TFSI CoD Ultra 150KM 110kW",
                  },
                  {
                    value: "1.5-35-tfsi-150km-110kw",
                    label: "1.5 35 TFSI 150KM 110kW",
                  },
                  {
                    value: "1.5tfsi-150km-110kw",
                    label: "1.5TFSI 150KM 110kW",
                  },
                  {
                    value: "2.0-40-tfsi-190km-140kw",
                    label: "2.0 40 TFSI 190KM 140kW",
                  },
                  {
                    value: "2.0-35-tdi-150km-110kw",
                    label: "2.0 35 TDI 150KM 110kW",
                  },
                  {
                    value: "2.0tdi-150km-110kw",
                    label: "2.0TDI 150KM 110kW",
                  },
                ],
              },
              {
                value: "sportback-etron-5d-facelift",
                label: "Sportback e-tron 5d Facelifting (2016-2020)",
                engine: [
                  {
                    value: "1.4tfsi-204km-150kw",
                    label: "1.4TFSI 204KM 150kW",
                  },
                ],
              },
              {
                value: "sportback-5d-facelift",
                label: "Sportback 5d Facelifting (2016-2020)",
                engine: [
                  {
                    value: "1.0tfsi-115km-85kw",
                    label: "1.0TFSI 115KM 85kW",
                  },
                  {
                    value: "1.4tfsi-cod-ultra-150km-110kw",
                    label: "1.4TFSI CoD Ultra 150KM 110kW",
                  },
                  {
                    value: "1.5-35-tfsi-150km-110kw",
                    label: "1.5 35 TFSI 150KM 110kW",
                  },
                  {
                    value: "1.5tfsi-150km-110kw",
                    label: "1.5TFSI 150KM 110kW",
                  },
                  {
                    value: "2.0-40-tfsi-190km-140kw",
                    label: "2.0 40 TFSI 190KM 140kW",
                  },
                  {
                    value: "2.0-35-tdi-150km-110kw",
                    label: "2.0 35 TDI 150KM 110kW",
                  },
                  {
                    value: "2.0tdi-150km-110kw",
                    label: "2.0TDI 150KM 110kW",
                  },
                ],
              },
              {
                value: "rs3-limousine-facelift",
                label: "RS3 Limousine Facelifting (2017-2020)",
                engine: [
                  {
                    value: "2.5tfsi-400km-294kw",
                    label: "2.5TFSI 400KM 294kW",
                  },
                ],
              },
              {
                value: "rs3-sportback-facelift",
                label: "RS3 Sportback Facelifting (2017-2020)",
                engine: [
                  {
                    value: "2.5tfsi-400km-294kw",
                    label: "2.5TFSI 400KM 294kW",
                  },
                ],
              },
            ],
          },
          {
            value: "8y",
            label: "8Y (2020-present)",
            versions: [
              {
                value: "sportback",
                label: "Sportback (2020-present)",
                engine: [
                  {
                    value: "1.0-30-tfsi-110km-81kw",
                    label: "1.0 30 TFSI 110KM 81kW",
                  },
                  {
                    value: "1.5-35-tfsi-150km-110kw",
                    label: "1.5 35 TFSI 150KM 110kW",
                  },
                  {
                    value: "2.0-40-tfsi-190km-140kw",
                    label: "2.0 40 TFSI 190KM 140kW",
                  },
                  {
                    value: "2.0-30-tdi-116km-85kw",
                    label: "2.0 30 TDI 116KM 85kW",
                  },
                  {
                    value: "2.0-35-tdi-150km-110kw",
                    label: "2.0 35 TDI 150KM 110kW",
                  },
                ],
              },
              {
                value: "s3-limousine",
                label: "S3 Limousine (2020-present)",
                engine: [
                  {
                    value: "2.0tfsi-310km-228kw",
                    label: "2.0TFSI 310KM 228kW",
                  },
                ],
              },
              {
                value: "s3-sportback",
                label: "S3 Sportback (2020-present)",
                engine: [
                  {
                    value: "2.0tfsi-310km-228kw",
                    label: "2.0TFSI 310KM 228kW",
                  },
                ],
              },
              {
                value: "limousine",
                label: "Limousine (2020-present)",
                engine: [
                  {
                    value: "1.0-30-tfsi-110km-81kw",
                    label: "1.0 30 TFSI 110KM 81kW",
                  },
                  {
                    value: "1.5-35-tfsi-150km-110kw",
                    label: "1.5 35 TFSI 150KM 110kW",
                  },
                  {
                    value: "2.0-40-tfsi-190km-140kw",
                    label: "2.0 40 TFSI 190KM 140kW",
                  },
                  {
                    value: "2.0-30-tdi-116km-85kw",
                    label: "2.0 30 TDI 116KM 85kW",
                  },
                  {
                    value: "2.0-35-tdi-150km-110kw",
                    label: "2.0 35 TDI 150KM 110kW",
                  },
                ],
              },
              {
                value: "sportback-e",
                label: "Sportback-e (2021-present)",
                engine: [
                  {
                    value: "1.4tfsi-e-245km-180kw",
                    label: "1.4TFSI-e 245KM 180kW",
                  },
                ],
              },
              {
                value: "rs3-limousine",
                label: "RS3 Limousine (2021-present)",
                engine: [
                  {
                    value: "2.5tfsi-400km-294kw",
                    label: "2.5TFSI 400KM 294kW",
                  },
                ],
              },
              {
                value: "rs3-sportback",
                label: "RS3 Sportback (2021-present)",
                engine: [
                  {
                    value: "2.5tfsi-400km-294kw",
                    label: "2.5TFSI 400KM 294kW",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        value: "a4",
        label: "A4",
        generations: [
          {
            value: "b5",
            label: "B5 (1995-2001)",
            versions: [
              {
                value: "sedan",
                label: "Sedan (1995-2000)",
                engine: [
                  {
                    value: "1.6-i-101km-74kw",
                    label: "1.6 i 101KM 74kW",
                  },
                  {
                    value: "1.8-20v-125km-92kw",
                    label: "1.8 20V 125KM 92kW",
                  },
                  {
                    value: "1.8-20v-quattro-125km-92kw",
                    label: "1.8 20V quattro 125KM 92kW",
                  },
                  {
                    value: "1.8-20v-turbo-150km-110kw",
                    label: "1.8 20V turbo 150KM 110kW",
                  },
                  {
                    value: "1.8-20v-turbo-quattro-150km-110kw",
                    label: "1.8 20V turbo quattro 150KM 110kW",
                  },
                  {
                    value: "1.8-turbo-180km-132kw",
                    label: "1.8 Turbo 180KM 132kW",
                  },
                  {
                    value: "1.8-20v-turbo-quattro-180km-132kw",
                    label: "1.8 20V turbo quattro 180KM 132kW",
                  },
                  {
                    value: "2.4-30v-165km-121kw",
                    label: "2.4 30V 165KM 121kW",
                  },
                  {
                    value: "2.4-30v-quattro-165km-121kw",
                    label: "2.4 30V quattro 165KM 121kW",
                  },
                  {
                    value: "2.6-150km-110kw",
                    label: "2.6 150KM 110kW",
                  },
                  {
                    value: "2.6-quattro-150km-110kw",
                    label: "2.6 quattro 150KM 110kW",
                  },
                  {
                    value: "2.7-quattro-230km-169kw",
                    label: "2.7 quattro 230KM 169kW",
                  },
                  {
                    value: "2.8-174km-128kw",
                    label: "2.8 174KM 128kW",
                  },
                  {
                    value: "2.8-30v-193km-142kw",
                    label: "2.8 30V 193KM 142kW",
                  },
                  {
                    value: "2.8-30v-quattro-193km-142kw",
                    label: "2.8 30V quattro 193KM 142kW",
                  },
                  {
                    value: "2.8-quattro-174km-128kw",
                    label: "2.8 30V quattro 174KM 128kW",
                  },
                  {
                    value: "1.9tdi-110km-81kw",
                    label: "1.9tdi 110KM 81kW",
                  },
                  {
                    value: "1.9tdi-116km-85kw",
                    label: "1.9tdi 116KM 85kW",
                  },
                  {
                    value: "1.9tdi-75km-55kw",
                    label: "1.9tdi 75KM 55kW",
                  },
                  {
                    value: "1.9tdi-90km-66kw",
                    label: "1.9tdi 90KM 66kW",
                  },
                  {
                    value: "1.9tdi-quattro-110km-81kw",
                    label: "1.9tdi quattro 110KM 81kW",
                  },
                  {
                    value: "1.9tdi-quattro-116km-85kw",
                    label: "1.9tdi quattro 116KM 85kW",
                  },
                  {
                    value: "2.5tdi-150km-110kw",
                    label: "2.5tdi 150KM 110kW",
                  },
                  {
                    value: "2.5tdi-quattro-150km-110kw",
                    label: "2.5tdi quattro 150KM 110kW",
                  },
                ],
              },
              {
                value: "avant",
                label: "Avant (1996-2001)",
                engine: [
                  {
                    value: "1.6-i-101km-74kw",
                    label: "1.6 i 101KM 74kW",
                  },
                  {
                    value: "1.8-20v-125km-92kw",
                    label: "1.8 20V 125KM 92kW",
                  },
                  {
                    value: "1.8-20v-quattro-125km-92kw",
                    label: "1.8 20V quattro 125KM 92kW",
                  },
                  {
                    value: "1.8-20v-turbo-150km-110kw",
                    label: "1.8 20V turbo 150KM 110kW",
                  },
                  {
                    value: "1.8-20v-turbo-quattro-150km-110kw",
                    label: "1.8 20V turbo quattro 150KM 110kW",
                  },
                  {
                    value: "1.8-turbo-180km-132kw",
                    label: "1.8 Turbo 180KM 132kW",
                  },
                  {
                    value: "1.8-20v-turbo-quattro-180km-132kw",
                    label: "1.8 20V turbo quattro 180KM 132kW",
                  },
                  {
                    value: "2.4-30v-165km-121kw",
                    label: "2.4 30V 165KM 121kW",
                  },
                  {
                    value: "2.4-30v-quattro-165km-121kw",
                    label: "2.4 30V quattro 165KM 121kW",
                  },
                  {
                    value: "2.6-150km-110kw",
                    label: "2.6 150KM 110kW",
                  },
                  {
                    value: "2.6-quattro-150km-110kw",
                    label: "2.6 quattro 150KM 110kW",
                  },
                  {
                    value: "2.7-quattro-230km-169kw",
                    label: "2.7 quattro 230KM 169kW",
                  },
                  {
                    value: "2.8-174km-128kw",
                    label: "2.8 174KM 128kW",
                  },
                  {
                    value: "2.8-30v-193km-142kw",
                    label: "2.8 30V 193KM 142kW",
                  },
                  {
                    value: "2.8-30v-quattro-193km-142kw",
                    label: "2.8 30V quattro 193KM 142kW",
                  },
                  {
                    value: "2.8-quattro-174km-128kw",
                    label: "2.8 30V quattro 174KM 128kW",
                  },
                  {
                    value: "1.9tdi-110km-81kw",
                    label: "1.9tdi 110KM 81kW",
                  },
                  {
                    value: "1.9tdi-116km-85kw",
                    label: "1.9tdi 116KM 85kW",
                  },
                  {
                    value: "1.9tdi-75km-55kw",
                    label: "1.9tdi 75KM 55kW",
                  },
                  {
                    value: "1.9tdi-90km-66kw",
                    label: "1.9tdi 90KM 66kW",
                  },
                  {
                    value: "1.9tdi-quattro-110km-81kw",
                    label: "1.9tdi quattro 110KM 81kW",
                  },
                  {
                    value: "1.9tdi-quattro-116km-85kw",
                    label: "1.9tdi quattro 116KM 85kW",
                  },
                  {
                    value: "2.5tdi-150km-110kw",
                    label: "2.5tdi 150KM 110kW",
                  },
                  {
                    value: "2.5tdi-quattro-150km-110kw",
                    label: "2.5tdi quattro 150KM 110kW",
                  },
                ],
              },
              {
                value: "s4-sedan",
                label: "S4 sedan (1997-2001)",
                engine: [
                  {
                    value: "2.7-t-265km-195kw",
                    label: "2.7T 265KM 195kW",
                  },
                ],
              },
              {
                value: "s4-avant",
                label: "S4 Avant (1997-2001)",
                engine: [
                  {
                    value: "2.7-t-265km-195kw",
                    label: "2.7T 265KM 195kW",
                  },
                ],
              },
              {
                value: "rs4",
                label: "RS4",
                engine: [
                  {
                    value: "2.7-t-380km-279kw",
                    label: "2.7T 380KM 279kW",
                  },
                ],
              },
            ],
          },
          {
            value: "b6",
            label: "B6 (2000-2006)",
            versions: [
              {
                value: "sedan",
                label: "Sedan (2000-2004)",
                engine: [
                  {
                    value: "1.6-i-102km-75kw",
                    label: "1.6 i 102KM 75kW",
                  },
                  {
                    value: "1.8-t-150km-110kw",
                    label: "1.8 T 150KM 110kW",
                  },
                  {
                    value: "1.8-t-163km-120kw",
                    label: "1.8 T 163KM 120kW",
                  },
                  {
                    value: "1.8-t-170km-125kw",
                    label: "1.8 T 170KM 125kW",
                  },
                  {
                    value: "1.8-t-190km-140kw",
                    label: "1.8 T 190KM 140kW",
                  },
                  {
                    value: "1.8-t-quattro-150km-110kw",
                    label: "1.8 T quattro 150KM 110kW",
                  },
                  {
                    value: "1.8-t-quattro-163km-120kw",
                    label: "1.8 T quattro 163KM 120kW",
                  },
                  {
                    value: "1.8-t-quattro-170km-125kw",
                    label: "1.8 T quattro 170KM 125kW",
                  },
                  {
                    value: "1.8-t-quattro-190km-140kw",
                    label: "1.8 T quattro 190KM 140kW",
                  },
                  {
                    value: "2.0-20v-131km-96kw",
                    label: "2.0 20V 131KM 96kW",
                  },
                  {
                    value: "2.0-fsi-150km-110kw",
                    label: "2.0 FSI 150KM 110kW",
                  },
                  {
                    value: "2.4-v6-170km-125kw",
                    label: "2.4 V6 170KM 125kW",
                  },
                  {
                    value: "3.0-quattro-220km-162kw",
                    label: "3.0 quattro 220KM 162kW",
                  },
                  {
                    value: "3.0-v6-220km-162kw",
                    label: "3.0 V6 220KM 162kW",
                  },
                  {
                    value: "1.9-tdi-pd-101km-74kw",
                    label: "1.9TDI PD 101KM 74kW",
                  },
                  {
                    value: "1.9-tdi-pd-116km-85kw",
                    label: "1.9TDI PD 116KM 85kW",
                  },
                  {
                    value: "1.9-tdi-pd-131km-96kw",
                    label: "1.9TDI PD 131KM 96kW",
                  },
                  {
                    value: "1.9-tdi-quattro-130km-96kw",
                    label: "1.9TDI quattro 130KM 96kW",
                  },
                  {
                    value: "2.5-v6-tdi-155km-114kw",
                    label: "2.5 V6 TDI 155KM 114kW",
                  },
                  {
                    value: "2.5-v6-tdi-163km-120kw",
                    label: "2.5 V6 TDI 163KM 120kW",
                  },
                  {
                    value: "2.5-v6-tdi-180km-132kw",
                    label: "2.5 V6 TDI 180KM 132kW",
                  },
                ],
              },
              {
                value: "cabrio",
                label: "Cabrio (2001-2006)",
                engine: [
                  {
                    value: "1.8-t-163km-120kw",
                    label: "1.8 T 163KM 120kW",
                  },
                  {
                    value: "1.8-t-170km-125kw",
                    label: "1.8 T 170KM 125kW",
                  },
                  {
                    value: "1.8-t-190km-140kw",
                    label: "1.8 T 190KM 140kW",
                  },
                  {
                    value: "1.8-t-quattro-163km-120kw",
                    label: "1.8 T quattro 163KM 120kW",
                  },
                  {
                    value: "1.8-t-quattro-170km-125kw",
                    label: "1.8 T quattro 170KM 125kW",
                  },
                  {
                    value: "1.8-t-quattro-190km-140kw",
                    label: "1.8 T quattro 190KM 140kW",
                  },
                  {
                    value: "2.0-20v-131km-96kw",
                    label: "2.0 20V 131KM 96kW",
                  },
                  {
                    value: "2.0-fsi-150km-110kw",
                    label: "2.0 FSI 150KM 110kW",
                  },
                  {
                    value: "2.0-tfsi-200km-147kw",
                    label: "2.0 TFSI 200KM 147kW",
                  },
                  {
                    value: "2.0-tfsi-quattro-200km-147kw",
                    label: "2.0 TFSI quattro 200KM 147kW",
                  },
                  {
                    value: "2.4-v6-170km-125kw",
                    label: "2.4 V6 170KM 125kW",
                  },
                  {
                    value: "3.0-quattro-220km-162kw",
                    label: "3.0 quattro 220KM 162kW",
                  },
                  {
                    value: "3.0-v6-220km-162kw",
                    label: "3.0 V6 220KM 162kW",
                  },
                  {
                    value: "3.2-fsi-255km-188kw",
                    label: "3.2 FSI 255KM 188kW",
                  },
                  {
                    value: "3.2-fsi-quattro-255km-188kw",
                    label: "3.2 FSI quattro 255KM 188kW",
                  },
                  {
                    value: "1.9-tdi-130km-96kw",
                    label: "1.9TDI 130KM 96kW",
                  },
                  {
                    value: "1.9-tdi-115km-85kw",
                    label: "1.9TDI 115KM 85kW",
                  },
                  {
                    value: "1.9-tdi-quattro-130km-96kw",
                    label: "1.9TDI quattro 130KM 96kW",
                  },
                  {
                    value: "2.0-tdi-140km-103kw",
                    label: "2.0TDI 140KM 103kW",
                  },
                  {
                    value: "2.5-tdi-quattro-180km-132kw",
                    label: "2.5TDI quattro 180KM 132kW",
                  },
                  {
                    value: "2.5-v6-tdi-163km-120kw",
                    label: "2.5 V6 TDI 163KM 120kW",
                  },
                  {
                    value: "3.0-tdi-quattro-204km-150kw",
                    label: "3.0TDI quattro 204KM 150kW",
                  },
                ],
              },
              {
                value: "avant",
                label: "Avant (2001-2004)",
                engine: [
                  {
                    value: "1.6-i-102km-75kw",
                    label: "1.6 i 102KM 75kW",
                  },
                  {
                    value: "1.8-t-150km-110kw",
                    label: "1.8 T 150KM 110kW",
                  },
                  {
                    value: "1.8-t-163km-120kw",
                    label: "1.8 T 163KM 120kW",
                  },
                  {
                    value: "1.8-t-190km-140kw",
                    label: "1.8 T 190KM 140kW",
                  },
                  {
                    value: "1.8-t-quattro-163km-120kw",
                    label: "1.8 T quattro 163KM 120kW",
                  },
                  {
                    value: "1.8-t-quattro-190km-140kw",
                    label: "1.8 T quattro 190KM 140kW",
                  },
                  {
                    value: "2.0-20v-131km-96kw",
                    label: "2.0 20V 131KM 96kW",
                  },
                  {
                    value: "2.0-fsi-150km-110kw",
                    label: "2.0 FSI 150KM 110kW",
                  },
                  {
                    value: "2.4-v6-170km-125kw",
                    label: "2.4 V6 170KM 125kW",
                  },
                  {
                    value: "3.0-quattro-220km-162kw",
                    label: "3.0 quattro 220KM 162kW",
                  },
                  {
                    value: "3.0-v6-220km-162kw",
                    label: "3.0 V6 220KM 162kW",
                  },
                  {
                    value: "1.9-tdi-pd-101km-74kw",
                    label: "1.9TDI PD 101KM 74kW",
                  },
                  {
                    value: "1.9-tdi-pd-116km-85kw",
                    label: "1.9TDI PD 116KM 85kW",
                  },
                  {
                    value: "1.9-tdi-pd-131km-96kw",
                    label: "1.9TDI PD 131KM 96kW",
                  },
                  {
                    value: "1.9-tdi-quattro-130km-96kw",
                    label: "1.9TDI quattro 130KM 96kW",
                  },
                  {
                    value: "2.5-v6-tdi-155km-114kw",
                    label: "2.5 V6 TDI 155M 114kW",
                  },
                  {
                    value: "2.5-v6-tdi-163km-120kw",
                    label: "2.5 V6 TDI 163M 120kW",
                  },
                  {
                    value: "2.5-v6-tdi-180km-132kw",
                    label: "2.5 V6 TDI 180M 132kW",
                  },
                ],
              },
              {
                value: "s4-sedan",
                label: "S4 Sedan (2002-2004)",
                engine: [
                  {
                    value: "4.2-v8-344km-253kw",
                    label: "4.2 V8 344KM 253kW",
                  },
                ],
              },
              {
                value: "s4-avant",
                label: "S4 Avant (2002-2004)",
                engine: [
                  {
                    value: "4.2-v8-344km-253kw",
                    label: "4.2 V8 344KM 253kW",
                  },
                ],
              },
              {
                value: "s4-cabrio",
                label: "S4 Cabrio (2004-2006)",
                engine: [
                  {
                    value: "4.2-v8-344km-253kw",
                    label: "4.2 V8 344KM 253kW",
                  },
                ],
              },
            ],
          },
          {
            value: "b7",
            label: "B7 (2004-2009)",
            versions: [
              {
                value: "avant",
                label: "Avant (2004-2008)",
                engine: [
                  {
                    value: "1.6-i-102km-75kw",
                    label: "1.6 i 102KM 75kW",
                  },
                  {
                    value: "1.8-t-163km-120kw",
                    label: "1.8 T 163KM 120kW",
                  },
                  {
                    value: "1.8-tfsi-120km-88kw",
                    label: "1.8 TFSI 120KM 88kW",
                  },
                  {
                    value: "2.0-20v-131km-96kw",
                    label: "2.0 20V 131KM 96kW",
                  },
                  {
                    value: "2.0-tfsi-200km-147kw",
                    label: "2.0 TFSI 200KM 147kW",
                  },
                  {
                    value: "2.0-tfsi-220km-162kw",
                    label: "2.0 TFSI 220KM 162kW",
                  },
                  {
                    value: "2.0-tfsi-dtm-220km-162kw",
                    label: "2.0 TFSI DTM 220KM 162kW",
                  },
                  {
                    value: "2.0-tfsi-e-170km-125kw",
                    label: "2.0 TFSI e 170KM 125kW",
                  },
                  {
                    value: "2.0-tfsi-quattro-200km-147kw",
                    label: "2.0 TFSI quattro 200KM 147kW",
                  },
                  {
                    value: "3.2-fsi-quattro-255km-188kw",
                    label: "3.2 FSI quattro 255KM 188kW",
                  },
                  {
                    value: "3.2-v6-fsi-256km-188kw",
                    label: "3.2 V6 FSI 256KM 188kW",
                  },
                  {
                    value: "1.9-tdi-e-pd-116km-85kw",
                    label: "1.9 TDI e PD 116KM 85kW",
                  },
                  {
                    value: "1.9-tdi-pd-116km-85kw",
                    label: "1.9 TDI PD 116KM 85kW",
                  },
                  {
                    value: "2.0-tdi-pd-140km-103kw",
                    label: "2.0 TDI PD 140KM 103kW",
                  },
                  {
                    value: "2.0-tdi-pd-170km-125kw",
                    label: "2.0 TDI PD 170KM 125kW",
                  },
                  {
                    value: "2.5-v6-tdi-163km-120kw",
                    label: "2.5 V6 TDI 163KM 120kW",
                  },
                  {
                    value: "2.7-v6-tdi-cr-180km-132kw",
                    label: "2.7 V6 TDI CR 180KM 132kW",
                  },
                  {
                    value: "3.0-v6-tdi-cr-204km-150kw",
                    label: "3.0 V6 TDI CR 204KM 150kW",
                  },
                  {
                    value: "3.0-v6-tdi-cr-233km-171kw",
                    label: "3.0 V6 TDI CR 233KM 171kW",
                  },
                ],
              },
              {
                value: "sedan",
                label: "Sedan (2004-2008)",
                engine: [
                  {
                    value: "1.6-i-102km-75kw",
                    label: "1.6 i 102KM 75kW",
                  },
                  {
                    value: "1.8-t-163km-120kw",
                    label: "1.8 T 163KM 120kW",
                  },
                  {
                    value: "1.8-tfsi-120km-88kw",
                    label: "1.8 TFSI 120KM 88kW",
                  },
                  {
                    value: "2.0-20v-131km-96kw",
                    label: "2.0 20V 131KM 96kW",
                  },
                  {
                    value: "2.0-tfsi-200km-147kw",
                    label: "2.0 TFSI 200KM 147kW",
                  },
                  {
                    value: "2.0-tfsi-220km-162kw",
                    label: "2.0 TFSI 220KM 162kW",
                  },
                  {
                    value: "2.0-tfsi-dtm-220km-162kw",
                    label: "2.0 TFSI DTM Edition 220KM 162kW",
                  },
                  {
                    value: "2.0-tfsi-e-170km-125kw",
                    label: "2.0 TFSI e 170KM 125kW",
                  },
                  {
                    value: "2.0-tfsi-quattro-200km-147kw",
                    label: "2.0 TFSI quattro 200KM 147kW",
                  },
                  {
                    value: "3.2-fsi-quattro-255km-188kw",
                    label: "3.2 FSI quattro 255KM 188kW",
                  },
                  {
                    value: "3.2-v6-fsi-256km-188kw",
                    label: "3.2 V6 FSI 256KM 188kW",
                  },
                  {
                    value: "1.9-tdi-e-pd-116km-85kw",
                    label: "1.9 TDI e PD 116KM 85kW",
                  },
                  {
                    value: "1.9-tdi-pd-116km-85kw",
                    label: "1.9 TDI PD 116KM 85kW",
                  },
                  {
                    value: "2.0-tdi-pd-140km-103kw",
                    label: "2.0 TDI PD 140KM 103kW",
                  },
                  {
                    value: "2.0-tdi-pd-170km-125kw",
                    label: "2.0 TDI PD 170KM 125kW",
                  },
                  {
                    value: "2.5-v6-tdi-163km-120kw",
                    label: "2.5 V6 TDI 163KM 120kW",
                  },
                  {
                    value: "2.7-v6-tdi-cr-180km-132kw",
                    label: "2.7 V6 TDI CR 180KM 132kW",
                  },
                  {
                    value: "3.0-v6-tdi-cr-204km-150kw",
                    label: "3.0 V6 TDI CR 204KM 150kW",
                  },
                  {
                    value: "3.0-v6-tdi-cr-233km-171kw",
                    label: "3.0 V6 TDI CR 233KM 171kW",
                  },
                ],
              },
              {
                value: "s4-sedan",
                label: "S4 Sedan (2004-2008)",
                engine: [
                  {
                    value: "4.2-v8-344km-253kw",
                    label: "4.2 V8 344KM 253kW",
                  },
                ],
              },
              {
                value: "s4-avant",
                label: "S4 Avant (2004-2008)",
                engine: [
                  {
                    value: "4.2-v8-344km-253kw",
                    label: "4.2 V8 344KM 253kW",
                  },
                ],
              },
              {
                value: "s4-cabrio",
                label: "S4 Cabrio (2005-2009)",
                engine: [
                  {
                    value: "4.2-v8-344km-253kw",
                    label: "4.2 V8 344KM 253kW",
                  },
                ],
              },
              {
                value: "cabrio",
                label: "Cabrio (2005-2009)",
                engine: [
                  {
                    value: "1.8-t-163km-120kw",
                    label: "1.8 T 163KM 120kW",
                  },
                  {
                    value: "1.8-t-quattro-163km-120kw",
                    label: "1.8 T quattro 163KM 120kW",
                  },
                  {
                    value: "1.8-tfsi-120km-88kw",
                    label: "1.8 TFSI 120KM 88kW",
                  },
                  {
                    value: "2.0-tfsi-200km-147kw",
                    label: "2.0 TFSI 200KM 147kW",
                  },
                  {
                    value: "3.2-tfsi-quattro-255km-188kw",
                    label: "3.2 TFSI quattro 255KM 188kW",
                  },
                  {
                    value: "3.2-v6-tfsi-256km-188kw",
                    label: "3.2 V6 TFSI 256KM 188kW",
                  },
                  {
                    value: "2.0-tdi-pd-140km-103kw",
                    label: "2.0 TDI PD 140KM 103kW",
                  },
                  {
                    value: "2.7-v6-tdi-cr-180km-132kw",
                    label: "2.7 V6 TDI CR 180KM 132kW",
                  },
                  {
                    value: "3.0-v6-tdi-cr-233km-171kw",
                    label: "3.0 V6 TDI CR 233KM 171kW",
                  },
                ],
              },
              {
                value: "rs4-sedan",
                label: "RS4 Sedan (2005-2008)",
                engine: [
                  {
                    value: "4.2-v8-fsi-420km-309kw",
                    label: "4.2 V8 FSI 420KM 309kW",
                  },
                ],
              },
              {
                value: "rs4-avant",
                label: "RS4 Avant (2005-2008)",
                engine: [
                  {
                    value: "4.2-v8-fsi-420km-309kw",
                    label: "4.2 V8 FSI 420KM 309kW",
                  },
                ],
              },
              {
                value: "rs4-cabrio",
                label: "RS4 Cabrio (2006-2009)",
                engine: [
                  {
                    value: "4.2-v8-fsi-420km-309kw",
                    label: "4.2 V8 FSI 420KM 309kW",
                  },
                ],
              },
            ],
          },
          {
            value: "b8",
            label: "B8 (2007-2015)",
            versions: [
              {
                value: "limousine",
                label: "Limousine (2007-2011)",
                engine: [
                  {
                    value: "1.8-tfsi-120km-88kw",
                    label: "1.8 TFSI 120KM 88kW",
                  },
                  {
                    value: "1.8-tfsi-160km-118kw",
                    label: "1.8 TFSI 160KM 118kW",
                  },
                  {
                    value: "2.0-tfsi-170km-125kw",
                    label: "2.0 TFSI 170KM 125kW",
                  },
                  {
                    value: "2.0-tfsi-180km-132kw",
                    label: "2.0 TFSI 180KM 132kW",
                  },
                  {
                    value: "2.0-tfsi-211km-155kw",
                    label: "2.0 TFSI 211KM 155kW",
                  },
                  {
                    value: "3.2-fsi-265km-195kw",
                    label: "3.2 FSI 265KM 195kW",
                  },
                  {
                    value: "2.0-tdi-120km-88kw",
                    label: "2.0 TDI 120KM 88kW",
                  },
                  {
                    value: "2.0-tdi-140km-103kw",
                    label: "2.0 TDI 140KM 103kW",
                  },
                  {
                    value: "2.0-tdi-170km-125kw",
                    label: "2.0 TDI 170KM 125kW",
                  },
                  {
                    value: "2.0-tdi-143km-105kw",
                    label: "2.0 TDI 143KM 105kW",
                  },
                  {
                    value: "2.0-tdie-136km-100kw",
                    label: "2.0 TDIe 136KM 100kW",
                  },
                  {
                    value: "2.7-tdi-190km-140kw",
                    label: "2.7 TDI 190KM 140kW",
                  },
                  {
                    value: "3.0-tdi-240km-177kw",
                    label: "3.0 TDI 240KM 177kW",
                  },
                ],
              },
              {
                value: "allroad-quattro",
                label: "Allroad quattro (2008-2011)",
                engine: [
                  {
                    value: "2.0-tfsi-211km-155kw",
                    label: "2.0 TFSI 211KM 155kW",
                  },
                  {
                    value: "2.0-tdi-143km-105kw",
                    label: "2.0 TDI 143KM 105kW",
                  },
                  {
                    value: "2.0-tdi-170km-125kw",
                    label: "2.0 TDI 170KM 125kW",
                  },
                  {
                    value: "3.0-tdi-240km-177kw",
                    label: "3.0 TDI 240KM 177kW",
                  },
                ],
              },
              {
                value: "avant",
                label: "Avant (2008-2011)",
                engine: [
                  {
                    value: "1.8-tfsi-120km-88kw",
                    label: "1.8 TFSI 120KM 88kW",
                  },
                  {
                    value: "1.8-tfsi-160km-118kw",
                    label: "1.8 TFSI 160KM 118kW",
                  },
                  {
                    value: "2.0-tfsi-180km-132kw",
                    label: "2.0 TFSI 180KM 132kW",
                  },
                  {
                    value: "2.0-tfsi-211km-155kw",
                    label: "2.0 TFSI 211KM 155kW",
                  },
                  {
                    value: "3.2-fsi-265km-195kw",
                    label: "3.2 FSI 265KM 195kW",
                  },
                  {
                    value: "2.0-tdi-120km-88kw",
                    label: "2.0 TDI 120KM 88kW",
                  },
                  {
                    value: "2.0-tdi-140km-103kw",
                    label: "2.0 TDI 140KM 103kW",
                  },
                  {
                    value: "2.0-tdi-143km-105kw",
                    label: "2.0 TDI 143KM 105kW",
                  },
                  {
                    value: "2.0-tdi-170km-125kw",
                    label: "2.0 TDI 170KM 125kW",
                  },
                  {
                    value: "2.7-tdi-190km-140kw",
                    label: "2.7 TDI 190KM 140kW",
                  },
                  {
                    value: "3.0-tdi-240km-177kw",
                    label: "3.0 TDI 240KM 177kW",
                  },
                ],
              },
              {
                value: "s4-avant",
                label: "S4 Avant (2009-2011)",
                engine: [
                  {
                    value: "3.0-tfsi-333km-245kw",
                    label: "3.0 TFSI 333km 245kW",
                  },
                ],
              },
              {
                value: "s4-limousine",
                label: "S4 Limousine (2009-2011)",
                engine: [
                  {
                    value: "3.0-tfsi-333km-245kw",
                    label: "3.0 TFSI 333km 245kW",
                  },
                ],
              },
              {
                value: "limousine-facelift",
                label: "Limousine Facelifting (2012-2015)",
                engine: [
                  {
                    value: "1.8-tfsi-170km-125kw",
                    label: "1.8 TFSI 170KM 125kW",
                  },
                  {
                    value: "1.8-tfsi-120km-88kw",
                    label: "1.8 TFSI 120KM 88kW",
                  },
                  {
                    value: "2.0-tfsi-211km-155kw",
                    label: "2.0 TFSI 211KM 155kW",
                  },
                  {
                    value: "2.0-tfsi-225km-165kw",
                    label: "2.0 TFSI 225KM 165kW",
                  },
                  {
                    value: "2.0-tfsi-flexible-fuel-180km-132kw",
                    label: "2.0 TFSI flexible fuel 180KM 132kW",
                  },
                  {
                    value: "3.0-tfsi-272km-200kw",
                    label: "3.0 TFSI 272KM 200kW",
                  },
                  {
                    value: "2.0-tdi-120km-88kw",
                    label: "2.0 TDI 120KM 88kW",
                  },
                  {
                    value: "2.0-tdi-177km-130kw",
                    label: "2.0 TDI 177KM 130kW",
                  },
                  {
                    value: "2.0-tdi-143km-105kw",
                    label: "2.0 TDI 143KM 105kW",
                  },
                  {
                    value: "2.0-tdi-150km-110kw",
                    label: "2.0 TDI 150KM 110kW",
                  },
                  {
                    value: "2.0-tdi-112g-136km-100kw",
                    label: "2.0 TDI 112g 136KM 100kW",
                  },
                  {
                    value: "2.0-tdi-clean-diesel-150km-110kw",
                    label: "2.0 TDI clean diesel 150KM 110kW",
                  },
                  {
                    value: "2.0-tdi-clean-diesel-190km-140kw",
                    label: "2.0 TDI clean diesel 190KM 140kW",
                  },
                  {
                    value: "2.0-tdi-ultra-136km-100kw",
                    label: "2.0 TDI ultra 136KM 100kW",
                  },
                  {
                    value: "2.0-tdi-ultra-163km-120kw",
                    label: "2.0 TDI ultra 163KM 120kW",
                  },
                  {
                    value: "3.0-tdi-245km-180kw",
                    label: "3.0 TDI 245KM 180kW",
                  },
                  {
                    value: "3.0-tdi-204km-150kw",
                    label: "3.0 TDI 204KM 150kW",
                  },
                  {
                    value: "3.0-tdi-clean-diesel-245km-180kw",
                    label: "3.0 TDI clean diesel 245KM 180kW",
                  },
                ],
              },
              {
                value: "allroad-quattro-facelift",
                label: "Allroad quattro Facelifting (2012-2015)",
                engine: [
                  {
                    value: "2.0-tfsi-211km-155kw",
                    label: "2.0 TFSI 211KM 155kW",
                  },
                  {
                    value: "2.0-tfsi-225km-165kw",
                    label: "2.0 TFSI 225KM 165kW",
                  },
                  {
                    value: "2.0-tdi-177km-130kw",
                    label: "2.0 TDI 177KM 130kW",
                  },
                  {
                    value: "2.0-tdi-143km-105kw",
                    label: "2.0 TDI 143KM 105kW",
                  },
                  {
                    value: "2.0-tdi-150km-110kw",
                    label: "2.0 TDI 150KM 110kW",
                  },
                  {
                    value: "2.0-tdi-clean-diesel-190km-140kw",
                    label: "2.0 TDI clean diesel 190KM 140kW",
                  },
                  {
                    value: "3.0-tdi-245km-180kw",
                    label: "3.0 TDI 245KM 180kW",
                  },
                  {
                    value: "3.0-tdi-clean-diesel-245km-180kw",
                    label: "3.0 TDI clean diesel 245KM 180kW",
                  },
                ],
              },
              {
                value: "rs4-avant",
                label: "RS4 Avant (2012-2015)",
                engine: [
                  {
                    value: "4.2-fsi-450km-331kw",
                    label: "4.2 FSI 450KM 331kW",
                  },
                ],
              },
              {
                value: "s4-limousine-facelift",
                label: "S4 Limousine Facelifting (2012-2015)",
                engine: [
                  {
                    value: "3.0-tfsi-333km-245kw",
                    label: "3.0 TFSI 333KM 245kW",
                  },
                ],
              },
              {
                value: "avant-facelift",
                label: "Avant Facelifting (2012-2015)",
                engine: [
                  {
                    value: "1.8-tfsi-170km-125kw",
                    label: "1.8 TFSI 170KM 125kW",
                  },
                  {
                    value: "1.8-tfsi-120km-88kw",
                    label: "1.8 TFSI 120KM 88kW",
                  },
                  {
                    value: "2.0-tfsi-211km-155kw",
                    label: "2.0 TFSI 211KM 155kW",
                  },
                  {
                    value: "2.0-tfsi-225km-165kw",
                    label: "2.0 TFSI 225KM 165kW",
                  },
                  {
                    value: "2.0-tfsi-flexible-fuel-180km-132kw",
                    label: "2.0 TFSI flexible fuel 180KM 132kW",
                  },
                  {
                    value: "3.0-tfsi-272km-200kw",
                    label: "3.0 TFSI 272KM 200kW",
                  },
                  {
                    value: "2.0-tdi-120km-88kw",
                    label: "2.0 TDI 120KM 88kW",
                  },
                  {
                    value: "2.0-tdi-177km-130kw",
                    label: "2.0 TDI 177KM 130kW",
                  },
                  {
                    value: "2.0-tdi-143km-105kw",
                    label: "2.0 TDI 143KM 105kW",
                  },
                  {
                    value: "2.0-tdi-150km-110kw",
                    label: "2.0 TDI 150KM 110kW",
                  },
                  {
                    value: "2.0-tdi-112g-136km-100kw",
                    label: "2.0 TDI 112g 136KM 100kW",
                  },
                  {
                    value: "2.0-tdi-clean-diesel-150km-110kw",
                    label: "2.0 TDI clean diesel 150KM 110kW",
                  },
                  {
                    value: "2.0-tdi-clean-diesel-190km-140kw",
                    label: "2.0 TDI clean diesel 190KM 140kW",
                  },
                  {
                    value: "2.0-tdi-ultra-136km-100kw",
                    label: "2.0 TDI ultra 136KM 100kW",
                  },
                  {
                    value: "2.0-tdi-ultra-163km-120kw",
                    label: "2.0 TDI ultra 163KM 120kW",
                  },
                  {
                    value: "3.0-tdi-245km-180kw",
                    label: "3.0 TDI 245KM 180kW",
                  },
                  {
                    value: "3.0-tdi-204km-150kw",
                    label: "3.0 TDI 204KM 150kW",
                  },
                  {
                    value: "3.0-tdi-clean-diesel-245km-180kw",
                    label: "3.0 TDI clean diesel 245KM 180kW",
                  },
                ],
              },
              {
                value: "s4-avant-facelift",
                label: "S4 Avant Facelifting (2012-2015)",
                engine: [
                  {
                    value: "3.0-tfsi-333km-245kw",
                    label: "3.0 TFSI 333KM 245kW",
                  },
                ],
              },
            ],
          },
          {
            value: "b9",
            label: "B9 (2015-present)",
            versions: [
              {
                value: "avant",
                label: "Avant (2015-2019)",
                engine: [
                  {
                    value: "1.4-tfsi-150km-110kw",
                    label: "1.4 TFSI 150KM 110kW",
                  },
                  {
                    value: "2.0-35-tfsi-150km-110kw",
                    label: "2.0 35 TFSI 150KM 110kW",
                  },
                  {
                    value: "2.0-40-tfsi-190km-140kw",
                    label: "2.0 40 TFSI 190KM 140kW",
                  },
                  {
                    value: "2.0-45-tfsi-245km-180kw",
                    label: "2.0 45 TFSI 245KM 180kW",
                  },
                  {
                    value: "2.0-tfsi-252km-185kw",
                    label: "2.0 TFSI 252KM 185kW",
                  },
                  {
                    value: "2.0-tfsi-ultra-190km-140kw",
                    label: "2.0 TFSI ultra 190KM 140kW",
                  },
                  {
                    value: "2.0-35-tdi-150km-110kw",
                    label: "2.0 35 TDI 150KM 110kW",
                  },
                  {
                    value: "2.0-40-tdi-190km-140kw",
                    label: "2.0 40 TDI 190KM 140kW",
                  },
                  {
                    value: "2.0-tdi-150km-110kw",
                    label: "2.0 TDI 150KM 110kW",
                  },
                  {
                    value: "2.0-tdi-190km-140kw",
                    label: "2.0 TDI 190KM 140kW",
                  },
                  {
                    value: "2.0-tdi-120km-88kw",
                    label: "2.0 TDI 120KM 88kW",
                  },
                  {
                    value: "2.0-tdi-ultra-150km-110kw",
                    label: "2.0 TDI ultra 150KM 110kW",
                  },
                  {
                    value: "3.0-tdi-272km-200kw",
                    label: "3.0 TDI 272KM 200kW",
                  },
                ],
              },
              {
                value: "Limousine",
                label: "Limousine (2015-2019)",
                engine: [
                  {
                    value: "1.4-tfsi-150km-110kw",
                    label: "1.4 TFSI 150KM 110kW",
                  },
                  {
                    value: "2.0-35-tfsi-150km-110kw",
                    label: "2.0 35 TFSI 150KM 110kW",
                  },
                  {
                    value: "2.0-40-tfsi-190km-140kw",
                    label: "2.0 40 TFSI 190KM 140kW",
                  },
                  {
                    value: "2.0-45-tfsi-245km-180kw",
                    label: "2.0 45 TFSI 245KM 180kW",
                  },
                  {
                    value: "2.0-tfsi-252km-185kw",
                    label: "2.0 TFSI 252KM 185kW",
                  },
                  {
                    value: "2.0-tfsi-ultra-190km-140kw",
                    label: "2.0 TFSI ultra 190KM 140kW",
                  },
                  {
                    value: "2.0-35-tdi-150km-110kw",
                    label: "2.0 35 TDI 150KM 110kW",
                  },
                  {
                    value: "2.0-40-tdi-190km-140kw",
                    label: "2.0 40 TDI 190KM 140kW",
                  },
                  {
                    value: "2.0-tdi-150km-110kw",
                    label: "2.0 TDI 150KM 110kW",
                  },
                  {
                    value: "2.0-tdi-190km-140kw",
                    label: "2.0 TDI 190KM 140kW",
                  },
                  {
                    value: "2.0-tdi-122km-90kw",
                    label: "2.0 TDI 122KM 90kW",
                  },
                  {
                    value: "2.0-tdi-ultra-150km-110kw",
                    label: "2.0 TDI ultra 150KM 110kW",
                  },
                  {
                    value: "3.0-tdi-272km-200kw",
                    label: "3.0 TDI 272KM 200kW",
                  },
                  {
                    value: "3.0-tdi-218km-160kw",
                    label: "3.0 TDI 218KM 160kW",
                  },
                ],
              },
              {
                value: "s4-avant",
                label: "S4 Avant (2016-2019)",
                engine: [
                  {
                    value: "3.0-tfsi-354km-260kw",
                    label: "3.0 TFSI 354KM 260kW",
                  },
                ],
              },
              {
                value: "s4-limousine",
                label: "S4 Limousine (2016-2019)",
                engine: [
                  {
                    value: "3.0-tfsi-354km-260kw",
                    label: "3.0 TFSI 354KM 260kW",
                  },
                ],
              },
              {
                value: "allroad-quattro",
                label: "Allroad Quattro (2016-2019)",
                engine: [
                  {
                    value: "2.0-45-tfsi-245km-180kw",
                    label: "2.0 45 TFSI 245KM 180kW",
                  },
                  {
                    value: "2.0-tfsi-252km-185kw",
                    label: "2.0 TFSI 252KM 185kW",
                  },
                  {
                    value: "2.0-tdi-190km-140kw",
                    label: "2.0 TDI 190KM 140kW",
                  },
                  {
                    value: "2.0-tdi-150km-110kw",
                    label: "2.0 TDI 150KM 110kW",
                  },
                ],
              },
              {
                value: "rs4-avant",
                label: "RS4 Avant (2017-2019)",
                engine: [
                  {
                    value: "2.9-tfsi-450km-331kw",
                    label: "2.9 TFSI 450KM 331kW",
                  },
                ],
              },
              {
                value: "s4-avant-facelift",
                label: "S4 Avant Facelifting (2019-present)",
                engine: [
                  {
                    value: "3.0-tdi-347km-255kw",
                    label: "3.0 TDI 347KM 255kW",
                  },
                  {
                    value: "3.0-tdi-341km-251kw",
                    label: "3.0 TDI 341KM 251kW",
                  },
                ],
              },
              {
                value: "s4-limousine-facelift",
                label: "S4 Limousine Facelift (2019-present)",
                engine: [
                  {
                    value: "3.0-tdi-347km-255kw",
                    label: "3.0 TDI 347KM 255kW",
                  },
                  {
                    value: "3.0-tdi-341km-251kw",
                    label: "3.0 TDI 341KM 251kW",
                  },
                ],
              },
              {
                value: "allroad-quattro-facelift",
                label: "Allroad Quattro Facelift (2019-present)",
                engine: [
                  {
                    value: "2.0-45-tfsi-245km-180kw",
                    label: "2.0 45 TFSI 245KM 180kW",
                  },
                  {
                    value: "2.0-45-tfsi-265km-195kw",
                    label: "2.0 45 TFSI 265KM 1195kW",
                  },
                  {
                    value: "2.0-40-tdi-190km-140kw",
                    label: "2.0 40 TDI 190KM 140kW",
                  },
                  {
                    value: "2.0-40-tdi-204km-150kw",
                    label: "2.0 40 TDI 204KM 150kW",
                  },
                ],
              },
              {
                value: "avant-facelift",
                label: "Avant Facelift (2019-present)",
                engine: [
                  {
                    value: "2.0-35-tfsi-150km-110kw",
                    label: "2.0 35 TFSI 150KM 110kW",
                  },
                  {
                    value: "2.0-40-tfsi-190km-140kw",
                    label: "2.0 40 TFSI 190KM 140kW",
                  },
                  {
                    value: "2.0-40-tfsi-204km-150kw",
                    label: "2.0 40 TFSI 204KM 150kW",
                  },
                  {
                    value: "2.0-45-tfsi-245km-180kw",
                    label: "2.0 45 TFSI 245KM 180kW",
                  },
                  {
                    value: "2.0-45-tfsi-265km-195kw",
                    label: "2.0 45 TFSI 265KM 195kW",
                  },
                  {
                    value: "2.0-30-tdi-136km-100kw",
                    label: "2.0 30 TDI 136KM 100kW",
                  },
                  {
                    value: "2.0-35-tdi-163km-120kw",
                    label: "2.0 35 TDI 163KM 120kW",
                  },
                  {
                    value: "2.0-40-tdi-190km-140kw",
                    label: "2.0 40 TDI 190KM 140kW",
                  },
                  {
                    value: "2.0-40-tdi-204km-150kw",
                    label: "2.0 40 TDI 204KM 150kW",
                  },
                ],
              },
              {
                value: "limousine-facelift",
                label: "Limousine Facelifting (2019-present)",
                engine: [
                  {
                    value: "2.0-35-tfsi-150km-110kw",
                    label: "2.0 35 TFSI 150KM 110kW",
                  },
                  {
                    value: "2.0-40-tfsi-190km-140kw",
                    label: "2.0 40 TFSI 190KM 140kW",
                  },
                  {
                    value: "2.0-40-tfsi-204km-150kw",
                    label: "2.0 40 TFSI 204KM 150kW",
                  },
                  {
                    value: "2.0-45-tfsi-245km-180kw",
                    label: "2.0 45 TFSI 245KM 180kW",
                  },
                  {
                    value: "2.0-45-tfsi-265km-195kw",
                    label: "2.0 45 TFSI 265KM 195kW",
                  },
                  {
                    value: "2.0-30-tdi-136km-100kw",
                    label: "2.0 30 TDI 136KM 100kW",
                  },
                  {
                    value: "2.0-35-tdi-163km-120kw",
                    label: "2.0 35 TDI 163KM 120kW",
                  },
                  {
                    value: "2.0-40-tdi-190km-140kw",
                    label: "2.0 40 TDI 190KM 140kW",
                  },
                  {
                    value: "2.0-40-tdi-204km-150kw",
                    label: "2.0 40 TDI 204KM 150kW",
                  },
                ],
              },
              {
                value: "rs4-avant-facelift",
                label: "RS4 Avant Facelifting (2020-present)",
                engine: [
                  {
                    value: "2.9-tfsi-450km-331kw",
                    label: "2.9 TFSI 450KM 331kW",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        value: "a5",
        label: "A5",
        generations: [
          {
            value: "I",
            label: "I (2007-2016)",
            versions: [
              {
                value: "coupe",
                label: "Coupe (2007-2011)",
                engine: [
                  {
                    value: "1.8-tfsi-170km-125kw",
                    label: "1.8 TFSI 170KM 125kW",
                  },
                  {
                    value: "1.8-tfsi-160km-118kw",
                    label: "1.8 TFSI 160KM 118kW",
                  },
                  {
                    value: "2.0-tfsi-180km-132kw",
                    label: "2.0 TFSI 180KM 132kW",
                  },
                  {
                    value: "2.0-tfsi-211km-155kw",
                    label: "2.0 TFSI 211KM 155kW",
                  },
                  {
                    value: "3.2-265km-195kw",
                    label: "3.2 265KM 195kW",
                  },
                  {
                    value: "2.0-tdi-170km-125kw",
                    label: "2.0 TDI 170KM 125kW",
                  },
                  {
                    value: "2.7-tdi-190km-140kw",
                    label: "2.7 TDI 190KM 140kW",
                  },
                  {
                    value: "3.0-tdi-240km-177kw",
                    label: "3.0 TDI 240KM 177kW",
                  },
                ],
              },
              {
                value: "coupe-facelift",
                label: "Coupe Facelifting (2011-2016)",
                engine: [
                  {
                    value: "1.8-tfsi-170km-125kw",
                    label: "1.8 TFSI 170KM 125kW",
                  },
                  {
                    value: "2.0-tfsi-211km-155kw",
                    label: "2.0 TFSI 211KM 155kW",
                  },
                  {
                    value: "2.0-tfsi-225km-165kw",
                    label: "2.0 TFSI 225KM 165kW",
                  },
                  {
                    value: "3.0-tfsi-272km-200kw",
                    label: "3.0 TFSI 272KM 200kW",
                  },
                  {
                    value: "2.0-tdi-177km-130kw",
                    label: "2.0 TDI 177KM 130kW",
                  },
                  {
                    value: "2.0-tdi-clean-diesel-190km-140kw",
                    label: "2.0 TDI clean diesel 190KM 140kW",
                  },
                  {
                    value: "2.0-tdi-ultra-163km-120kw",
                    label: "2.0 TDI ultra 163KM 120kW",
                  },
                  {
                    value: "3.0-tdi-245km-180kw",
                    label: "3.0 TDI 245KM 180kW",
                  },
                  {
                    value: "3.0-tdi-204km-150kw",
                    label: "3.0 TDI 204KM 150kW",
                  },
                  {
                    value: "3.0-tdi-218km-160kw",
                    label: "3.0 TDI 218KM 160kW",
                  },
                  {
                    value: "3.0-tdi-clean-diesel-245km-180kw",
                    label: "3.0 TDI clean diesel 245KM 180kW",
                  },
                ],
              },
              {
                value: "s5-coupe",
                label: "S5 Coupe (2007-2011)",
                engine: [
                  {
                    value: "4.2-354km-260kw",
                    label: "4.2 354KM 260kW",
                  },
                ],
              },
              {
                value: "s5-coupe-facelift",
                label: "S5 Coupe Facelifting (2011-2016)",
                engine: [
                  {
                    value: "3.0-tfsi-333km-245kw",
                    label: "3.0 TFSI 333KM 245kW",
                  },
                ],
              },

              {
                value: "rs5-coupe",
                label: "RS5 Coupe (2010-2012)",
                engine: [
                  {
                    value: "4.2-fsi-450km-331kw",
                    label: "4.2 FSI 450KM 331kW",
                  },
                ],
              },
              {
                value: "rs5-coupe-facelift",
                label: "RS5 Coupe Facelifting (2012-2016)",
                engine: [
                  {
                    value: "4.2-fsi-450km-331kw",
                    label: "4.2 FSI 450KM 331kW",
                  },
                ],
              },
              {
                value: "cabriolet",
                label: "Cabriolet (2008-2016)",
                engine: [
                  {
                    value: "2.0-tfsi-180km-132kw",
                    label: "2.0 TFSI 180KM 132kW",
                  },
                  {
                    value: "2.0-tfsi-211km-155kw",
                    label: "2.0 TFSI 211KM 155kW",
                  },
                  {
                    value: "3.2-265km-195kw",
                    label: "3.2 265KM 195kW",
                  },
                  {
                    value: "2.0-tdi-170km-125kw",
                    label: "2.0 TDI 170KM 125kW",
                  },
                  {
                    value: "2.7-tdi-190km-140kw",
                    label: "2.7 TDI 190KM 140kW",
                  },
                  {
                    value: "3.0-tdi-240km-177kw",
                    label: "3.0 TDI 240KM 177kW",
                  },
                ],
              },
              {
                value: "s5-cabriolet",
                label: "S5 Cabriolet (2008-2016)",
                engine: [
                  {
                    value: "3.0-tfsi-333km-245kw",
                    label: "3.0 TFSI 333KM 245kW",
                  },
                ],
              },
              {
                value: "rs5-cabrio-facelift",
                label: "RS5 Cabriolet Facelifting (2013-2016)",
                engine: [
                  {
                    value: "4.2-fsi-450km-331kw",
                    label: "4.2 FSI 450KM 331kW",
                  },
                ],
              },
              {
                value: "sportback",
                label: "Sportback (2009-2011)",
                engine: [
                  {
                    value: "2.0-tfsi-180km-132kw",
                    label: "2.0 TFSI 180KM 132kW",
                  },
                  {
                    value: "2.0-tfsi-211km-155kw",
                    label: "2.0 TFSI 211KM 155kW",
                  },
                  {
                    value: "3.2-265km-195kw",
                    label: "3.2 265KM 195kW",
                  },
                  {
                    value: "2.0-tdi-143km-105kw",
                    label: "2.0 TDI 143KM 105kW",
                  },
                  {
                    value: "2.0-tdi-170km-125kw",
                    label: "2.0 TDI 170KM 125kW",
                  },
                  {
                    value: "2.7-tdi-190km-140kw",
                    label: "2.7 TDI 190KM 140kW",
                  },
                  {
                    value: "3.0-tdi-240km-177kw",
                    label: "3.0 TDI 240KM 177kW",
                  },
                ],
              },
              {
                value: "s5-sportback",
                label: "S5 Sportback (2009-2011)",
                engine: [
                  {
                    value: "3.0-tfsi-333km-245kw",
                    label: "3.0 TFSI 333KM 245kW",
                  },
                ],
              },

              {
                value: "s5-cabrio-facelift",
                label: "S5 Cabrio Facelifting (2011-2016)",
                engine: [
                  {
                    value: "3.0-tfsi-333km-245kw",
                    label: "3.0 TFSI 333KM 245kW",
                  },
                ],
              },

              {
                value: "s5-sportback-facelift",
                label: "S5 Sportback Facelifting (2011-2016)",
                engine: [
                  {
                    value: "3.0-tfsi-333km-245kw",
                    label: "3.0 TFSI 333KM 245kW",
                  },
                ],
              },
              {
                value: "cabrio-facelift",
                label: "Cabrio Facelifting (2011-2016)",
                engine: [
                  {
                    value: "1.8-tfsi-170km-125kw",
                    label: "1.8 TFSI 170KM 125kW",
                  },
                  {
                    value: "2.0-tfsi-211km-155kw",
                    label: "2.0 TFSI 211KM 155kW",
                  },
                  {
                    value: "2.0-tfsi-225km-165kw",
                    label: "2.0 TFSI 225KM 165kW",
                  },
                  {
                    value: "3.0-tfsi-272km-200kw",
                    label: "3.0 TFSI 272KM 200kW",
                  },
                  {
                    value: "2.0-tdi-177km-130kw",
                    label: "2.0 TDI 177KM 130kW",
                  },
                  {
                    value: "2.0-tdi-143km-105kw",
                    label: "2.0 TDI 143KM 105kW",
                  },
                  {
                    value: "2.0-tdi-150km-110kw",
                    label: "2.0 TDI 150KM 110kW",
                  },
                  {
                    value: "2.0-tdi-clean-diesel-150km-110kw",
                    label: "2.0 TDI clean diesel 150KM 110kW",
                  },
                  {
                    value: "2.0-tdi-clean-diesel-190km-140kw",
                    label: "2.0 TDI clean diesel 190KM 140kW",
                  },
                  {
                    value: "3.0-tdi-245km-180kw",
                    label: "3.0 TDI 245KM 180kW",
                  },
                  {
                    value: "3.0-tdi-204km-150kw",
                    label: "3.0 TDI 204KM 150kW",
                  },
                  {
                    value: "3.0-tdi-clean-diesel-245km-180kw",
                    label: "3.0 TDI clean diesel 245KM 180kW",
                  },
                ],
              },
              {
                value: "sportback-facelift",
                label: "Sportback Facelifting (2011-2016)",
                engine: [
                  {
                    value: "1.8-tfsi-170km-125kw",
                    label: "1.8 TFSI 170KM 125kW",
                  },
                  {
                    value: "1.8-tfsi-144km-106kw",
                    label: "1.8 TFSI 144KM 106kW",
                  },
                  {
                    value: "2.0-tfsi-211km-155kw",
                    label: "2.0 TFSI 211KM 155kW",
                  },
                  {
                    value: "2.0-tfsi-225km-165kw",
                    label: "2.0 TFSI 225KM 165kW",
                  },
                  {
                    value: "3.0-tfsi-272km-200kw",
                    label: "3.0 TFSI 272KM 200kW",
                  },
                  {
                    value: "2.0-tdi-177km-130kw",
                    label: "2.0 TDI 177KM 130kW",
                  },
                  {
                    value: "2.0-tdi-143km-105kw",
                    label: "2.0 TDI 143KM 105kW",
                  },
                  {
                    value: "2.0-tdi-150km-110kw",
                    label: "2.0 TDI 150KM 110kW",
                  },
                  {
                    value: "2.0-tdi-136km-100kw",
                    label: "2.0 TDI 136KM 100kW",
                  },
                  {
                    value: "2.0-tdi-clean-diesel-150km-110kw",
                    label: "2.0 TDI clean diesel 150KM 110kW",
                  },
                  {
                    value: "2.0-tdi-clean-diesel-190km-140kw",
                    label: "2.0 TDI clean diesel 190KM 140kW",
                  },
                  {
                    value: "2.0-tdi-ultra-136km-100kw",
                    label: "2.0 TDI ultra 136KM 100kW",
                  },
                  {
                    value: "2.0-tdi-ultra-163km-120kw",
                    label: "2.0 TDI ultra 163KM 120kW",
                  },
                  {
                    value: "3.0-tdi-245km-180kw",
                    label: "3.0 TDI 245KM 180kW",
                  },
                  {
                    value: "3.0-tdi-204km-150kw",
                    label: "3.0 TDI 204KM 150kW",
                  },
                  {
                    value: "3.0-tdi-218km-160kw",
                    label: "3.0 TDI 218KM 160kW",
                  },
                  {
                    value: "3.0-tdi-clean-diesel-245km-180kw",
                    label: "3.0 TDI clean diesel 245KM 180kW",
                  },
                ],
              },
            ],
          },
          {
            value: "II",
            label: "II (2017-present)",
            versions: [
              {
                value: "s5-cabrio",
                label: "S5 Cabrio (2017-2018)",
                engine: [
                  {
                    value: "3.0-354km-260kw",
                    label: "3.0 354KM 260kW",
                  },
                ],
              },
              {
                value: "s5-coupe",
                label: "S5 Coupe (2017-2019)",
                engine: [
                  {
                    value: "3.0-tfsi-354km-260kw",
                    label: "3.0 TFSI 354KM 260kW",
                  },
                  {
                    value: "3.0-tdi-347km-260kw",
                    label: "3.0 TDI 347KM 260kW",
                  },
                ],
              },
              {
                value: "sportback",
                label: "Sportback (2017-2020)",
                engine: [
                  {
                    value: "1.4-tfsi-150km-110kw",
                    label: "1.4 TFSI 150KM 110kW",
                  },
                  {
                    value: "2.0-35-tfsi-150km-110kw",
                    label: "2.0 35 TFSI 150KM 110kW",
                  },
                  {
                    value: "2.0-40-tfsi-190km-140kw",
                    label: "2.0 40 TFSI 190KM 140kW",
                  },
                  {
                    value: "2.0-45-tfsi-245km-180kw",
                    label: "2.0 45 TFSI 245KM 180kW",
                  },
                  {
                    value: "2.0-tfsi-190km-140kw",
                    label: "2.0 TFSI 190KM 140kW",
                  },
                  {
                    value: "2.0-tfsi-252km-185kw",
                    label: "2.0 TFSI 252KM 185kW",
                  },
                  {
                    value: "2.0-40-tdi-190km-140kw",
                    label: "2.0 40 TDI 190KM 140kW",
                  },
                  {
                    value: "2.0-tdi-190km-140kw",
                    label: "2.0 TDI 190KM 140kW",
                  },
                  {
                    value: "2.0-tdi-150km-110kw",
                    label: "2.0 TDI 150KM 110kW",
                  },
                  {
                    value: "3.0-tdi-218km-160kw",
                    label: "3.0 TDI 218KM 160kW",
                  },
                  {
                    value: "3.0-tdi-286km-210kw",
                    label: "3.0 TDI 286KM 210kW",
                  },
                  {
                    value: "3.0-tdi-272km-200kw",
                    label: "3.0 TDI 272KM 200kW",
                  },
                ],
              },
              {
                value: "cabrio",
                label: "Cabrio (2017-2018)",
                engine: [
                  {
                    value: "2.0-tfsi-190km-140kw",
                    label: "2.0 TFSI 190KM 140kW",
                  },
                  {
                    value: "2.0-tfsi-252km-185kw",
                    label: "2.0 TFSI 252KM 185kW",
                  },
                  {
                    value: "2.0-tdi-190km-140kw",
                    label: "2.0 TDI 190KM 140kW",
                  },
                  {
                    value: "3.0-tdi-218km-160kw",
                    label: "3.0 TDI 218KM 160kW",
                  },
                ],
              },
              {
                value: "s5-sportback",
                label: "S5 Sportback (2017-2019)",
                engine: [
                  {
                    value: "3.0-tfsi-354km-260kw",
                    label: "3.0 TFSI 354KM 260kW",
                  },
                  {
                    value: "3.0-tdi-347km-260kw",
                    label: "3.0 TDI 347KM 260kW",
                  },
                ],
              },
              {
                value: "coupe",
                label: "Coupe (2017-2019)",
                engine: [
                  {
                    value: "1.4-tfsi-150km-110kw",
                    label: "1.4 TFSI 150KM 110kW",
                  },
                  {
                    value: "2.0-35-tfsi-150km-110kw",
                    label: "2.0 35 TFSI 150KM 110kW",
                  },
                  {
                    value: "2.0-40-tfsi-190km-140kw",
                    label: "2.0 40 TFSI 190KM 140kW",
                  },
                  {
                    value: "2.0-45-tfsi-245km-180kw",
                    label: "2.0 45 TFSI 245KM 180kW",
                  },
                  {
                    value: "2.0-tfsi-190km-140kw",
                    label: "2.0 TFSI 190KM 140kW",
                  },
                  {
                    value: "2.0-tfsi-252km-185kw",
                    label: "2.0 TFSI 252KM 185kW",
                  },
                  {
                    value: "2.0-40-tdi-190km-140kw",
                    label: "2.0 40 TDI 190KM 140kW",
                  },
                  {
                    value: "2.0-tdi-190km-140kw",
                    label: "2.0 TDI 190KM 140kW",
                  },
                  {
                    value: "2.0-tdi-150km-110kw",
                    label: "2.0 TDI 150KM 110kW",
                  },
                  {
                    value: "3.0-tdi-218km-160kw",
                    label: "3.0 TDI 218KM 160kW",
                  },
                  {
                    value: "3.0-tdi-286km-210kw",
                    label: "3.0 TDI 286KM 210kW",
                  },
                  {
                    value: "3.0-tdi-272km-200kw",
                    label: "3.0 TDI 272KM 200kW",
                  },
                ],
              },
              {
                value: "rs5-coupe",
                label: "RS5 Coupe (2017-2019)",
                engine: [
                  {
                    value: "2.9-tfsi-450km-331kw",
                    label: "2.9 TFSI 450KM 331kW",
                  },
                ],
              },
              {
                value: "rs5-sportback",
                label: "RS5 Sportback (2019-present)",
                engine: [
                  {
                    value: "2.9-tfsi-450km-331kw",
                    label: "2.9 TFSI 450KM 331kW",
                  },
                ],
              },
              {
                value: "s5-sportback-facelift",
                label: "S5 Sportback Facelifting (2019-present)",
                engine: [
                  {
                    value: "3.0-tdi-347km-255kw",
                    label: "3.0 TDI 347KM 255kW",
                  },
                ],
              },
              {
                value: "s5-coupe-facelift",
                label: "S5 Coupe Facelifting (2019-present)",
                engine: [
                  {
                    value: "3.0-tdi-347km-255kw",
                    label: "3.0 TDI 347KM 255kW",
                  },
                ],
              },
              {
                value: "rs5-coupe-facelift",
                label: "RS5 Coupe Facelifting (2020-present)",
                engine: [
                  {
                    value: "2.9-tfsi-450km-331kw",
                    label: "2.9 TFSI 450KM 331kW",
                  },
                ],
              },
              {
                value: "sportback-facelift",
                label: "Sportback Facelifting (2020-present)",
                engine: [
                  {
                    value: "2.0-35-tfsi-150km-110kw",
                    label: "2.0 35 TFSI 150KM 110kW",
                  },
                  {
                    value: "2.0-40-tfsi-190km-140kw",
                    label: "2.0 40 TFSI 190KM 140kW",
                  },
                  {
                    value: "2.0-40-tfsi-204km-150kw",
                    label: "2.0 40 TFSI 204KM 150kW",
                  },
                  {
                    value: "2.0-45-tfsi-245km-180kw",
                    label: "2.0 45 TFSI 245KM 180kW",
                  },
                  {
                    value: "2.0-45-tfsi-265km-195kw",
                    label: "2.0 45 TFSI 265KM 195kW",
                  },
                  {
                    value: "2.0-35-tdi-163km-120kw",
                    label: "2.0 35 TDI 163KM 120kW",
                  },
                  {
                    value: "2.0-40-tdi-190km-140kw",
                    label: "2.0 40 TDI 190KM 140kW",
                  },
                  {
                    value: "2.0-40-tdi-204km-150kw",
                    label: "2.0 40 TDI 204KM 150kW",
                  },
                ],
              },
              {
                value: "coupe-facelift",
                label: "Coupe Facelifting (2020-present)",
                engine: [
                  {
                    value: "2.0-35-tfsi-150km-110kw",
                    label: "2.0 35 TFSI 150KM 110kW",
                  },
                  {
                    value: "2.0-40-tfsi-190km-140kw",
                    label: "2.0 40 TFSI 190KM 140kW",
                  },
                  {
                    value: "2.0-40-tfsi-204km-150kw",
                    label: "2.0 40 TFSI 204KM 150kW",
                  },
                  {
                    value: "2.0-45-tfsi-245km-180kw",
                    label: "2.0 45 TFSI 245KM 180kW",
                  },
                  {
                    value: "2.0-45-tfsi-265km-195kw",
                    label: "2.0 45 TFSI 265KM 195kW",
                  },
                  {
                    value: "2.0-35-tdi-163km-120kw",
                    label: "2.0 35 TDI 163KM 120kW",
                  },
                  {
                    value: "2.0-40-tdi-190km-140kw",
                    label: "2.0 40 TDI 190KM 140kW",
                  },
                  {
                    value: "2.0-40-tdi-204km-150kw",
                    label: "2.0 40 TDI 204KM 150kW",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        value: "a6",
        label: "A6",
        generations: [
          {
            value: "c4",
            label: "C4 (1994-1997)",
            versions: [
              {
                value: "avant",
                label: "Avant (1994-1997)",
                engine: [
                  {
                    value: "1.8-20v-125km-92kw",
                    label: "1.8 20V 125KM 92kW",
                  },
                  {
                    value: "1.8-20v-quattro-125km-92kw",
                    label: "1.8 20V quattro 125KM 92kW",
                  },
                  {
                    value: "2.0-101km-74kw",
                    label: "2.0 101KM 74kW",
                  },
                  {
                    value: "2.0-115km-85kw",
                    label: "2.0 115KM 85kW",
                  },
                  {
                    value: "2.0-16v-140km-103kw",
                    label: "2.0 16V 140KM 103kW",
                  },
                  {
                    value: "2.0-16v-quattro-140km-103kw",
                    label: "2.0 16V quattro 140KM 103kW",
                  },
                  {
                    value: "2.3-133km-98kw",
                    label: "2.3 133KM 98kW",
                  },
                  {
                    value: "2.3-quattro-133km-98kw",
                    label: "2.3 quattro 133KM 98kW",
                  },
                  {
                    value: "2.6-v6-150km-110kw",
                    label: "2.6 V6 150KM 110kW",
                  },
                  {
                    value: "2.6-v6-quattro-150km-110kw",
                    label: "2.6 V6 quattro 150KM 110kW",
                  },
                  {
                    value: "2.8-v6-174km-128kw",
                    label: "2.8 V6 174KM 128kW",
                  },
                  {
                    value: "2.8-v6-30v-193km-142kw",
                    label: "2.8 V6 30V 193KM 142kW",
                  },
                  {
                    value: "2.8-v6-30v-quattro-193km-142kw",
                    label: "2.8 V6 30V quattro 193KM 142kW",
                  },
                  {
                    value: "2.8-v6-quattro-174km-128kw",
                    label: "2.8 V6 quattro 174KM 128kW",
                  },
                  {
                    value: "1.9-tdi-90km-66kw",
                    label: "1.9 TDI 90KM 66kW",
                  },
                  {
                    value: "2.5-tdi-115km-85kw",
                    label: "2.5 TDI 115KM 85kW",
                  },
                  {
                    value: "2.5-tdi-140km-103kw",
                    label: "2.5 TDI 140KM 103kW",
                  },
                  {
                    value: "2.5-tdi-quattro-140km-103kw",
                    label: "2.5 TDI quattro 140KM 103kW",
                  },
                ],
              },
              {
                value: "sedan",
                label: "Sedan (1994-1997)",
                engine: [
                  {
                    value: "1.8-20v-125km-92kw",
                    label: "1.8 20V 125KM 92kW",
                  },
                  {
                    value: "1.8-20v-quattro-125km-92kw",
                    label: "1.8 20V quattro 125KM 92kW",
                  },
                  {
                    value: "2.0-101km-74kw",
                    label: "2.0 101KM 74kW",
                  },
                  {
                    value: "2.0-115km-85kw",
                    label: "2.0 115KM 85kW",
                  },
                  {
                    value: "2.0-16v-140km-103kw",
                    label: "2.0 16V 140KM 103kW",
                  },
                  {
                    value: "2.0-16v-quattro-140km-103kw",
                    label: "2.0 16V quattro 140KM 103kW",
                  },
                  {
                    value: "2.3-133km-98kw",
                    label: "2.3 133KM 98kW",
                  },
                  {
                    value: "2.3-quattro-133km-98kw",
                    label: "2.3 quattro 133KM 98kW",
                  },
                  {
                    value: "2.6-v6-150km-110kw",
                    label: "2.6 V6 150KM 110kW",
                  },
                  {
                    value: "2.6-v6-quattro-150km-110kw",
                    label: "2.6 V6 quattro 150KM 110kW",
                  },
                  {
                    value: "2.8-v6-174km-128kw",
                    label: "2.8 V6 174KM 128kW",
                  },
                  {
                    value: "2.8-v6-30v-193km-142kw",
                    label: "2.8 V6 30V 193KM 142kW",
                  },
                  {
                    value: "2.8-v6-30v-quattro-193km-142kw",
                    label: "2.8 V6 30V quattro 193KM 142kW",
                  },
                  {
                    value: "2.8-v6-quattro-174km-128kw",
                    label: "2.8 V6 quattro 174KM 128kW",
                  },
                  {
                    value: "1.9-tdi-90km-66kw",
                    label: "1.9 TDI 90KM 66kW",
                  },
                  {
                    value: "2.5-tdi-115km-85kw",
                    label: "2.5 TDI 115KM 85kW",
                  },
                  {
                    value: "2.5-tdi-140km-103kw",
                    label: "2.5 TDI 140KM 103kW",
                  },
                  {
                    value: "2.5-tdi-quattro-140km-103kw",
                    label: "2.5 TDI quattro 140KM 103kW",
                  },
                ],
              },
              {
                value: "s6-sedan",
                label: "S6 Sedan (1994-1997)",
                engine: [
                  {
                    value: "2.2-turbo-230km-169kw",
                    label: "2.2 Turbo 230KM 169kW",
                  },
                  {
                    value: "4.2-v8-326km-240kw",
                    label: "4.2 V8 326KM 240kW",
                  },
                  {
                    value: "4.2-v8-290km-213kw",
                    label: "4.2 V8 290KM 213kW",
                  },
                ],
              },
              {
                value: "s6-avant",
                label: "S6 Avant (1994-1997)",
                engine: [
                  {
                    value: "2.2-turbo-230km-169kw",
                    label: "2.2 Turbo 230KM 169kW",
                  },
                  {
                    value: "4.2-v8-326km-240kw",
                    label: "4.2 V8 326KM 240kW",
                  },
                  {
                    value: "4.2-v8-290km-213kw",
                    label: "4.2 V8 290KM 213kW",
                  },
                ],
              },
            ],
          },
          {
            value: "c5",
            label: "C5 (1997-2005)",
            versions: [
              {
                value: "avant",
                label: "Avant (1997-2005)",
                engine: [
                  {
                    value: "1.8-125km-92kw",
                    label: "1.8 125KM 92kW",
                  },
                  {
                    value: "1.8-t-150km-110kw",
                    label: "1.8 T 150KM 110kW",
                  },
                  {
                    value: "1.8-t-180km-132kw",
                    label: "1.8 T 180KM 132kW",
                  },
                  {
                    value: "1.8-t-quattro-150km-110kw",
                    label: "1.8 T quattro 150KM 110kW",
                  },
                  {
                    value: "1.8-t-quattro-180km-132kw",
                    label: "1.8 T quattro 180KM 132kW",
                  },
                  {
                    value: "2.0-130km-96kw",
                    label: "2.0 130KM 96kW",
                  },
                  {
                    value: "2.4-quattro-165km-121kw",
                    label: "2.4 Quattro 165KM 121kW",
                  },
                  {
                    value: "2.4-quattro-170km-125kw",
                    label: "2.4 Quattro 170KM 125kW",
                  },
                  {
                    value: "2.4-v6-170km-125kw",
                    label: "2.4 V6 170KM 125kW",
                  },
                  {
                    value: "2.4-v6-165km-121kw",
                    label: "2.4 V6 165KM 121kW",
                  },
                  {
                    value: "2.7-t-quattro-230km-169kw",
                    label: "2.7 T quattro 230KM 169kW",
                  },
                  {
                    value: "2.7-v6-biturbo-230km-169kw",
                    label: "2.7 V6 biturbo 230KM 169kW",
                  },
                  {
                    value: "2.7-v6-biturbo-250km-184kw",
                    label: "2.7 V6 biturbo 250KM 184kW",
                  },
                  {
                    value: "2.8-v30-quattro-193km-142kw",
                    label: "2.8 V30 quattro 193KM 142kW",
                  },
                  {
                    value: "2.8-v6-193km-142kw",
                    label: "2.8 V6 193KM 142kW",
                  },
                  {
                    value: "3.0-v6-220km-162kw",
                    label: "3.0 V6 220KM 162kW",
                  },
                  {
                    value: "3.7-v8-260km-191kw",
                    label: "3.7 V8 260KM 191kW",
                  },
                  {
                    value: "4.2-v8-300km-221kw",
                    label: "4.2 V8 300KM 221kW",
                  },
                  {
                    value: "1.9-tdi-110km-81kw",
                    label: "1.9 TDI 110KM 81kW",
                  },
                  {
                    value: "1.9-tdi-130km-96kw",
                    label: "1.9 TDI 130KM 96kW",
                  },
                  {
                    value: "1.9-tdi-115km-85kw",
                    label: "1.9 TDI 115KM 85kW",
                  },
                  {
                    value: "2.5-tdi-180km-132kw",
                    label: "2.5 TDI 180KM 132kW",
                  },
                  {
                    value: "2.5-tdi-quattro-150km-110kw",
                    label: "2.5 TDI quattro 150KM 110kW",
                  },
                  {
                    value: "2.5-v6-tdi-150km-110kw",
                    label: "2.5 V6 TDI 150KM 110kW",
                  },
                  {
                    value: "2.5-v6-tdi-155km-114kw",
                    label: "2.5 V6 TDI 155KM 114kW",
                  },
                  {
                    value: "2.5-v6-tdi-180km-132kw",
                    label: "2.5 V6 TDI 180KM 132kW",
                  },
                  {
                    value: "2.5-v6-tdi-163km-120kw",
                    label: "2.5 V6 TDI 163KM 120kW",
                  },
                ],
              },
              {
                value: "sedan",
                label: "Sedan (1997-2004)",
                engine: [],
              },
              {
                value: "s6-avant",
                label: "S6 Avant (1999-2004)",
                engine: [],
              },
              {
                value: "s6-sedan",
                label: "S6 Sedan (1999-2004)",
                engine: [],
              },
              {
                value: "rs6-sedan",
                label: "RS6 Sedan (2002-2004)",
                engine: [],
              },
              {
                value: "rs6-avant",
                label: "RS6 Avant (2002-2004)",
                engine: [],
              },
            ],
          },
          {
            value: "c6",
            label: "C6 (2004-2011)",
            versions: [],
          },
          {
            value: "c7",
            label: "C7 (2011-2007)",
            versions: [],
          },
          {
            value: "c8",
            label: "C8 (2018-present)",
            versions: [],
          },
        ],
      },
    ],
  },
  {
    value: "bmw",
    label: "BMW",
    models: [{}],
  },
];
