import { CardActionArea, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import styles from './Mycard.module.css';
import { CardActions } from '@mui/material';

const Mycard = ({id,cImage,cAuthor}) => {
  console.log(cAuthor);
  return (
    <div className={styles.cardContainer}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="170"
            image={cImage}
            alt={`alt-image-${id}`}
          />
        </CardActionArea>
      </Card>
      <div className={styles.cardName}>
        <Typography variant="body2"  >
          {cAuthor}
        </Typography>
      </div>
    </div>
  );
};

export default Mycard;
