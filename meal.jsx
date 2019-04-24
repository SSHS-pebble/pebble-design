const React = require("react");
const ReactDOM = require("react-dom");
const {
    AppBar,
    Button,
    CssBaseline,
    IconButton,
    Menu,
    MenuItem,
    MuiThemeProvider,
    Paper,
    Switch,
    Toolbar,
    Typography,
    withStyles
} = require("@material-ui/core");
const {
    Menu: MenuIcon,
    AccountCircle: AccountIcon
} = require("@material-ui/icons");
const { createMuiTheme } = require("@material-ui/core/styles");
const { purple } = require("@material-ui/core/colors");


const styles = theme => ({
    menuButton: {
        margin: [[0, 12, 0, -12]]
    },
    mainBarTitle: {
        flexGrow: 1
    },
    mainDocument: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        maxWidth: 760,
        margin: [[theme.spacing.unit * 3, "auto", theme.spacing.unit * 3, "auto"]],
        minHeight: 800
    }
});

const Main = withStyles(styles)(props => (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" className={props.classes.menuButton} onClick={props.toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={props.classes.mainBarTitle}>
            Dashboard
          </Typography>
           <Button color="inherit" onClick={props.toggleLoginDialog}>Login</Button>
        </Toolbar>
      </AppBar>
      <Paper elevation={1} className={props.classes.mainDocument}>
          <Typography variant="title">
            <h2>조약돌 0.0.0 version</h2>
          </Typography>
      </Paper>
    </div>
));

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: purple
    }
});

const App = props => (
    <>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
          <Main />
      </MuiThemeProvider>
    </>
);

ReactDOM.render(<App />, document.getElementById("root"));