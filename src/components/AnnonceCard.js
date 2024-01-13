import './annoncecard.css'
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Golf from '../img/golf.jpg'
import {Button, Stack} from "@mui/joy";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import {Done, Clear} from "@mui/icons-material";


export default function AnnonceCard(){
    return(
        <>
            <Card className="card-style">
                <div>
                    <Typography level="title-lg"><p style={{
                        margin: '5px 0',
                        width: '100%',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}>Volkswagen Golf 7 2.0 TDI</p></Typography>
                    <Typography level="body-sm">Publié le : 2023/12/12</Typography>

                </div>
                <AspectRatio minHeight="400px" maxHeight="400px">
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        <SwiperSlide>
                            <img src={Golf} alt=""/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Golf} alt=""/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Golf} alt=""/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Golf} alt=""/>
                        </SwiperSlide>

                    </Swiper>
                </AspectRatio>
                <CardContent orientation="horizontal">
                    <Stack direction="row"
                           justifyContent="space-between"
                           alignItems="center"
                            sx={{width: 100 + '%'}}>
                        <div>
                            <Typography level="body-sm">Prix de la voiture :</Typography>
                            <Typography fontSize="lg" fontWeight="lg">
                                52.000.000 MGA
                            </Typography>
                        </div>
                        <Stack direction="row" spacing={1}>
                            <Button
                                variant="outlined"
                                size="md"
                                color="danger"
                                startDecorator={<Clear />}
                            >
                                Refuser
                            </Button>
                            <Button
                                variant="outlined"
                                size="md"
                                color="success"
                                startDecorator={<Done />}
                            >
                                Valider l'annonce
                            </Button>
                        </Stack>
                    </Stack>
                </CardContent>
            </Card>
        </>
    )
}