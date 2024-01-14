import {useEffect, useState} from "react";
import {Button, FormControl, FormHelperText, FormLabel, Grid, Input, Stack} from "@mui/joy";
import {updateCommission, getCommission} from '../services/index'
import {InfoOutlined} from "@mui/icons-material";

export default function Commission(){
    const [commission, setCommission] = useState(0);
    const [error, setError] = useState(false);
    const [errorm, setErrorm] = useState("")
    useEffect(() => {
        getCommission().then((res) => {
            setCommission(res.data.valeur);
        })
    }, []);
    function modif(e){
        e.preventDefault();
        var formData = new FormData(e.target);
        updateCommission(formData).then(() => {
            setError(false)
        }).catch((error) => {
            setErrorm(error.response.data)
            setError(true)
        })
    }
    return(
        <>
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                <Grid xs={6}>
                    <form onSubmit={(e) => modif(e)}>
                        <Stack direction="row" gap={1} sx={{width: '100%'}} alignItems={!error ? "flex-end" : "center"}>
                            <FormControl error={error}>
                                <FormLabel sx={{fontWeight: 600}}>Modification</FormLabel>
                                <Input min="1" name="valeur" type="number" onChange={(e) => setCommission(e.target.value)} value={commission} sx={{minWidth:'300px'}}/>
                                {
                                    error ? <FormHelperText>
                                        <InfoOutlined />
                                            {errorm}
                                    </FormHelperText> : ""
                                }
                            </FormControl>
                            <Button type="submit">Modifier</Button>
                        </Stack>
                    </form>
                </Grid>
            </Grid>
        </>
    );
}