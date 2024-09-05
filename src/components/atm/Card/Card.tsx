import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type Props = {
  cardHearer: string;
  cardTitle: string;
  cardType: string;
  cardText: string;
}


export default function BasicCard(props: Props) {

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          {props.cardHearer}
        </Typography>
        <Typography variant="h5" component="div">
          {props.cardTitle}
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>{props.cardType}</Typography>
        <Typography variant="body2">
          {props.cardText}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};