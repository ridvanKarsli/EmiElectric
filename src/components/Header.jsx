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
import { Link } from "react-router-dom";

const pages = ["Ana Sayfa", "Kurumsal", "Ürünler", "İletişim"];
const hrefs = ["/", "yok", "/products", "yok"];
const corporateMenu = [
  "Hakkımızda",
  "Tarihçe",
  "Sertifikalar",
  "Sosyal Sorumluluk",
  "Karbon Ayak İzi",
  "Kalite",
  "AR-GE",
];
const corporateHrefs = [
  "/about",
  "/history",
  "/certificates",
  "/social-responsibility",
  "/carbon-footprint",
  "/quality",
  "/research-development",
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
    setOpenCorporateMenu(false);
  };

  const drawer = (
    <Box
      sx={{
        textAlign: "center",
        backgroundColor: "#f7941d",
        height: "100%",
        color: "white",
        p: 2,
        borderRadius: "0 16px 16px 0",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 2 }}>
        <ElectricBolt sx={{ color: "white", mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component={Link}
          to="/"
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
        {pages.map((page, index) => (
          <Box key={page}>
            {page !== "Kurumsal" ? (
              <ListItem disablePadding>
                <ListItemButton
                  component={hrefs[index] !== "yok" ? Link : "button"}
                  to={hrefs[index] !== "yok" ? hrefs[index] : undefined}
                  onClick={handleDrawerToggle}
                  sx={{
                    textAlign: "center",
                    borderRadius: "30px",
                    mx: 1,
                    my: 0.5,
                    "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
                  }}
                >
                  <ListItemText primary={page} />
                </ListItemButton>
              </ListItem>
            ) : (
              <>
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={handleOpenCorporateMenu}
                    sx={{
                      textAlign: "center",
                      borderRadius: "30px",
                      mx: 1,
                      my: 0.5,
                      "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
                    }}
                  >
                    <ListItemText primary={page} />
                    {openCorporateMenu ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                </ListItem>
                <Collapse in={openCorporateMenu} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {corporateMenu.map((item, idx) => (
                      <ListItem key={item} disablePadding>
                        <ListItemButton
                          component={Link}
                          to={corporateHrefs[idx]}
                          onClick={handleDrawerToggle}
                          sx={{
                            pl: 4,
                            textAlign: "center",
                            borderRadius: "30px",
                            mx: 1,
                            my: 0.5,
                            "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
                          }}
                        >
                          <ListItemText primary={item} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </>
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
        backgroundColor: "#f7941d",
        color: "white",
        boxShadow: 3,
        borderRadius: { xs: 0, md: "0 0 24px 24px" }, // Oval alt köşeler
        mx: { xs: 0, md: 2 },
        mt: { xs: 0, md: 1 },
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <ElectricBolt sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
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

          {/* Mobil menü */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
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
                  backgroundColor: "#f7941d",
                  borderRadius: "0 16px 16px 0",
                  m: 1,
                },
              }}
            >
              {drawer}
            </Drawer>
          </Box>

          {/* Mobil logo */}
          <ElectricBolt sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
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

          {/* Masaüstü menü */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "center" }}>
            {pages.map((page, index) =>
              page !== "Kurumsal" ? (
                <Button
                  key={page}
                  component={hrefs[index] !== "yok" ? Link : "button"}
                  to={hrefs[index] !== "yok" ? hrefs[index] : undefined}
                  onClick={handleCloseCorporateMenu}
                  sx={{
                    my: 2,
                    mx: 1,
                    px: 3,
                    color: "white",
                    borderRadius: "30px",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                >
                  {page}
                </Button>
              ) : (
                <Box key={page} sx={{ position: "relative" }}>
                  <Button
                    onClick={handleOpenCorporateMenu}
                    endIcon={<ArrowDropDown />}
                    sx={{
                      my: 2,
                      mx: 1,
                      px: 3,
                      color: "white",
                      borderRadius: "30px",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      },
                    }}
                  >
                    {page}
                  </Button>
                  <Menu
                    id="menu-corporate"
                    anchorEl={anchorElCorporate}
                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                    transformOrigin={{ vertical: "top", horizontal: "left" }}
                    open={Boolean(anchorElCorporate)}
                    onClose={handleCloseCorporateMenu}
                    sx={{
                      "& .MuiPaper-root": {
                        backgroundColor: "#1e2a38",
                        color: "white",
                        borderRadius: "16px",
                      },
                    }}
                  >
                    {corporateMenu.map((item, idx) => (
                      <MenuItem
                        key={item}
                        component={Link}
                        to={corporateHrefs[idx]}
                        onClick={handleCloseCorporateMenu}
                        sx={{
                          borderRadius: "30px",
                          "&:hover": {
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                          },
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
