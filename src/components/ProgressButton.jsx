import { Button } from "@mui/material";

export default function ProgressButton({ onClick }) {

    return (
        <Button variant="contained"
            color="primary"
            onClick={onClick}>
            Add Progress
        </Button>

    )
}