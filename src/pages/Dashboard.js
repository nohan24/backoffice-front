import Grid from '@mui/joy/Grid';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CircularProgress from '@mui/joy/CircularProgress';
import Typography from '@mui/joy/Typography';
import SvgIcon from '@mui/joy/SvgIcon';
import {Add} from '@mui/icons-material';
export default function Dashboard(){
    return(
        <>
            <Grid container spacing={1} sx={{ flexGrow: 1 }}>
                <Grid xs={12} md={4} lg={3}>
                    <Card variant="solid" invertedColors sx={{ backgroundColor: '#ff6464' }}>
                        <CardContent orientation="horizontal">
                            <CircularProgress size="lg" determinate value={20}>
                                <Add/>
                            </CircularProgress>
                            <CardContent>
                                <Typography level="body-md">Utilisateur inscrit</Typography>
                                <Typography level="h2">1,456</Typography>
                            </CardContent>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={12} md={4} lg={3}>
                    <Card variant="solid" color="primary" invertedColors>
                        <CardContent orientation="horizontal">
                            <CircularProgress size="lg" determinate value={20}>
                                <SvgIcon>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                                        />
                                    </svg>
                                </SvgIcon>
                            </CircularProgress>
                            <CardContent>
                                <Typography level="body-md">Annonce en cours</Typography>
                                <Typography level="h2">1,200</Typography>
                            </CardContent>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={6} md={4} lg={3}>
                    <Card variant="solid" sx={{backgroundColor:"rgba(227,175,51,0.99)"}} invertedColors>
                        <CardContent orientation="horizontal">
                            <CircularProgress size="lg" determinate value={20}>
                                <SvgIcon>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                                        />
                                    </svg>
                                </SvgIcon>
                            </CircularProgress>
                            <CardContent>
                                <Typography level="body-md">Vente conclue</Typography>
                                <Typography level="h2">40</Typography>
                            </CardContent>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={12} md={4} lg={3}>
                    <Card variant="solid" invertedColors sx={{backgroundColor:'#4dc989'}}>
                        <CardContent orientation="horizontal">
                            <CircularProgress size="lg" determinate value={20}>
                                <SvgIcon>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                                        />
                                    </svg>
                                </SvgIcon>
                            </CircularProgress>
                            <CardContent>
                                <Typography level="body-md">% de conversion d'annonce en vente</Typography>
                                <Typography level="h2">14.45 %</Typography>
                            </CardContent>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
}