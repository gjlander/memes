// import { useState } from 'react'
import Form from "./components/Form";
import Meme from "./components/Meme";
import { Box } from "@mui/material";
import { useState } from "react";

function App() {
    const [memes, setMemes] = useState();
    const [memeIndex, setMemeIndex] = useState(0);
    const [form, setForm] = useState({
        topText: "",
        bottomText: "",
    });
    return (
        <Box
            sx={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 4,
            }}
        >
            <Meme
                memes={memes}
                setMemes={setMemes}
                memeIndex={memeIndex}
                form={form}
            />
            <Form
                memes={memes}
                setMemes={setMemes}
                memeIndex={memeIndex}
                setMemeIndex={setMemeIndex}
                form={form}
                setForm={setForm}
            />
        </Box>
    );
}

export default App;
