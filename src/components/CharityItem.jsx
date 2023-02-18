import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import ReactEcharts from "echarts-for-react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CharityItem = ({ charity }) => {
  const {
    image,
    name,
    email,
    mission,
    impact,
    address,
    phone,
    website,
    revenue,
    expenses,
    fundraisingPercentage,
    administrativePercentage,
    programPercentage,
  } = charity;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const option1 = {
    xAxis: {
      type: "category",
      data: ["revenue", "expenses"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [revenue, expenses],
        type: "bar",
      },
    ],
  };
  const option2 = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "60%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: programPercentage, name: "programPercentage" },
          { value: administrativePercentage, name: "administrativePercentage" },
          { value: fundraisingPercentage, name: "fundraisingPercentage" },
        ],
      },
    ],
  };

  return (
    <>
      <Card sx={{ maxWidth: 345, marginBottom: "50px" }}>
        <CardMedia
          component="img"
          alt="green iguana"
          width="200px"
          image={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {email}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleOpen}>
            Learn More
          </Button>
        </CardActions>
      </Card>

      {/* when click the button, show this modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <ReactEcharts option={option1} />
            <ReactEcharts option={option2} />
            <Typography
              sx={{
                color: "#00CCCC",
              }}
              variant="h6"
              component="h2"
            >
              Our Impact
            </Typography>
            <Typography>{impact}</Typography>
            <Typography
              sx={{
                color: "#00CCCC",
              }}
              variant="h6"
              component="h2"
            >
              Our Misson
            </Typography>
            <Typography>{mission}</Typography>
            <Typography
              sx={{
                color: "#00CCCC",
              }}
              variant="h6"
              component="h2"
            >
              Where you can find us?
            </Typography>
            <Typography>{address}</Typography>
            <Typography>{email}</Typography>
            <Typography>{phone}</Typography>
            <Typography>{website}</Typography>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default CharityItem;
