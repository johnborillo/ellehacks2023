import React from "react";
import CharityItem from "../components/CharityItem";
import { Grid } from "@mui/material";

const CharityList = [
  {
    id: 1,
    name: "World Medical Relief",
    image:
      "https://gpmchurch.org/wp-content/uploads/2021/08/World-Medical-Relief-400x300.jpg",
    email: "info@worldmedicalrelief.org",
    description:
      "Since 1953, World Medical Relief has provided medical assistance to those in most need. In addition to monetary donations, we accept donations of medical supplies, prescriptions and various items on our wish list.",
    revenue: 5000000,
    expenses: 4500000,
    programPercentage: 80,
    administrativePercentage: 10,
    fundraisingPercentage: 10,
    mission:
      "Our mission is to improve the health and well-being of people around the world by delivering medical supplies and equipment to disaster areas and poverty-stricken countries.",
    impact:
      "Since our founding in 1953, World Medical Relief has delivered medical aid to more than 100 countries, providing essential supplies and equipment to people in need.",
    address: "21725 Melrose Ave, Southfield, MI 48075",
    phone: "248-592-9500",
    website: "www.worldmedicalrelief.org",
  },
  {
    id: 2,
    name: "Save the Children",
    image:
      "https://www.healthynewbornnetwork.org/hnn-content/uploads/SC_USA_Logo_RedBlack_Stacked-003.jpg",
    email: "info@savethechildren.ca",
    description:
      "For over 100 years, we’ve advanced children’s rights around the world. We do whatever it takes every day and in times of crisis — to give children a healthy start in life, the opportunity to learn and protection from harm. We strive to ensure children’s unique needs are met and their voices are heard— transforming their lives and the future we share. Because we believe every girl and boy has the right to survive and thrive.",
    revenue: 1500000000,
    expenses: 1400000000,
    programPercentage: 86,
    administrativePercentage: 8,
    fundraisingPercentage: 6,
    mission:
      "Our mission is to improve the lives of children around the world by providing education, health care, and emergency aid to children in need.",
    impact:
      "Save The Children has helped millions of children around the world by providing essential services like education, health care, and emergency aid.",
    address: "501 Kings Highway East, Suite 400, Fairfield, CT 06825",
    phone: "1-800-728-3843",
    website: "www.savethechildren.org",
  },
  {
    id: 3,
    name: "Action Against Hunger",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/19/Eng_Col_RGB_-_Copy.png",
    email: " info@actionagainsthunger.org",
    description:
      "Action Against Hunger is a global humanitarian organization that takes decisive action against the causes and effects of hunger.",
    revenue: 500000000,
    expenses: 450000000,
    programPercentage: 87,
    administrativePercentage: 8,
    fundraisingPercentage: 5,
    mission:
      "Our mission is to save lives and eradicate hunger and malnutrition by fighting hunger and providing safe water, sanitation, and hygiene to vulnerable communities.",
    impact:
      "Action Against Hunger has helped millions of people around the world by providing essential services like food, water, sanitation, and hygiene.",
    address: "One Whitehall Street, 2nd Floor, New York, NY 10004",
    phone: "1-212-967-7800",
    website: "www.actionagainsthunger.org",
  },
  {
    id: 4,
    name: "Doctor Without Borders",
    image: "https://www.msf.org/themes/custom/msf_theme/ogimage.jpg",
    email: " questions@newyork.msf.org",
    description:
      "Founded to save lives and speak out, Doctors Without Borders has helped tens of millions of people since 1971. The 13 founders have grown to over 36,000 staff on the frontline of emergency medical aid.",
    revenue: 1800000000,
    expenses: 1700000000,
    programPercentage: 88,
    administrativePercentage: 6,
    fundraisingPercentage: 6,
    mission:
      "Our mission is to save lives and alleviate suffering by providing emergency medical care and assistance to people affected by conflict, epidemics, disasters, or exclusion from health care.",
    impact:
      "Doctors Without Borders has helped millions of people around the world by providing essential medical care and assistance in crisis situations.",
    address: "40 Rector Street, 16th Floor, New York, NY 10006",
    phone: "1-888-392-0392",
    website: "www.doctorswithoutborders.org",
  },
];

const CharitySummaryPage = () => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "space-around",
        width: "90%",
      }}
    >
      {CharityList.map((charity) => (
        <Grid
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CharityItem charity={charity} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CharitySummaryPage;
