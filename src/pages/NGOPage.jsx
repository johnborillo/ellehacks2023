import React from "react";
import { Modal, Typography, Box } from "@material-ui/core";

function NGOPage(props) {
  // Dummy data for an NGO
  const ngo = [
    // NGO data here
    {
      id: 1,
      name: "World Medical Relief",
      description:
        "World Medical Relief is a humanitarian organization that delivers medical supplies and equipment to disaster areas and poverty-stricken countries. Our mission is to improve the health and well-being of people around the world.",
      revenue: "$5,000,000",
      expenses: "$4,500,000",
      programPercentage: 80,
      administrativePercentage: 10,
      fundraisingPercentage: 10,
      mission:
        "Our mission is to improve the health and well-being of people around the world by delivering medical supplies and equipment to disaster areas and poverty-stricken countries.",
      impact:
        "Since our founding in 1953, World Medical Relief has delivered medical aid to more than 100 countries, providing essential supplies and equipment to people in need.",
      address: "21725 Melrose Ave, Southfield, MI 48075",
      phone: "248-592-9500",
      email: "info@worldmedicalrelief.org",
      website: "www.worldmedicalrelief.org",
    },
    {
      id: 2,
      name: "Save The Children",
      description:
        "Save The Children is an international organization that works to improve the lives of children around the world. We provide education, health care, and emergency aid to children in need.",
      revenue: "$1,500,000,000",
      expenses: "$1,400,000,000",
      programPercentage: 86,
      administrativePercentage: 8,
      fundraisingPercentage: 6,
      mission:
        "Our mission is to improve the lives of children around the world by providing education, health care, and emergency aid to children in need.",
      impact:
        "Save The Children has helped millions of children around the world by providing essential services like education, health care, and emergency aid.",
      address: "501 Kings Highway East, Suite 400, Fairfield, CT 06825",
      phone: "1-800-728-3843",
      email: "supportercare@savechildren.org",
      website: "www.savethechildren.org",
    },
    {
      id: 3,
      name: "Action Against Hunger",
      description:
        "Action Against Hunger is a global humanitarian organization that fights hunger and provides safe water, sanitation, and hygiene to vulnerable communities. Our mission is to save lives and eradicate hunger and malnutrition.",
      revenue: "$500,000,000",
      expenses: "$450,000,000",
      programPercentage: 87,
      administrativePercentage: 8,
      fundraisingPercentage: 5,
      mission:
        "Our mission is to save lives and eradicate hunger and malnutrition by fighting hunger and providing safe water, sanitation, and hygiene to vulnerable communities.",
      impact:
        "Action Against Hunger has helped millions of people around the world by providing essential services like food, water, sanitation, and hygiene.",
      address: "One Whitehall Street, 2nd Floor, New York, NY 10004",
      phone: "1-212-967-7800",
      email: "info@actionagainsthunger.org",
      website: "www.actionagainsthunger.org",
    },
    {
      id: 4,
      name: "Doctors Without Borders",
      description:
        "Doctors Without Borders is an international medical humanitarian organization that provides emergency medical care and assistance to people affected by conflict, epidemics, disasters, or exclusion from health care. Our mission is to save lives and alleviate suffering.",
      revenue: "$1,800,000,000",
      expenses: "$1,700,000,000",
      programPercentage: 88,
      administrativePercentage: 6,
      fundraisingPercentage: 6,
      mission:
        "Our mission is to save lives and alleviate suffering by providing emergency medical care and assistance to people affected by conflict, epidemics, disasters, or exclusion from health care.",
      impact:
        "Doctors Without Borders has helped millions of people around the world by providing essential medical care and assistance in crisis situations.",
      address: "40 Rector Street, 16th Floor, New York, NY 10006",
      phone: "1-888-392-0392",
      email: "questions@newyork.msf.org",
      website: "www.doctorswithoutborders.org",
    },
  ];

  return (
    <Modal open={props.open} onClose={props.onClose}>
      <Box bgcolor="white" p={2}>
        <Typography variant="h4">{ngo.name}</Typography>
        <Typography variant="body1">{ngo.description}</Typography>
        <Box mt={2}>
          <Typography variant="h6">Financials</Typography>
          <Typography variant="body1">Revenue: {ngo.revenue}</Typography>
          <Typography variant="body1">Expenses: {ngo.expenses}</Typography>
          <Typography variant="body1">
            Program Percentage: {ngo.programPercentage}%
          </Typography>
          <Typography variant="body1">
            Administrative Percentage: {ngo.administrativePercentage}%
          </Typography>
          <Typography variant="body1">
            Fundraising Percentage: {ngo.fundraisingPercentage}%
          </Typography>
        </Box>
        <Box mt={2}>
          <Typography variant="h6">Mission and Impact</Typography>
          <Typography variant="body1">{ngo.mission}</Typography>
          <Typography variant="body1">{ngo.impact}</Typography>
        </Box>
        <Box mt={2}>
          <Typography variant="h6">Contact Information</Typography>
          <Typography variant="body1">Address: {ngo.address}</Typography>
          <Typography variant="body1">Phone: {ngo.phone}</Typography>
          <Typography variant="body1">Email: {ngo.email}</Typography>
          <Typography variant="body1">Website: {ngo.website}</Typography>
        </Box>
      </Box>
    </Modal>
  );
}

export default NGOPage;
