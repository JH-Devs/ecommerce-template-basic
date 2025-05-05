import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import Link from '@mui/joy/Link';


export default function Login() {  
    return (
        <>
        <Helmet>
            <title>Přihlášení – Eshop  Šablona</title>
        </Helmet>
            <Box sx={{ backgroundColor: "pink", padding: "20px", borderRadius: "8px", maxWidth: "400px", margin: "auto" }}>
                <Card>
                    <Typography variant="h4" textAlign="center">Přihlášení</Typography>
                    <form method="post" action="/login">
                    <TextField 
                            label="Uživatelské jméno" 
                            name="username" 
                            fullWidth 
                            margin="normal" 
                            required 
                        />
                        <TextField 
                            label="Heslo" 
                            type="password" 
                            name="password" 
                            fullWidth 
                            margin="normal" 
                            required 
                        />
                        <Button variant="outlined" type="submit">Přihlásit se</Button>
                    </form>
                    <Typography variant="subtitle1" sx={{ p:2, textAlign: "center",}}>Nemáte zde účet? <Link href="/registrace">Registrace</Link></Typography>
                </Card>
            </Box>
        </>
    );
}