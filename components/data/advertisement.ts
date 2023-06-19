export interface iCar {
  id: number;
  body: string;
  brand: string;
  model: string;
  generation: string;
  version: string;
  capacity: string;
  power: number;
  gearbox: string;
  drive: string;
  fuel: string;
  mileage: number;
  productionYear: number;
  price: number;
  isDamage: boolean;
  vin: string;
  status: string;
  images: string[];
  registrationDate: string;
  seller_name: string;
  seller_phone: string;
  seller_map: string;
}

const advert: iCar[] = [
  {
    id: 1,
    body: "Sedan",
    brand: "Audi",
    model: "A7",
    generation: "I (2010-2017)",
    version: "Sportback (2010-2014)",
    capacity: "3.0",
    power: 245,
    gearbox: "Automatic",
    drive: "4x4",
    fuel: "Diesel",
    mileage: 278000,
    productionYear: 2011,
    price: 69900,
    isDamage: false,
    registrationDate: "11/01/2011",
    vin: "WAUZZZ4GXBN025127",
    status: "used",
    images: [
      "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InhjOXE2cHVmeXN4NjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.tMKiWMJpIYLreXSfWe5nhLvt5aJJt5KOfNw9ZcKFtE0/image;s=1080x720",
      "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImttZzc2Y290a25oNi1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.NCcDfh3aebw9X4jcLa6CwssNOa6lyVFZQkqzcELxnl0/image;s=1080x720",
      "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InI1bGtqMGxneW90eTItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.A18mPQHZEnr-19qP-wK0OPQN2bAHczGVfuWoLZ0deIg/image;s=1080x720",
      "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IngzMmZ4NnZsc2p4ejEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.ohm3eW3WAX5H2rGD_MRBReYHc5h6vszTMzF0t9O4epw/image;s=1080x720",
      "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImwwdDloMHI5YXBhczMtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.IumNZqolV6Av_c6TnIyT8fuM1Tq0hYshPfht-bAYH8Y/image;s=1080x720",
    ],
    seller_name: "Patryk",
    seller_map: "Zabrze, Śląskie",
    seller_phone: "505035557",
  },
  {
    id: 2,
    body: "Coupe",
    brand: "Audi",
    model: "A5",
    generation: "I (2007-2016)",
    version: "RS5 Coupe Facelifting (2012-2016)",
    capacity: "4.2",
    power: 450,
    gearbox: "Automatic",
    drive: "4x4",
    fuel: "Gasoline",
    mileage: 77000,
    productionYear: 2014,
    price: 180000,
    isDamage: false,
    registrationDate: "02/01/2014",
    vin: "WBA5R1C05LFH59123",
    status: "used",
    images: [
      "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InZ4bTFkN2Ywa2t5bjEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.O1tRdHcqAojRtoJqEAKcmDODDNR9Y7AXZzmDC3SvdJI/image;s=640x480",
      "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjI5eWx0aTFqOXplZjMtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.3vFaGL_1A0V78pUhJwyUo4FqDCscxDFjVXN2AIZCcZw/image;s=1080x720",
      "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjZrOHdmM2Fha2FwdS1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.6NRxrSXRiHUCVjboCL-AHs7h12wEpBxdnwSkfCRGeSA/image;s=1080x720",
      "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InRjMnhpcWp1bzV2bDItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.jzlo7u_-Tix_Kv4izpHwLY1MFCaj6s262SfdY867RdM/image;s=1080x720",
      "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjN2MXFsbHlxaDVlcjMtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.iMLfauNYe5zpkmXIKirsup9BGMqwRiVy07ZVJ79jNsM/image;s=1080x720",
    ],
    seller_name: "Michał",
    seller_phone: "530515071",
    seller_map: "Warszawa, Mazowieckie, Wawer",
  },
  {
    id: 3,
    body: "Sedan",
    brand: "Audi",
    model: "A6",
    generation: "C7 (2011-2017)",
    version: "S6 Limousine (2013-2014)",
    capacity: "4.0",
    power: 420,
    gearbox: "Automatic",
    drive: "4x4",
    fuel: "Gasoline",
    isDamage: false,
    registrationDate: "02/01/2013",
    vin: "WAUF2AFC2DN021238",
    status: "used",
    mileage: 170000,
    productionYear: 2013,
    price: 125000,
    images: [
      "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InBkZ20zaW1xMHdlYy1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.4SJYu_j7op9Md86Q_5fM4wIltjqSFtJa9Un9AJ8gXac/image;s=1080x720",
      "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InQwb3o2emZ6eHF0aTEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.J2Tw0-Edo3eMtoAKu4ka1aTBpCKjIZAG0svogZsyQu4/image;s=1080x720",
      "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImZjZWU4MHcwZ3p5bjMtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.9fYNHP9oowDcWKxRRnfPHwXXifDsR5BtPXqJqHgUUuU/image;s=1080x720",
      "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImdmN3Z1ZDYyeG4xNjEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.r6Scoe09XSoA8s0vYa9ziwg656HCSWKTtNvspD4Yuhw/image;s=1080x720",
      "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Im9yNmljenlsbmM5YzEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.-7WIDmitRd1FnGjmhwygAr48ZJAX-vLn9-UrTsKeFJg/image;s=1080x720",
    ],
    // ABOUT SELLER
    seller_name: "Michał",
    seller_phone: "694978560",
    seller_map: "Strachówka, wołomiński, Mazowieckie",
  },
  {
    id: 4,
    body: "Sedan",
    brand: "BMW",
    model: "4 Series",
    generation: "G26",
    version: "Gran Coupe (2021-present)",
    capacity: "2.0",
    power: 245,
    gearbox: "Automatic",
    drive: "4x4",
    fuel: "Gasoline",
    mileage: 4000,
    productionYear: 2023,
    price: 264000,
    isDamage: false,
    vin: "WBA71AV050FP53026",
    status: "used",
    images: [
      "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjhiejJ2aHJ4cmdsYS1PVE9NT1RPUEwifQ.9jF4Ar4S1k7OVpPsjLvV6ZJLE7W13ygSjjxZoKe72PY/image;s=2048x1360",
      "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Imd1NmpwcTI2dTg0MjMtT1RPTU9UT1BMIn0.30QYeSABj_BOQL9cUBSH0a0uLN4zSupUj-AiKS0UT10/image;s=2048x1360",
      "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImZoZ3V6dmE5bTBuZjMtT1RPTU9UT1BMIn0.3PjepGlTGp0UHOaqS-bhxqIhre8i3u2kLtJtRfeeQYs/image;s=2048x1360",
      "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjhiYm5kOWxkYWtjZC1PVE9NT1RPUEwifQ.ouDeps4z190XbW_tR5Ui_nu29YEFUtJtP1MJ44hDv9o/image;s=2048x1360",
      "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjVwbWI0c2wydmQwNDEtT1RPTU9UT1BMIn0.dj-B3CmFAxbQPOawFzlgJfin7RvFBTC9AG8ThRsBO1E/image;s=2048x1360",
      "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImlzbnI3OGJqdjgzdDItT1RPTU9UT1BMIn0.tcHpe8jBcv1MDzpOHo5rnsb2w8iyiTsuOGOZDw8hOME/image;s=2048x1360",
      "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImphaWVoZnowY2s1ay1PVE9NT1RPUEwifQ.g3kh_DogFx-rsF6gC8aOvLxv7tUP-QDHxGOV8lQW8GU/image;s=2048x1360",
    ],
    registrationDate: "02/03/2023",
    seller_name: "Artur",
    seller_phone: "666214508",
    seller_map: "Przasnysz, przasnyski, Mazowieckie",
  },
  {
    id: 5,
    body: "SUV",
    brand: "Mercedes-Benz",
    model: "G Class",
    generation: "W483 (2018-present)",
    version: "400d",
    capacity: "2 925",
    power: 330,
    gearbox: "Automatic",
    drive: "4x4 (automatically included)",
    fuel: "Diesel",
    mileage: 4200,
    productionYear: 2022,
    price: 789000,
    isDamage: false,
    vin: "W1N4633501X427291",
    status: "used",
    registrationDate: "22/02/2022",
    images: [
      "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InV4dWY0dHQyOG92LU9UT01PVE9QTCJ9.hV8Yp-WmWj3JSqSjBDCO-rCYB8CPcQjonbsrJmmk_aA/image;s=2048x1360",
      "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InFzdXFxaTUydmphazEtT1RPTU9UT1BMIn0.G7GtnG90mBVYnXxM1pK5Ce-aBJ6rpg9xZumK9uRY33Q/image;s=2048x1360",
      "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImR2aDdwZGY1d3Y0YTItT1RPTU9UT1BMIn0.tpx6rDNpQ8rWzKDcX25XeV4dvtK2V1L52l82keVoCpA/image;s=2048x1360",
      "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImphOTJjanVybmM1bC1PVE9NT1RPUEwifQ.3sLNXLQ6CJyR7i3HUi6151RDiEwspX5l34kjb6Igl00/image;s=2048x1360",
      "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Im5sNWYweTM2YnZ6ajEtT1RPTU9UT1BMIn0.ctHixhtmAg3Evq3gX4a_U7gFywup8sTIraRhlnL_orI/image;s=2048x1360",
      "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InU1OHhndTVyamplbDEtT1RPTU9UT1BMIn0.1JZliUjC2dOd_V8LpnC0JG95E40MEle8a3Axn2KFPFk/image;s=2048x1360",
      "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjNoZzhxcDZxdnhheS1PVE9NT1RPUEwifQ.0bKzAvYJY3rGAPdLBhDW2J3AAuAwiHKYuDknCIz5MN4/image;s=2048x1360",
    ],
    seller_name:
      "Auto Idea Autoryzowany Dealer Mercedes-Benz Łomianki / Białystok / Olsztyn.",
    seller_map:
      "Brukowa 46 - 05-092 Łomianki, warszawski zachodni, Mazowieckie (Polska)",
    seller_phone: "776512344",
  },
];

export default advert;
