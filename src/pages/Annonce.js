import Grid from "@mui/joy/Grid";
import {Box} from "@mui/joy";
import AnnonceCard from '../components/AnnonceCard'
import {useEffect, useState} from "react";
import {getAnnonces} from '../services/index'
import Loading from "../components/Loading";
export default function Annonce(){
    const [annonces, setAnnonces] = useState(null);
    useEffect(() => {
        getAnnonces().then((response) => {
            setAnnonces(response.data)
        }).catch((error) => {

        });
    }, [annonces]);
    return(
        <>
            <Box>
                <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                    <Grid xs={12}>
                    <Loading data={annonces}>

                    </Loading>

                    </Grid>
                    {
                        annonces ? annonces.map((a,i) => {
                            return(
                                <Grid key={i} sm={4} md={6}>
                                    <AnnonceCard data={a}/>
                                </Grid>
                            )
                        }) : ""
                    }
                </Grid>
            </Box>
        </>
    )
}