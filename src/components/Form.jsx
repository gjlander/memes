import { Typography, Box, TextField, Stack, Button } from "@mui/material";

export default function BasicTextFields({
    form,
    setForm,
    memeIndex,
    setMemeIndex,
    memes,
}) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleNextClick = () => {
        memeIndex === memes.length - 1
            ? setMemeIndex(0)
            : setMemeIndex((prev) => prev + 1);
    };

    const handlePrevClick = () => {
        memeIndex === 0
            ? setMemeIndex(memes.length - 1)
            : setMemeIndex((prev) => prev - 1);
    };

    const handleRandomClick = () => {
        setMemeIndex(Math.floor(Math.random() * memes.length));
    };

    return (
        <Box
            sx={{
                width: 400,
                height: 400,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                border: 1,
            }}
        >
            <Typography variant="h3">Make Your Meme</Typography>

            <Box
                component="form"
                sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                    display: "flex",
                    flexDirection: "column",
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    name="topText"
                    id="top-text"
                    label="Top Text"
                    variant="filled"
                    onChange={handleChange}
                    value={form.topText}
                />
                <TextField
                    name="bottomText"
                    id="bottom-text"
                    label="Bottom Text"
                    variant="filled"
                    onChange={handleChange}
                    value={form.bottomText}
                />
            </Box>
            <Stack spacing={2} direction="row">
                <Button onClick={handlePrevClick} variant="outlined">
                    Prev
                </Button>
                <Button
                    onClick={handleRandomClick}
                    variant="contained"
                    color="secondary"
                >
                    Random
                </Button>
                <Button onClick={handleNextClick} variant="contained">
                    Next
                </Button>
            </Stack>
            <Typography variant="p">
                Meme {memeIndex + 1} of {memes.length}
            </Typography>
        </Box>
    );
}
