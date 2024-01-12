import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import Stack from '@mui/joy/Stack';
import {useState} from "react";
export default function ModifModal({open,openfunc,title,data}){
    const [value, setValue] = useState(data);
    return (
        <Modal open={open} onClose={() => openfunc()}>
            <ModalDialog>
                <DialogTitle>{title}</DialogTitle>
                <form
                    onSubmit={(event) => {
                        event.preventDefault();
                        openfunc()
                    }}
                >
                    <Stack spacing={2}>
                        <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input autoFocus required />
                        </FormControl>
                        <Button type="submit">Modifier</Button>
                    </Stack>
                </form>
            </ModalDialog>
        </Modal>
    )
}