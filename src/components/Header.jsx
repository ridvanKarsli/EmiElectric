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

const pages = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Kurumsal", href: "yok" },
  { label: "Ürünler", href: "/products" },
  { label: "İletişim", href: "/contact" },
];
const corporateMenu = [
  { label: "Hakkımızda", href: "/about" },
  { label: "Tarihçe", href: "/history" },
  { label: "Sertifikalar", href: "/certificates" },
  { label: "Sosyal Sorumluluk", href: "/social-responsibility" },
  { label: "Karbon Ayak İzi", href: "/carbon-footprint" },
  { label: "Kalite", href: "/quality" },
  { label: "AR-GE", href: "/research-development" },
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

  // Drawer for mobile
  const drawer = (
    <Box
      sx={{
        width: 260,
        backgroundColor: "#1e2a38",
        height: "100%",
        color: "#fff",
        p: 2,
        borderRadius: "0 24px 24px 0",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <ElectricBolt sx={{ color: "#f7941d", mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component={Link}
          to="/"
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            color: "#fff",
            textDecoration: "none",
            letterSpacing: 2,
            fontSize: "1.3rem",
            textTransform: "uppercase",
          }}
        >
          EMI ELEKTRIK
        </Typography>
      </Box>
      <List>
        {pages.map((page, index) =>
          page.label !== "Kurumsal" ? (
            <ListItem key={page.label} disablePadding>
              <ListItemButton
                component={page.href !== "yok" ? Link : "button"}
                to={page.href !== "yok" ? page.href : undefined}
                onClick={handleDrawerToggle}
                sx={{
                  borderRadius: "12px",
                  mx: 1,
                  my: 0.5,
                  fontWeight: 600,
                  fontSize: "1.08rem",
                  letterSpacing: 1,
                  color: "#fff",
                  textTransform: "uppercase",
                  justifyContent: "center",
                  "&:hover": { backgroundColor: "#f7941d", color: "#fff" },
                }}
              >
                <ListItemText primary={page.label} />
              </ListItemButton>
            </ListItem>
          ) : (
            <>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={handleOpenCorporateMenu}
                  sx={{
                    borderRadius: "12px",
                    mx: 1,
                    my: 0.5,
                    fontWeight: 600,
                    fontSize: "1.08rem",
                    letterSpacing: 1,
                    color: "#fff",
                    textTransform: "uppercase",
                    justifyContent: "center",
                    "&:hover": { backgroundColor: "#f7941d", color: "#fff" },
                  }}
                >
                  <ListItemText primary={page.label} />
                  {openCorporateMenu ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
              </ListItem>
              <Collapse in={openCorporateMenu} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {corporateMenu.map((item) => (
                    <ListItem key={item.label} disablePadding>
                      <ListItemButton
                        component={Link}
                        to={item.href}
                        onClick={handleDrawerToggle}
                        sx={{
                          pl: 4,
                          borderRadius: "12px",
                          color: "#fff",
                          fontWeight: 600,
                          fontSize: "1.08rem",
                          letterSpacing: 1,
                          textTransform: "uppercase",
                          justifyContent: "center",
                          "&:hover": { backgroundColor: "#f7941d", color: "#fff" },
                        }}
                      >
                        <ListItemText primary={item.label} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </>
          )
        )}
      </List>
      <Button
        href="/iletisim"
        variant="contained"
        fullWidth
        sx={{
          mt: 3,
          background: "#f7941d",
          color: "#fff",
          borderRadius: "9999px",
          fontWeight: 700,
          fontSize: "1.08rem",
          letterSpacing: 1,
          textTransform: "uppercase",
          py: 1.2,
          boxShadow: 2,
          "&:hover": { background: "#fff", color: "#f7941d" },
        }}
      >
        Teklif Al
      </Button>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#1e2a38",
        color: "#fff",
        boxShadow: 3,
        borderRadius: { xs: 0, md: "18px" },
        mx: { xs: 0, md: 2 },
        mt: { xs: 0, md: 2 },
        my: { xs: 0, md: 2 },
        px: { xs: 0, md: 2 },
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: { xs: 56, md: 72 }, px: { xs: 1, md: 3 } }}>
          {/* Sol: Logo */}
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: { xs: 1, md: 0 } }}>
            <ElectricBolt sx={{ mr: 1, color: "#f7941d", fontSize: 32 }} />
            <Typography
              variant="h5"
              noWrap
              component={Link}
              to="/"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                color: "#fff",
                textDecoration: "none",
                letterSpacing: 2,
                fontSize: "1.5rem",
                textTransform: "uppercase",
              }}
            >
              EMI ELEKTRIK
            </Typography>
          </Box>

          {/* Orta: Menü */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "center" }}>
            {pages.map((page, index) =>
              page.label !== "Kurumsal" ? (
                <Button
                  key={page.label}
                  component={page.href !== "yok" ? Link : "button"}
                  to={page.href !== "yok" ? page.href : undefined}
                  onClick={handleCloseCorporateMenu}
                  sx={{
                    mx: 1.5,
                    px: 3,
                    color: "#fff",
                    borderRadius: "10px",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    fontSize: "1.08rem",
                    letterSpacing: 1,
                    transition: "background 0.2s, color 0.2s",
                    "&:hover": {
                      backgroundColor: "#f7941d",
                      color: "#1e2a38",
                    },
                  }}
                >
                  {page.label}
                </Button>
              ) : (
                <Box key={page.label} sx={{ position: "relative" }}>
                  <Button
                    onClick={handleOpenCorporateMenu}
                    endIcon={<ArrowDropDown />}
                    sx={{
                      mx: 1.5,
                      px: 3,
                      color: "#fff",
                      borderRadius: "10px",
                      textTransform: "uppercase",
                      fontWeight: 600,
                      fontSize: "1.08rem",
                      letterSpacing: 1,
                      transition: "background 0.2s, color 0.2s",
                      "&:hover": {
                        backgroundColor: "#f7941d",
                        color: "#1e2a38",
                      },
                    }}
                  >
                    {page.label}
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
                        backgroundColor: "#fff",
                        color: "#1e2a38",
                        borderRadius: "16px",
                        minWidth: 180,
                        fontWeight: 600,
                      },
                    }}
                  >
                    {corporateMenu.map((item) => (
                      <MenuItem
                        key={item.label}
                        component={Link}
                        to={item.href}
                        onClick={handleCloseCorporateMenu}
                        sx={{
                          borderRadius: "10px",
                          color: "#1e2a38",
                          fontWeight: 600,
                          fontSize: "1.08rem",
                          letterSpacing: 1,
                          textTransform: "uppercase",
                          "&:hover": {
                            backgroundColor: "#f7941d",
                            color: "#fff",
                          },
                        }}
                      >
                        <Typography textAlign="center">{item.label}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              )
            )}
          </Box>

          {/* Sağ: Teklif Al butonu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", ml: 2 }}>
            <Button
              href="/iletisim"
              variant="contained"
              sx={{
                background: "#f7941d",
                color: "#fff",
                borderRadius: "9999px",
                fontWeight: 700,
                fontSize: "1.08rem",
                letterSpacing: 1,
                textTransform: "uppercase",
                px: 4,
                py: 1.2,
                boxShadow: 2,
                transition: "background 0.2s, color 0.2s",
                "&:hover": { background: "#fff", color: "#f7941d" },
              }}
            >
              Teklif Al
            </Button>
          </Box>

          {/* Mobil: Hamburger */}
          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" }, ml: 1 }}>
            <IconButton
              size="large"
              onClick={handleDrawerToggle}
              color="inherit"
              sx={{ color: "#fff" }}
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
                  backgroundColor: "#1e2a38",
                  borderRadius: "0 24px 24px 0",
                  m: 1,
                },
              }}
            >
              {drawer}
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
