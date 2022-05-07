import React from 'react';

const Note = ({notes, setCurrentNote}) => {
    return (
        <>
            {notes.map((note) => {
                return <li onClick={() => setCurrentNote(note)}>
                    {note.title}
                </li>
            })}
        </>
    );
};

export default Note;
