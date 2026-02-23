import {
    Card, CardContent, Container,
    LinearProgress, Button, Stack, Paper, Typography
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

import PauseCircle from "@mui/icons-material/PauseCircle";
import Delete from "@mui/icons-material/Delete"
import Edit from "@mui/icons-material/Edit"


export default function GoalDetails({ goals }) {
    const navigate = useNavigate();
    const { id } = useParams();

    const goal = goals.find((g) => g.id === Number(id));
    if (!goal) return <Typography variant="h5">The goal is not Found</Typography>

    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Paper elevation={7} sx={{ p: 3 }}>
                <Card sx={{ mb: 2 }}>
                    <CardContent>
                        <Typography variant="h6">{goal.title}</Typography>
                        <Typography color="text.secondary">
                            {goal.category}
                        </Typography>
                        <Typography>
                            {goal.target}
                        </Typography>
                        <Typography>
                            {goal.status}
                        </Typography>
                        <LinearProgress
                            variant="determinant"
                            value={(goal.progress / goal.target) * 100}
                            sx={{ my: 2 }} />
                        <Typography>
                            {goal.progress}/{goal.target}
                        </Typography>
                        <Stack direction="row"
                            spacing={1} mt={2}>
                            <Button variant="contained" >Log Today</Button>
                            <Button variant="outlined">(<PauseCircle></PauseCircle>)Pause</Button>
                            <Button variant="contained" color="error">(<Delete></Delete>) Delete</Button>
                        </Stack>
                        <Stack direction="row" spacing={1} mt={2}>
                            <Button variant="outlined">(<Edit></Edit>)Edit</Button>
                        </Stack>
                    </CardContent>


                </Card>
            </Paper>
        </Container>
    );
}

