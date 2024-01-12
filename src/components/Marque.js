import {Box, Button, FormControl, FormHelperText, FormLabel, Grid, Input, Snackbar, Stack, Typography} from "@mui/joy";
import {Add, InfoOutlined} from "@mui/icons-material";
import Table from "@mui/joy/Table";
import Loading from "./Loading";
import {useEffect, useState} from "react";
import {getMarques, insertMarque, deleteMarque, deleteCategorie} from "../services";

export default function Marque(){
    const [error, setError] = useState(false);
    const [marque, setMarque] = useState(null);
    useEffect(() => {
        getMarques().then((response) => {
            setMarque(response.data)
        }).catch(() => {})
    })
    const [open, setOpen] = useState(false)

    const ajout = (e) => {
        e.preventDefault();
        var formData = new FormData(e.target);
        if(formData.get("marque") === ""){
            setError(true);
        }else{
            insertMarque(formData).then((response) => {
                setMarque(null)
            }).catch(error => {
                if(error.response.status === 400){
                    setOpen(true)
                }
            })
        }
    }

    const deleted = (id) => {
        deleteMarque(id).then(() => {
            setMarque(null)
        });
    }

    return(
        <>
            <Snackbar
                autoHideDuration={4000}
                open={open}
                variant="soft"
                color="danger"
                onClose={(event, reason) => {
                    if (reason === 'clickaway') {
                        return;
                    }
                    setOpen(false);
                }}
            >
                <InfoOutlined /> La valeur existe déjà.
            </Snackbar>
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                <Grid xs={6}>
                    <form onSubmit={(e) => ajout(e)}>
                        <Stack direction="row"  alignItems={!error ? "flex-end" : "center"}  gap={1} sx={{width: '100%'}}>
                            <FormControl required error={error}>
                                <FormLabel sx={{fontWeight: 600}}>Marque </FormLabel>
                                <Input name="marque" sx={{minWidth:'300px'}}/>
                                {
                                    error ? <FormHelperText>
                                        <InfoOutlined />
                                        Le champ ne peut pas être vide.
                                    </FormHelperText> : ""
                                }
                            </FormControl>

                            <Button type="submit" startDecorator={<Add />}>Nouvelle marque</Button>
                        </Stack>
                    </form>
                </Grid>
                <Grid xs={12}>
                    <Loading data={marque}>
                    <Box sx={{padding: '5px 0px'}}>
                        <Table
                            size="sm"
                            variant="outlined"
                            sx={{
                                borderRadius: 4,
                                "--Table-headerUnderlineThickness": "1px",
                                '--TableCell-paddingX': '1rem',
                                '--TableCell-paddingY': '0.6rem'
                            }}
                        >
                            <thead>
                            <tr>

                                <th>
                                    <Typography level="title-sm">Marque</Typography>
                                </th>

                                <th>
                                    <Typography level="title-sm">Actions</Typography>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                marque ? marque.map((d,index) => {
                                    return(
                                        <tr key={index}>
                                            <td>
                                                <Typography
                                                    level="title-md"
                                                    sx={{ alignItems: 'flex-start' }}
                                                >
                                                    {d.marque}
                                                </Typography>
                                            </td>

                                            <td>
                                                <Button color="danger" onClick={() => deleted(d._id)} variant="soft">Supprimer</Button>
                                            </td>
                                        </tr>
                                    )
                                }) : ""
                            }
                            </tbody>
                        </Table>
                    </Box>
                    </Loading>
                </Grid>
            </Grid>
        </>
    )
}