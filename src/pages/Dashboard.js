import Grid from '@mui/joy/Grid';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CircularProgress from '@mui/joy/CircularProgress';
import Typography from '@mui/joy/Typography';
import {Announcement, People, Troubleshoot, Sell, Savings} from '@mui/icons-material';
import { BarChart } from '@mui/x-charts/BarChart';
import {stat, statvente} from '../services/index';
import {useEffect, useState} from "react";
import Loading from "../components/Loading";
import {Button, Input} from "@mui/joy";

export default function Dashboard(){
    function currencyFormat(num) {
        return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    const [year,setYear] = useState(new Date().getFullYear());

    const [data, setData] = useState(null);
    const [dataset, setDataset] = useState([])
    const [vente, setVente] = useState(null)

    useEffect(() => {
        statvente(year).then((res) => {
            setVente(res.data)
        }).catch((err) => {

        })

        stat().then((res) => {
            let d = []
            res.data.annonces.forEach((e) => {
                d.push({
                    total: e.total,
                    designation: e.designation
                })
            })
            setDataset(d)
            setData(res.data)
        }).catch((err) => {

        })
    }, );

    const chartSetting = {
        width: 900,
        height: 400,
    };

    function changeYear(){
        statvente(year).then((res) => {
            setVente(res.data)
        })
    }

    const valueFormatter = (value) => `${value} % des annonces`;
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

                        <Grid xs={12} md={12} lg={12} display="flex" justifyContent="center">
                            <Card variant="solid" invertedColors sx={{backgroundColor:'#4dc989'}}>
                                <CardContent orientation="horizontal">
                                    <CircularProgress size="lg" determinate value={100}>
                                        <Savings/>
                                    </CircularProgress>
                                    <CardContent>
                                        <Typography level="body-md" color="white">Total commission pris</Typography>
                                        <Typography level="h2">{currencyFormat(data.totalprix)} MGA</Typography>
                                    </CardContent>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid xs={12} sx={{margin: '30px 0 10px 0', textAlign: 'center'}}>
                            <h2>Pourcentage de la répartition des publications d’annonce par mois</h2>
                        </Grid>

                        <Grid xs={12}  display="flex"  justifyContent="center">
                            <BarChart
                                dataset={dataset}
                                xAxis={[{ scaleType: 'band', dataKey: 'designation' }]}
                                series={[{ dataKey: 'total', label: "Annonce par mois", valueFormatter }]}
                                {...chartSetting}
                            />
                        </Grid>

                        <Grid xs={12} sx={{margin: '30px 0 0px 0', textAlign: 'center'}}>
                            <h2>Ventes conclues par année</h2>
                        </Grid>

                        <Grid xs={12} sx={{textAlign: 'center', display: 'flex', justifyContent:'center'}}>
                            <Input value={year} type="number" onChange={(e) => setYear(e.target.value)}/>
                            <Button onClick={() => changeYear}>Changer d'année</Button>
                        </Grid>

                        <Grid xs={12}  display="flex"  justifyContent="center">
                            <BarChart
                                dataset={vente}
                                xAxis={[{ scaleType: 'band', dataKey: 'designation' }]}
                                series={[{ dataKey: 'commission', label: "Total commission" , color:'#2e96ff' }]}
                                {...chartSetting}
                            />
                        </Grid>
                    </Grid> : ""
            }
        </>
    );
}