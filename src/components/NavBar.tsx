import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function NavBar() {
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography
					align="center"
					variant="h6"
					component="div"
					sx={{ flexGrow: 1 }}
				>
					Memo
				</Typography>
			</Toolbar>
		</AppBar>
	);
}
