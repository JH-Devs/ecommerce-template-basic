import { Box, Card, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import Link from '@mui/joy/Link';
import { FormControl, FormLabel, Input, Stack, Button } from '@mui/joy';
import PeopleIcon from '@mui/icons-material/People';


export default function Register() {  
    return (
        <>
        <Helmet>
            <title>Registrace – Eshop  Šablona</title>
        </Helmet>
            <Box sx={{ backgroundColor: "pink", padding: "20px", borderRadius: "8px", maxWidth: "400px", margin: "auto" }}>
                <Card sx={{ padding: 2}}>
                    <Typography variant="h4" textAlign="center">Registrace</Typography>
                    <form method="post">
                    <FormControl>
                        <FormLabel>Uživatelské jméno</FormLabel>
                        <Input startDecorator={<PeopleIcon />} name="name" required/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input startDecorator={<PeopleIcon />} name="email" required/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Heslo</FormLabel>
                        <Input startDecorator={<PeopleIcon />} name="password" required/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Heslo pro kontrolu</FormLabel>
                        <Input startDecorator={<PeopleIcon />} name="re_password" required/>
                    </FormControl>
                        <Stack spacing={2} sx={{ mt: 2 }}>
                            <Button variant="soft" color="success" type="submit">Registrovat</Button>
                        </Stack>
                    </form>
                    <Typography variant="subtitle1" sx={{ p:2, textAlign: "center",}}>Máte zde účet? <Link href="/prihlaseni">Přihlášení</Link></Typography>
                </Card>
            </Box>
        </>
    );
}