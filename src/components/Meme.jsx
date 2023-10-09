import { Card, CardMedia, Typography, Box } from "@mui/material";
import { useEffect } from "react";
import axios from "axios";

export default function Meme({ setMemes, memes, memeIndex, form }) {
    useEffect(() => {
        const getMemes = async () => {
            try {
                const memes = await axios.get(
                    "https://api.imgflip.com/get_memes"
                );
                console.log(memes.data.data.memes[0].url);
                setMemes(memes.data.data.memes);
            } catch (error) {
                console.error(error);
            }
        };
        getMemes();
    }, [setMemes]);

    return (
        <Card
            sx={{
                width: 400,
                height: 400,
                border: 1,
                bgcolor: "#fff",
                // display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
            }}
        >
            <Box sx={{ position: "relative" }}>
                <CardMedia
                    component="img"
                    image={memes ? memes[memeIndex].url : "#"}
                    alt="A meme"
                    height="400"
                />

                <Box
                    sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        bgcolor: "rgba(0, 0, 0, 0)",
                        color: "black",
                        padding: "10px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Typography variant="h2">{form.topText}</Typography>
                    <Typography variant="h2">{form.bottomText}</Typography>
                </Box>
            </Box>
        </Card>
    );
}
