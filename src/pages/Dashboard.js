import Grid from '@mui/joy/Grid';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CircularProgress from '@mui/joy/CircularProgress';
import Typography from '@mui/joy/Typography';
import {Announcement, People, Troubleshoot, Sell} from '@mui/icons-material';
import { BarChart } from '@mui/x-charts/BarChart';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';

export default function Dashboard(){
    const chartSetting = {
        width: 900,
        height: 400,
    };
    const dataset = [
        {
            london: 59,
            paris: 57,
            newYork: 86,
            seoul: 21,
            month: 'Jan',
        },
        {
            london: 50,
            paris: 52,
            newYork: 78,
            seoul: 28,
            month: 'Fév',
        },
        {
            london: 47,
            paris: 53,
            newYork: 106,
            seoul: 41,
            month: 'Mar',
        },
        {
            london: 54,
            paris: 56,
            newYork: 92,
            seoul: 73,
            month: 'Avr',
        },
        {
            london: 57,
            paris: 69,
            newYork: 92,
            seoul: 99,
            month: 'Mai',
        },
        {
            london: 60,
            paris: 63,
            newYork: 103,
            seoul: 144,
            month: 'Juin',
        },
        {
            london: 59,
            paris: 60,
            newYork: 105,
            seoul: 319,
            month: 'Juil',
        },
        {
            london: 65,
            paris: 60,
            newYork: 106,
            seoul: 249,
            month: 'Août',
        },
        {
            london: 51,
            paris: 51,
            newYork: 95,
            seoul: 131,
            month: 'Sep',
        },
        {
            london: 60,
            paris: 65,
            newYork: 97,
            seoul: 55,
            month: 'Oct',
        },
        {
            london: 67,
            paris: 64,
            newYork: 76,
            seoul: 48,
            month: 'Nov',
        },
        {
            london: 61,
            paris: 70,
            newYork: 103,
            seoul: 25,
            month: 'Déc',
        },
    ];

    const valueFormatter = (value) => `${value} annonces`;
    return(
        <>
            <Grid container spacing={1} sx={{ flexGrow: 1 }}>
                <Grid xs={12} md={4} lg={3}>
                    <Card variant="solid" invertedColors sx={{ backgroundColor: '#ff6464' }}>
                        <CardContent orientation="horizontal">
                            <CircularProgress size="lg" determinate value={100}>
                                <People/>
                            </CircularProgress>
                            <CardContent>
                                <Typography color="white" level="body-md">Utilisateur inscrit</Typography>
                                <Typography level="h2">1,456</Typography>
                            </CardContent>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={12} md={4} lg={3}>
                    <Card variant="solid" color="primary" invertedColors>
                        <CardContent orientation="horizontal">
                            <CircularProgress size="lg" determinate value={100}>
                                <Announcement/>
                            </CircularProgress>
                            <CardContent>
                                <Typography color="white" level="body-md">Annonce en cours</Typography>
                                <Typography level="h2">1,200</Typography>
                            </CardContent>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={12} md={4} lg={3}>
                    <Card variant="solid" sx={{backgroundColor:"rgba(227,175,51,0.99)"}} invertedColors>
                        <CardContent orientation="horizontal">
                            <CircularProgress size="lg" determinate value={100}>
                                <Sell/>
                            </CircularProgress>
                            <CardContent>
                                <Typography color="white" level="body-md">Vente conclue</Typography>
                                <Typography level="h2">40</Typography>
                            </CardContent>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={12} md={4} lg={3}>
                    <Card variant="solid" invertedColors sx={{backgroundColor:'#4dc989'}}>
                        <CardContent orientation="horizontal">
                            <CircularProgress size="lg" determinate value={100}>
                                <Troubleshoot/>
                            </CircularProgress>
                            <CardContent>
                                <Typography level="body-md" color="white">% d'annonce en vente</Typography>
                                <Typography level="h2">14.45 %</Typography>
                            </CardContent>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={12} sx={{margin: '30px 0 10px 0', textAlign: 'center'}}>
                    <h2>Répartition du nombre d'annonce par mois</h2>
                </Grid>

                <Grid xs={12} sx={{marginBottom: 4}}>
                    <div style={{display: 'flex', justifyContent:'center'}}>
                        <FormControl>
                            <FormLabel>Filtrer par année : </FormLabel>
                            <Input placeholder="Placeholder" />
                        </FormControl>
                    </div>
                </Grid>
                <Grid xs={12}  display="flex"  justifyContent="center">
                    <BarChart
                        dataset={dataset}
                        xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                        series={[{ dataKey: 'seoul', label: "Annonce par mois", valueFormatter }]}
                        {...chartSetting}
                    />
                </Grid>

            </Grid>
        </>
    );
}