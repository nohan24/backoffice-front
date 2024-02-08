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

    function render(){
        if(annonces.length > 0){
            return(
                annonces.map((a,i) => {
                    return(
                        <Grid key={i} sm={4} md={6}>
                            <AnnonceCard data={a}/>
                        </Grid>
                    )
                })
            )
        }else{
            return (
                <Grid xs={12}>
                    <h2  style={{textAlign: 'center'}}>Pas d'annonce non validé.</h2>
                </Grid>
            )
        }
    }

    return(
        <>
            <Box>
                <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                    <Grid xs={12}>
                    <Loading data={annonces}>

                    </Loading>

                    </Grid>
                    {
                        annonces ?
                            render()
                            : ""
                    }
                </Grid>
            </Box>
        </>
    )
}