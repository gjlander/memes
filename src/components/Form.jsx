import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BasicTextFields({ form, setForm }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };
    return (
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
    );
}
