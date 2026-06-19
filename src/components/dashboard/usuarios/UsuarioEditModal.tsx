import { Dialog, DialogContent, DialogTitle, IconButton, Typography } from "@mui/material"
import { MdClose } from "react-icons/md";

type UsuarioEditDialogProps = {
    open: boolean
    setOpen: (value: boolean) => void
    usuarioId?: number
}

export function UsuarioEditModal({...props}: UsuarioEditDialogProps) {
    

    return (
        <Dialog open={props.open}>
            <div className="flex items-center justify-around">
                <DialogTitle>Teste</DialogTitle>
                <IconButton onClick={()=>props.setOpen(false)}>
                    <MdClose />
                </IconButton>
            </div>
            <DialogContent>
                <Typography>{props.usuarioId}</Typography>
            </DialogContent>

        </Dialog>
    )
}