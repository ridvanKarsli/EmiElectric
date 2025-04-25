import { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Collapse,
} from "@mui/material";
import {
  Menu as MenuIcon,
  ElectricBolt,
  ArrowDropDown,
  ExpandMore,
  ExpandLess,
} from "@mui/icons-material";

const pages = ["Ana Sayfa", "Kurumsal", "Ürünler", "İletişim"];
const corporateMenu = [
  "Hakkımızda",
  "Tarihçe",
  "Sertifikalar",
  "Sosyal Sorumluluk",
  "Karbon Ayak İzi",
  "Kalite",
  "AR-GE",
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorElCorporate, setAnchorElCorporate] = useState(null);
  const [openCorporateMenu, setOpenCorporateMenu] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleOpenCorporateMenu = (event) => {
    if (isMobile) {
      setOpenCorporateMenu(!openCorporateMenu);
    } else {
      setAnchorElCorporate(event.currentTarget);
    }
  };

  const handleCloseCorporateMenu = () => {
    setAnchorElCorporate(null);
    setOpenCorporateMenu(false);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    setOpenCorporateMenu(false); // Close corporate menu when drawer toggles
  };

  const drawer = (
    <Box
      sx={{
        textAlign: "center",
        backgroundImage: "linear-gradient(to right, #dc004e, #9b0034)",
        height: "100%",
        color: "white",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", p: 2 }}>
        <ElectricBolt sx={{ color: "white", mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            color: "white",
            textDecoration: "none",
          }}
        >
          EMI ELEKTRIK
        </Typography>
      </Box>
      <List>
        {pages.map((page) => (
          <Box key={page}>
            <ListItem disablePadding>
              <ListItemButton
                onClick={page === "Kurumsal" ? handleOpenCorporateMenu : handleDrawerToggle}
                sx={{
                  textAlign: "center",
                  "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
                }}
              >
                <ListItemText primary={page} />
                {page === "Kurumsal" && (
                  <>{openCorporateMenu ? <ExpandLess /> : <ExpandMore />}</>
                )}
              </ListItemButton>
            </ListItem>
            {page === "Kurumsal" && (
              <Collapse in={openCorporateMenu} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {corporateMenu.map((item) => (
                    <ListItem key={item} disablePadding>
                      <ListItemButton
                        sx={{
                          pl: 4,
                          textAlign: "center",
                          "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },


                        }}
                        onClick={handleDrawerToggle}
                      >
                        <ListItemText primary={item} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </Box>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundImage: "linear-gradient(to right, #dc004e, #9b0034)",
        color: "white",
        boxShadow: 2,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <ElectricBolt sx={{ display: { xs: "none", md: "flex" }, mr: 1, color: "white" }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              color: "white",
              textDecoration: "none",
            }}
          >
            EMI ELEKTRIK
          </Typography>

          {/* Mobile menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleDrawerToggle}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{ keepMounted: true }}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: 260,
                  backgroundImage: "linear-gradient(to right, #dc004e, #9b0034)",
                },
              }}
            >
              {drawer}
            </Drawer>
          </Box>

          {/* Mobile logo */}
          <ElectricBolt sx={{ display: { xs: "flex", md: "none" }, mr: 1, color: "white" }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              color: "white",
              textDecoration: "none",
            }}
          >
            ELEKTRIK
          </Typography>

          {/* Desktop menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "center" }}>
            {pages.map((page) =>
              page !== "Kurumsal" ? (
                <Button
                  key={page}
                  onClick={handleCloseCorporateMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    mx: 1,
                    "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
                  }}
                >
                  {page}
                </Button>
              ) : (
                <Box key={page} sx={{ position: "relative" }}>
                  <Button
                    onClick={handleOpenCorporateMenu}
                    sx={{
                      my: 2,
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      mx: 1,
                      "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
                    }}
                    endIcon={<ArrowDropDown />}
                  >
                    {page}
                  </Button>
                  <Menu
                    id="menu-corporate"
                    anchorEl={anchorElCorporate}
                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                    keepMounted
                    transformOrigin={{ vertical: "top", horizontal: "left" }}
                    open={Boolean(anchorElCorporate)}
                    onClose={handleCloseCorporateMenu}
                    sx={{
                      "& .MuiPaper-root": {
                        backgroundColor: "#9b0034",
                        color: "white",
                      },
                    }}
                  >
                    {corporateMenu.map((item) => (
                      <MenuItem
                        key={item}
                        onClick={handleCloseCorporateMenu}
                        sx={{
                          "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
                        }}
                      >
                        <Typography textAlign="center">{item}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              )
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;