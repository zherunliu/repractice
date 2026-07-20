import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function NavBar() {
	return (
		<AppBar
			position="static"
			sx={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}
		>
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
