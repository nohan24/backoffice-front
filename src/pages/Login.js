import {Box, Button, FormControl, FormLabel, Input, Stack} from "@mui/joy";
import './login.css'
import Logo from "../components/Logo";
import {login} from '../services/index'
import { useNavigate } from 'react-router-dom';export default function Login(){

    return(
        <Box  sx={{
            my: 'auto',
            py: 2,
            pb: 5,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 2,
            width: 500,
            height: 90 + 'vh',
            maxWidth: '100%',
            mx: 'auto',
            borderRadius: 'sm',
            '& form': {
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
            },

        }}>
            <Stack  gap={4} sx={{
                mt: 2,
                width: 500
            }}>
                <Logo></Logo>
                <Form/>
            </Stack>
        </Box>
    )
}

function Form(){
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        var formData = new FormData(e.currentTarget);
        login(formData).then(resp => {
            localStorage.setItem("auth", resp.data.token);
            navigate("/");
        }).catch(error => {
            console.log(error.response.data.message);
        });
    };
    return(
        <form onSubmit={(e) => onSubmit(e)}>
            <FormControl required>
                <FormLabel>Nom d'utilisateur</FormLabel>
                <Input type="text" name="email" value="admin@gmail.com"/>
            </FormControl>
            <FormControl required>
                <FormLabel>Mot de passe</FormLabel>
                <Input type="password" name="password" value="root"/>
            </FormControl>
            <Stack>
                <Button type="submit" fullWidth>
                    Se connecter
                </Button>
            </Stack>
        </form>
    )
}