import * as React from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function CharityCards() {
  const [ngos, setNGOs] = React.useState([]);

  React.useEffect(() => {
    axios.get("/api/ngos.json")
      .then((response) => setNGOs(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      {ngos.map((ngo) => (
        <Card key={ngo.id} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={ngo.imageUrl}
              alt={ngo.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {ngo.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {ngo.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </>
  );
}


// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import { CardActionArea } from "@mui/material";

// export default function CharityCards() {
//   const [ngos, setNGOs] = React.useState([]);

//   React.useEffect(() => {
//     fetch("ngos.json")
//       .then((response) => response.json())
//       .then((data) => setNGOs(data));
//   }, []);

//   return (
//     <>
//       {ngos.map((ngo) => (
//         <Card key={ngo.id} sx={{ maxWidth: 345 }}>
//           <CardActionArea>
//             <CardMedia
//               component="img"
//               height="140"
//               image={ngo.imageUrl}
//               alt={ngo.name}
//             />
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="div">
//                 {ngo.name}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 {ngo.description}
//               </Typography>
//             </CardContent>
//           </CardActionArea>
//         </Card>
//       ))}
//     </>
//   );
// }
