import Header from "./Header";
import NotesList from "./NotesList";
import CurrentNote from "./CurrentNote";
import {useEffect, useState} from "react";
import NoteCreator from "./NoteCreator";
import axios from "axios";
import {Grid} from "@mui/material";

function App() {
    const [notes, setNotes] = useState([]);
    const [isHome, setIsHome] = useState(true);
    const [currentNote, setCurrentNote] = useState({});

    const fetchData = async () => {
        const result = await axios('http://localhost:8080/notes')
        setNotes(result.data)
    }

    useEffect(() => {
        fetchData()
    }, []);


    return (
        <div>
            {isHome ?
                <Header setIsHome={setIsHome} isHome={isHome}/>
                :
                <NoteCreator fetchData={fetchData} isHome={isHome} setIsHome={setIsHome} currentNote={currentNote}/>}
            <Grid container
                  direction="row"
                  justifyContent="flex-start"
                  spacing={1}
                  marginRight={4}
                  style={{height: '100%'}}>
                <NotesList
                    notes={notes}
                    setCurrentNote={setCurrentNote}/>
                <CurrentNote
                    currentNote={currentNote}
                    setCurrentNote={setCurrentNote}
                    notes={notes}
                    fetchData={fetchData}/>
            </Grid>
        </div>
    );
}

export default App;
