import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function BasicAlerts({ message, setError }) {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert
        onClose={() => {
          setError(false);
        }}
        variant="filled"
        severity="error"
      >
        {message}
      </Alert>
    </Stack>
  );
}
