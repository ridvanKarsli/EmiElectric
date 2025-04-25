"use client"

import { useState } from "react"
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
} from "@mui/material"
import { Menu as MenuIcon, ElectricBolt, Phone, ArrowDropDown } from "@mui/icons-material"

const pages = ["Ana Sayfa", "Hizmetlerimiz", "Projeler", "Kurumsal", "İletişim"]
const services = ["Elektrik Tesisatı", "Enerji Danışmanlığı", "Bakım ve Onarım", "Yenilenebilir Enerji"]

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElServices, setAnchorElServices] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleOpenServicesMenu = (event) => {
    setAnchorElServices(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseServicesMenu = () => {
    setAnchorElServices(null)
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", p: 2 }}>
        <ElectricBolt sx={{ color: "primary.main", mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            color: "primary.main",
            textDecoration: "none",
          }}
        >
          ELEKTRIK
        </Typography>
      </Box>
      <List>
        {pages.map((page) => (
          <ListItem key={page} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={page} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary="Hizmetlerimiz" />
          </ListItemButton>
        </ListItem>
        {services.map((service) => (
          <ListItem key={service} disablePadding sx={{ pl: 4 }}>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={service} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "white", color: "text.primary", boxShadow: 2 }}>
      <Container maxWidth={false} disableGutters={true}>
        <Toolbar disableGutters>
          {/* Logo for desktop */}
          <ElectricBolt sx={{ display: { xs: "none", md: "flex" }, mr: 1, color: "primary.main" }} />
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
              color: "primary.main",
              textDecoration: "none",
            }}
          >
            ELEKTRIK
          </Typography>

          {/* Mobile menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleDrawerToggle}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile
              }}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
              }}
            >
              {drawer}
            </Drawer>
          </Box>

          {/* Logo for mobile */}
          <ElectricBolt sx={{ display: { xs: "flex", md: "none" }, mr: 1, color: "primary.main" }} />
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
              color: "primary.main",
              textDecoration: "none",
            }}
          >
            ELEKTRIK
          </Typography>

          {/* Desktop menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "center" }}>
            {pages.map((page) =>
              page !== "Hizmetlerimiz" ? (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "text.primary", display: "block", mx: 1 }}
                >
                  {page}
                </Button>
              ) : (
                <Box key={page} sx={{ position: "relative" }}>
                  <Button
                    onClick={handleOpenServicesMenu}
                    sx={{ my: 2, color: "text.primary", display: "flex", alignItems: "center", mx: 1 }}
                    endIcon={<ArrowDropDown />}
                  >
                    {page}
                  </Button>
                  <Menu
                    id="menu-services"
                    anchorEl={anchorElServices}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElServices)}
                    onClose={handleCloseServicesMenu}
                  >
                    {services.map((service) => (
                      <MenuItem key={service} onClick={handleCloseServicesMenu}>
                        <Typography textAlign="center">{service}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              ),
            )}
          </Box>

          {/* Contact button */}
          <Box sx={{ flexGrow: 0 }}>
            <Button
              variant="contained"
              startIcon={<Phone />}
              sx={{
                display: { xs: "none", md: "flex" },
                borderRadius: "20px",
                px: 2,
              }}
            >
              Bize Ulaşın
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
