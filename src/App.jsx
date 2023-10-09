// import { useState } from 'react'
import Form from "./components/Form";
import Meme from "./components/Meme";
import SavedMeme from "./components/SavedMeme";
import { Box } from "@mui/material";
import { useState } from "react";

function App() {
    const [memes, setMemes] = useState();
    const [memeIndex, setMemeIndex] = useState(0);
    const [form, setForm] = useState({
        topText: "",
        bottomText: "",
    });
    const [savedMemes, setSavedMemes] = useState([]);
    return (
        <Box
            sx={{
                minWidth: "100vw",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
            }}
        >
            <Box
                sx={{
                    // width: "100vw",
                    // height: "100vh",
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
                    savedMemes={savedMemes}
                    setSavedMemes={setSavedMemes}
                />
            </Box>
            <Box
                sx={{
                    // width: "100vw",
                    // height: "100vh",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2,
                }}
            >
                {savedMemes &&
                    savedMemes.map((meme) => (
                        <SavedMeme
                            key={meme.id}
                            setSavedMemes={setSavedMemes}
                            {...meme}
                        />
                    ))}
            </Box>
        </Box>
    );
}

export default App;
