import { Container, TextField, Typography, Paper, Stack, Button, MenuItem, Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateGoalSchema } from "../Validation/CreateGoalSchema";
import { Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function CreateGoal({ addGoal }) {
    const navigate = useNavigate();
    const { register, handleSubmit, control, reset, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(CreateGoalSchema),
        mode: "all",
        defaultValues: {
            title: "",
            category: "",
            goalType: "",
            target: 0
        }
    });
    function onSubmit(data) {
        addGoal(data);
        navigate("/goalsList")
        console.log(data);
    }
    function handleReset() {
        navigate(-1);
    }

    const categories = [
        { id: 1, name: "Health" },
        { id: 2, name: "Study" },
        { id: 3, name: "Work" },
        { id: 4, name: "Personal" }];

    const goalType = [
        { id: 1, name: "Daily" },
        { id: 2, name: "Count based" },
        { id: 3, name: "Time Based" }
    ]


    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Paper elevation={7} sx={{ p: 3 }}>
                <Typography sx={{ p: 2 }} variant="h5" >Create new goal</Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={3} sx={{ p: 2 }} >
                        <TextField
                            label="Goal Title"
                            name="title"
                            fullWidth
                            {...register("title")}
                        />
                        {errors.title && <Box color="red" fontSize={13}>
                            {errors.title.message}</Box>}

                        <Controller
                            name="category"
                            control={control}
                            render={({ field }) => (<TextField
                                select
                                label="Goal Category"
                                fullWidth
                                {...field}>
                                {categories.map((cat) => (
                                    <MenuItem key={cat.id}
                                        value={cat.name}>
                                        {cat.name}
                                    </MenuItem>
                                ))} </TextField>
                            )}>
                        </Controller>
                        {errors.category && <Box color="red" fontSize={13}>
                            {errors.category.message}</Box>}

                        <Controller
                            name="goalType"
                            control={control}
                            render={({ field }) => (<TextField
                                select
                                label="Goal Type"
                                fullWidth
                                {...field}>
                                {goalType.map((type) => (
                                    <MenuItem id={type.id}
                                        value={type.name}>
                                        {type.name}
                                    </MenuItem>
                                ))}
                            </TextField>
                            )} />

                        {errors.goalType && <Box color="red" fontSize={13}>
                            {errors.goalType.message}</Box>}

                        <TextField label="Goal Target"
                            name="target"
                            type="number"
                            fullWidth
                            {...register("target", { valueAsNumber: true })}
                        />
                        {errors.target && <Box color="red" fontSize={13}>
                            {errors.target.message}
                        </Box>}
                    </Stack>
                    <Stack direction="row" spacing={3}>
                        <Button type="submit" variant="contained" disabled={!isValid}>
                            Create
                        </Button>
                        <Button onSubmit={handleReset} variant="outlined"> Cancel</Button>
                    </Stack>
                </form>

            </Paper>
        </Container>

    );
}