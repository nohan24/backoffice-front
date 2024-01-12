import {Link, Outlet} from "react-router-dom";
import {Button, Stack} from "@mui/joy";
import './element.css'
import {Add, EvStation, DirectionsCar, Commute, Garage, PanTool} from "@mui/icons-material";

export default function Element(){
    return(
        <>
            <Stack   direction={{ xs: 'column', sm: 'row' }} spacing={3/2}>
                <Link to="/home/elements/marque">
                    <Button className="custom-btn" startDecorator={<DirectionsCar />}>Marque de voiture</Button>
                </Link>
                <Link to="/home/elements/modele">
                    <Button className="custom-btn" startDecorator={<Garage />}>Modèle</Button>
                </Link>
                <Link to="/home/elements/categorie">
                    <Button className="custom-btn" startDecorator={<Commute />}>Catégorie</Button>
                </Link>
                <Link to="/home/elements/carburant">
                    <Button className="custom-btn" startDecorator={<EvStation />}>Carburant</Button>
                </Link>
                <Link to="/home/elements/equipement">
                    <Button className="custom-btn" startDecorator={<PanTool />}>Equipement</Button>
                </Link>
                <Link to="/home/elements/transmission">
                    <Button className="custom-btn" startDecorator={<Add />}>Transmission</Button>
                </Link>
            </Stack>

            <div style={{padding: '25px 0'}}>
               <Outlet></Outlet>
            </div>
        </>
    )
}