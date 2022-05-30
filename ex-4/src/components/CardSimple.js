import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function CardSimple() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Titulo
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Subtitulo
        </Typography>
        <Typography variant="body2">
          Contenido
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Acción</Button>
      </CardActions>
    </Card>
  );
}

