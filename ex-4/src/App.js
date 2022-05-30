import './App.css';
import Button from '@mui/material/Button'
import { Container, Grid } from '@mui/material';
import CardSimple from './components/CardSimple';

function App() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} >
        <Grid item xs={6}>
          <CardSimple />
        </Grid>
        <Grid item xs={6}>
          <CardSimple />
        </Grid>
        <Grid item xs={6}>
          <CardSimple />
        </Grid>
        <Grid item xs={6}>
          <CardSimple />
        </Grid>
        <Grid item xs={12} align="center">
          <Button variant="contained">Hola mundo</Button>
        </Grid>

      </Grid>

    </Container>
  );
}

export default App;
