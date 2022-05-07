import React from 'react';
import {Grid, Paper} from "@mui/material";
import Note from "./Note";
import CurrentNote from "./CurrentNote";

const NotesList = ({notes, setCurrentNote}) => {
    return (
        <Grid item
              borderColor={'cadetblue'}
              alignItems='stretch'
              justifyContent='center'
              sx={{width: '20%', height: '100%'}}>
            <div style={{height: 885}}>
            <Paper
                elevation={12}
                style={{
                    padding: 8,
                    backgroundColor: "white",
                    border: "1px solid black",
                    height: '100%'
                }}
            >
                <h1 style={{borderBottom: '1px solid black'}}><strong>Notes</strong></h1>
                <ol style={{height: '100%'}}>
                    <Note notes={notes} setCurrentNote={setCurrentNote}/>
                </ol>
            </Paper>
        </div>
        </Grid>
    );
};


export default NotesList;
