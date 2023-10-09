import { Card, CardMedia, Typography, Box, Button, Stack } from "@mui/material";

export default function SavedMeme({
    setSavedMemes,
    topText,
    bottomText,
    url,
    id,
}) {
    const deleteMeme = () => {
        setSavedMemes((prev) => prev.filter((meme) => meme.id !== id));
    };
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: 250,
                height: 275,
            }}
        >
            <Card
                id="newMeme"
                sx={{
                    width: "100%",
                    height: 250,
                    border: 1,
                    bgcolor: "#fff",
                    // display: "flex",
                    // justifyContent: "center",
                    // alignItems: "center",
                }}
            >
                <Box sx={{ position: "relative", height: "100%" }}>
                    <CardMedia
                        component="img"
                        image={url}
                        alt="A meme"
                        height="100%"
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
                        <Typography variant="h5">{topText}</Typography>
                        <Typography variant="h5">{bottomText}</Typography>
                    </Box>
                </Box>
            </Card>
            <Stack spacing={1} direction="row">
                {/* <Button size="small" variant="contained" color="success">
                    Edit
                </Button> */}
                <Button size="small" variant="contained" color="secondary">
                    Download
                </Button>
                <Button
                    onClick={deleteMeme}
                    size="small"
                    variant="contained"
                    color="error"
                >
                    Delete
                </Button>
            </Stack>
        </Box>
    );
}
