import React, {useEffect, useState} from 'react';
import {CardContent, Grid, Paper, TextField} from "@mui/material";
import axios from "axios";


const CurrentNote = ({currentNote, fetchData}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const contentChange = async (ev) => {
        if (ev.key === 'Enter') {
            const res = await axios.patch(`http://localhost:8080/notes/${currentNote.id}`,
                {'content': content})
            document.getElementById('content').value = '';
            currentNote.content = content;
            fetchData();
        }
    }

    const titleChange = async (event) => {
        if (event.key === 'Enter') {
        const res = await axios.patch(`http://localhost:8080/notes/${currentNote.id}`,
            {'title' : title})
            document.getElementById('title').value = '';
        currentNote.title = title;
            fetchData()

        }
    }


    return (

        <Grid item  sx={{width: '80%'}}>
            <h1 align={'center'}><strong>CURRENT NOTE</strong></h1>
            <div style={{height: 800}}>
            <Paper
                elevation={12}
                style={{
                    padding: 8,
                    backgroundColor: "white",
                    border: "1px solid black",
                    height: '100%'
                }}
            >
                <h1 style={{borderBottom: '1px solid black'}}>
                    <strong>
                        <TextField fullWidth
                                   id={'title'}
                                    style={{marginBottom: 10}}
                                   placeholder={currentNote.hasOwnProperty('title') ? currentNote.title : 'Select a note to display...'}
                        onChange={(ev) => setTitle(ev.target.value)}
                        onKeyPress={(ev) => titleChange(ev)}/>
                    </strong>
                </h1>
                <h3 style={{
                        height: '100%',
                    }}>
                    <strong>
                        <TextField fullWidth
                                   id={'content'}
                                   placeholder={currentNote.hasOwnProperty('content') ? currentNote.content : 'No note has been selected...'}
                                    onChange={(ev) => setContent(ev.target.value)}
                                    onKeyPress={(ev) => contentChange(ev)}/>

                    </strong>
                </h3>
            </Paper>
        </div>
        </Grid>
    );
};

export default CurrentNote;
