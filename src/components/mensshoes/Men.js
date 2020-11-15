import React from "react";
import menshoestore from "../../menshoestore.json";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "100px",
    marginRight: "20px",
    width: "70%",
    float: "right",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));

export const Men = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {Object.keys(menshoestore).map((val) => {
          const mensShoeStore = menshoestore[val];
          return (
            <Grid item xs={6} sm={4} key={val}>
              <Paper className={classes.paper}>
                <Link
                  to={`/men/${val}`}
                  style={{ textDecoration: "none", color: "none" }}
                >
                  <CardMedia
                    className={classes.media}
                    image={mensShoeStore.img}
                    title={mensShoeStore.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {mensShoeStore.title}
                    </Typography>
                  </CardContent>
                </Link>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

//   const classes = useStyles();

//   return (
//     <div>
//       <Card className={classes.root}>
//         <CardActionArea>
//           {Object.values(shoestore).map((val, i) => {
//             return (
//               <CardMedia
//                 className={classes.media}
//                 image={val.img}
//                 title={val.title}
//               />
//             );
//           })}
//         </CardActionArea>
//       </Card>
//     </div>
//   );
// };

//   return (
//     <div>
//       <ul className="listitem">
//         {Object.values(shoestore).map((val, i) => {
//           return (
//             <div key={i}>
//               <h4>{val.title}</h4>
//               <img src={val.img} alt="shoe" width="300px" height="300px" />
//             </div>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };
