import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Create} from "@mui/icons-material";
import {useState} from "react";
import axios from "axios";

export default function NoteCreator({isHome, setIsHome, fetchData}) {
    const [update, setUpdate] = useState('');

    const handleCreate = async () => {
        const result = await axios.post(`http://localhost:8080/notes/`,
            {'title': update, 'content': ''})
        setIsHome(true)
        fetchData()
    }

    const handleClose = () => {
        setIsHome(true);
    };

    const handleKeyPress = async (ev) => {
        if (ev.key === 'Enter') {
            const result = await axios.post(`http://localhost:8080/notes/`,
                {'title': update, 'content': ''})
            setIsHome(true)
            fetchData()
        }
    }

    return (
        <div>
            <Dialog open={!isHome}>
                <DialogTitle>Create new note</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please enter a title for the new note:
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setUpdate(e.target.value)}
                        onKeyPress={(ev) => handleKeyPress(ev)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleCreate}><Create/></Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

