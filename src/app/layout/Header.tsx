import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props {
  darkMode: boolean;
  handeleThemeChange(): void;
}

export default function Header({ darkMode, handeleThemeChange }: Props) {
  return (
    <AppBar position="static" sx={{ mb: 10 }}>
      <Toolbar>
        <Typography variant="h6">Re-Store</Typography>
        <Switch checked={darkMode} onChange={handeleThemeChange}></Switch>
      </Toolbar>
    </AppBar>
  );
}
