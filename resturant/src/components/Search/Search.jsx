import { TextField } from "@mui/material";

export default function Search({ setSearch, placeHolder }) {
  return (
    <>
      <TextField
        label={placeHolder}
        fullWidth
        variant="outlined"
        sx={{ my: 4 }}
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
}
