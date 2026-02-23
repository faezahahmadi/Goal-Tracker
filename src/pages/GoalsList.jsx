import {
    Card, CardContent, Typography, Button, LinearProgress, Stack
    , Container, Paper,
    Grid
} from "@mui/material";

import Delete from "@mui/icons-material/Delete"
import Edit from "@mui/icons-material/Edit"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PauseButton from "../components/PauseButton";
import ProgressButton from "../components/ProgressButton";

export default function GoalsList({ goals }) {
    const [changeStatus, setChangeStatus] = useState(goals);
    const navigate = useNavigate();


    const togglePause = (id) => {
        setChangeStatus(
            changeStatus.map((goal) =>
                goal.id === id ? {
                    ...goal,
                    status: goal.status === "Paused" ? "Resume" : "Paused"
                }
                    : goal)
        );
    };

    const increaseProgress = (id, amount) => {
        setChangeStatus(
            changeStatus.map((goal) =>
                goal.id === id ? {
                    ...goal,
                    progress: Math.min(goal.progress + 100 / amount, 100)
                } : goal)
        );
    };

    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Typography sx={{ p: 2 }} variant="h5" >Goals List</Typography>
            <Paper elevation={7} sx={{ p: 3 }}>
                <Grid container spacing={2}>
                    {goals.map((goal) => (
                        <Grid key={goal.id} item xs={12} sm={6} md={4} >
                            <Card sx={{ mb: 2 }}>
                                <CardContent>
                                    <Typography variant="h6">
                                        {goal.title}
                                    </Typography>
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

                                        <ProgressButton
                                            onClick={() => increaseProgress(goal.id, goal.target)} />

                                        <PauseButton
                                            status={goal.status}
                                            onToggle={() => togglePause(goal.id)} />

                                        <Button variant="contained" color="error">(<Delete></Delete>) Delete</Button>
                                    </Stack>
                                    <Stack direction="row" spacing={1} mt={2}>
                                        <Button variant="outlined">(<Edit></Edit>)Edit</Button>
                                        <Button variant="outlined" onClick={() => navigate(`/goalsList/${goal.id}`)}>More Details</Button>
                                    </Stack>


                                </CardContent>

                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Paper>
        </Container>

    );
}