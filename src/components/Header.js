import {Button, Stack} from "@mui/joy";
import HLink from "./MyLink";
import './header.css'
import { GlobeAltIcon } from '@heroicons/react/24/solid'
import {Link, Navigate, Outlet} from "react-router-dom";
import { LogoutOutlined} from "@mui/icons-material";

export default function Header(){
    const log = localStorage.getItem("auth");
    if(log != null){
    return(
            <Stack>
                <div className="header">
                  <Stack direction="row" justifyContent="space-between" sx={{padding: '0px 30px 0px 0px'}}>
                      <Stack direction="row" spacing={2} alignItems="flex-start">
                          <Link className="link" to="/myCar/dashboard"><GlobeAltIcon width={30}></GlobeAltIcon></Link>
                          <HLink link="Dashboard" to="/myCar/dashboard"/>
                          <HLink link="Annonces" to="/myCar/annonces-en-attente"/>
                          <HLink link="Eléments" to="/myCar/elements/"/>
                      </Stack>
                      <Stack>
                          <Button color="danger" variant="soft" startDecorator={<LogoutOutlined />}>Déconnexion</Button>
                      </Stack>
                  </Stack>
                </div>
                <div className="container">
                    <Outlet/>
                </div>
            </Stack>
        )
    }else{
        return <Navigate to="/login"/>
    }
}