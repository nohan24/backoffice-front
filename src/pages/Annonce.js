import Grid from "@mui/joy/Grid";
import {Box} from "@mui/joy";
import AnnonceCard from '../components/AnnonceCard'
export default function Annonce(){
    return(
        <>
            <Box>
                <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                    <Grid xs={12} sm={4} md={6}>
                        <AnnonceCard/>
                    </Grid>

                    <Grid xs={12} sm={4} md={6}>
                        <AnnonceCard/>
                    </Grid>

                    <Grid xs={12} sm={4} md={6}>
                        <AnnonceCard/>
                    </Grid>


                </Grid>
            </Box>
        </>
    )
}