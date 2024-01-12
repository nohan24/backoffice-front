import {Box, Button, FormControl, FormHelperText, FormLabel, Grid, Input, Snackbar, Stack, Typography} from "@mui/joy";
import {Add, InfoOutlined} from "@mui/icons-material";
import {useEffect, useState} from "react";
import {deleteCarburant, getCategories, insertCategorie, deleteCategorie} from '../services/index'
import Loading from "./Loading";
import Table from "@mui/joy/Table";

export default function Categorie(){
    const [categories, setCategories] = useState(null);
    useEffect(() => {
        getCategories().then((response) => {
            setCategories(response.data)
        }).catch((error) => {
            setCategories([])
        });
    }, [categories]);

    const [error, setError] = useState(false);
    const [open, setOpen] = useState(false)

    const ajout = (e) => {
        e.preventDefault();
        var formData = new FormData(e.target);
        if(formData.get("categorie") === ""){
            setError(true);
        }else{
            insertCategorie(formData).then((response) => {

                setCategories(categories)
            }).catch(error => {
                if(error.response.status === 400){
                    setOpen(true)
                }
            })
        }
    }

    const deleted = (id) => {
        deleteCategorie(id).then(() => {
            setCategories(null)
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
                            <Stack direction="row" gap={1} sx={{width: '100%'}} alignItems={!error ? "flex-end" : "center"}>
                                <FormControl error={error}>
                                    <FormLabel sx={{fontWeight: 600}}>Nom de la catégorie</FormLabel>
                                    <Input name="categorie" sx={{minWidth:'300px'}}/>
                                    {
                                        error ? <FormHelperText>
                                            <InfoOutlined />
                                            Le champ ne peut pas être vide.
                                        </FormHelperText> : ""
                                    }
                                </FormControl>
                                <Button type="submit" startDecorator={<Add />}>Nouvelle catégorie</Button>
                            </Stack>
                        </form>
                    </Grid>
                    <Grid xs={12}>
                        <Loading data={categories}>
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
                                        <Typography level="title-sm">Catégorie</Typography>
                                    </th>

                                    <th>
                                        <Typography level="title-sm">Actions</Typography>
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    categories ? categories.map((d,index) => {
                                        return(
                                            <tr key={index}>
                                                <td>
                                                    <Typography
                                                        level="title-md"
                                                        sx={{ alignItems: 'flex-start' }}
                                                    >
                                                        {d.categorie}
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