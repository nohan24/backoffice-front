import './annoncecard.css'
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import {Button, Stack} from "@mui/joy";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import {Done, Clear} from "@mui/icons-material";
import {images, validateannonce, refuser} from '../services/index'

export default function AnnonceCard({data}){
    function currencyFormat(num) {
        return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    function reject(id){
        refuser(id);
    }

    function valide(id){
        validateannonce(id);
    }
    return(
        <>
            <Card className="card-style">
                <div>
                    <Typography level="title-lg"><span style={{
                        margin: '5px 0',
                        width: '100%',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}>{data.detailAnnonce.titre_voiture}</span></Typography>
                    <Typography level="body-sm">Publié le : {data.voiture.dateCreation}</Typography>

                </div>
                <AspectRatio minHeight="400px" maxHeight="400px">
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        {
                            data.detailAnnonce.images.map((d,i) => {
                                return(
                                    <SwiperSlide key={i}>
                                        <img src={images(d)} alt=""/>
                                    </SwiperSlide>
                                )
                            })
                        }

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
                                {currencyFormat(data.voiture.prix)} MGA
                            </Typography>
                        </div>
                        <Stack direction="row" spacing={1}>
                            <Button
                                variant="outlined"
                                size="md"
                                color="danger"
                                startDecorator={<Clear />}
                                onClick={() => reject(data.voiture.id)}
                            >
                                Refuser
                            </Button>
                            <Button
                                variant="outlined"
                                size="md"
                                color="success"
                                startDecorator={<Done />}
                                onClick={() => valide(data.voiture.id)}
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