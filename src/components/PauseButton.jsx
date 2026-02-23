import { Button } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

export default function PauseButton({ status, onToggle }) {
    const isPaused = status === "Paused";
    return (
        <Button variant="contained"
            onClick={onToggle}
            startIcon={isPaused ? <PlayArrowIcon /> : <PauseIcon />}>
            {isPaused ? "Resume" : "Pause"}
        </Button>
    )
}