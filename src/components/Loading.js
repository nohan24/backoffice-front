import {CircularProgress, Stack} from "@mui/joy";

export default function Loading(props){
    return(
        <>
                {
                    props.data == null ? <Stack direction="row" justifyContent="center">
                        <div style={{padding: '50px 0'}}><CircularProgress /></div>
                        </Stack> : props.children
                }
        </>
    )
}