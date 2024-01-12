import {
    Button,
    FormControl,
    FormLabel,
    Grid,
    Input,
    Select,
    Stack,
    Option,
    Typography,
    Box,
    FormHelperText, Snackbar
} from "@mui/joy";
import {Add, InfoOutlined} from "@mui/icons-material";
import Table from '@mui/joy/Table';
import './table.css'
import {useEffect, useState} from "react";
import Loading from "./Loading";
import {getModeles, getMarques, insertModele} from '../services/index'
export default function Modele(){
    const [modele, setModele] = useState(null);
    const [marque, setMarque] = useState([])
    const [error, setError] = useState(false);
    useEffect(() => {
        getModeles().then((response) => {
            setModele(response.data)
        }).catch((error) => setModele([]))

        getMarques().then((response) => {
            setMarque(response.data)
        })
    }, [modele]);
    const [open, setOpen] = useState(false)

    const ajout = (e) => {
        e.preventDefault();
        var formData = new FormData(e.target);
        if(formData.get("modele") == ""){
            setError(true);
        }else{
            insertModele(formData).then((response) => {
                setModele(null);
            }).catch(error => {
                if(error.response.status === 400){
                    setOpen(true)
                }
            })
        }
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
                <Grid xs={12}>
                    <form onSubmit={(e) => ajout(e)}>
                        <Stack direction={{ xs: 'column', sm: 'row' }} gap={2} sx={{width: '100%'}} alignItems="flex-end">
                            <FormControl required error={error}>
                                <FormLabel sx={{fontWeight: 600}}>Marque de la voiture</FormLabel>
                                <Select name="idmarque" placeholder="Choisissez la marque de la voiture ...">
                                    {
                                        marque.map((m,index) => {
                                            return(
                                                <Option key={index} value={m._id}>{m.marque}</Option>
                                            )
                                        })
                                    }
                                </Select>
                            </FormControl>
                            <FormControl required error={error}>
                                <FormLabel sx={{fontWeight: 600}}>Nom du modèle</FormLabel>
                                <Input sx={{minWidth:'300px'}} name="modele" placeholder="Le nom du modèle"/>
                                {
                                    error ? <FormHelperText>
                                        <InfoOutlined />
                                        Le champ ne peut pas être vide.
                                    </FormHelperText> : ""
                                }
                            </FormControl>
                            <Button type="submit" startDecorator={<Add />}>Nouveau modèle</Button>
                        </Stack>
                    </form>
                </Grid>
                <Grid xs={12}>
                    <Loading data={modele}>
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
                                <Typography level="title-sm">Nom du modèle</Typography>
                            </th>
                            
                            <th>
                                <Typography level="title-sm">Actions</Typography>
                            </th>
                            </tr>

                            </thead>
                            <tbody>
                            {
                                modele ? modele.map((m,i) => {
                                    return(
                                        <tr key={i}>
                                            <td>
                                                <Typography
                                                    level="title-md"
                                                    sx={{ alignItems: 'flex-start' }}
                                                >
                                                    {m.marque}
                                                </Typography>
                                            </td>
                                            <td>
                                                <Typography
                                                    level="title-md"
                                                    sx={{ alignItems: 'flex-start' }}
                                                >
                                                    {m.modele}
                                                </Typography>
                                            </td>


                                            <td>
                                                <Button color="danger" variant="soft">Supprimer</Button>
                                            </td>
                                        </tr>
                                    )
                                    })  : ""
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