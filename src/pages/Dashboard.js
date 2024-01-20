import Grid from '@mui/joy/Grid';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CircularProgress from '@mui/joy/CircularProgress';
import Typography from '@mui/joy/Typography';
import {Announcement, People, Troubleshoot, Sell} from '@mui/icons-material';
import { BarChart } from '@mui/x-charts/BarChart';
import {stat} from '../services/index';
import {useEffect, useState} from "react";
import Loading from "../components/Loading";

export default function Dashboard(){

    const [data, setData] = useState(null);
    const [dataset, setDataset] = useState([])

    useEffect(() => {
        stat().then((res) => {
            let d = []
            res.data.annonces.forEach((e) => {
                d.push({
                    total: e.total,
                    designation: e.designation
                })
            })
            console.log(res.data.annonces)
            setDataset(d)
            setData(res.data)
        })
    }, []);

    const chartSetting = {
        width: 900,
        height: 400,
    };


    const valueFormatter = (value) => `${value} annonces`;
    return(
        <>
                <Grid>
                    <Loading data={data}>
                    </Loading>
                </Grid>
            {
                data ?
                    <Grid container spacing={1} sx={{ flexGrow: 1 }}>

                        <Grid xs={12} md={4} lg={3}>
                            <Card variant="solid" invertedColors sx={{ backgroundColor: '#ff6464' }}>
                                <CardContent orientation="horizontal">
                                    <CircularProgress size="lg" determinate value={100}>
                                        <People/>
                                    </CircularProgress>
                                    <CardContent>
                                        <Typography color="white" level="body-md">Utilisateur inscrit</Typography>
                                        <Typography level="h2">{data.utilisateur}</Typography>
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
                                        <Typography level="h2">{data.annonce}</Typography>
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
                                        <Typography level="h2">{data.vente}</Typography>
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
                                        <Typography level="h2">{data.annonce_vente.toFixed(2)} %</Typography>
                                    </CardContent>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid xs={12} sx={{margin: '30px 0 10px 0', textAlign: 'center'}}>
                            <h2>Répartition du nombre total d'annonce / vente par mois</h2>
                        </Grid>

                        <Grid xs={12}  display="flex"  justifyContent="center">
                            <BarChart
                                dataset={dataset}
                                xAxis={[{ scaleType: 'band', dataKey: 'designation' }]}
                                series={[{ dataKey: 'total', label: "Annonce par mois", valueFormatter }]}
                                {...chartSetting}
                            />
                        </Grid>
                    </Grid> : ""
            }
        </>
    );
}