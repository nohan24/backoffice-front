import Image from '../img/volant.png'
export default function Logo(){
    return(
        <img style={{
            width: 150 + 'px',
            height: 150 + 'px',
            margin: 'auto',
            borderRadius: 100
        }} src={Image}/>
    )
}