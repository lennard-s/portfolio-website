import React from "react";
import { Box, Typography, Link, Fade, Divider } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function ContactPage() {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    setShow(true);
  }, []);

  return (
    <Fade in={show} timeout={500}>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: 4,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: "#333",
            marginBottom: 2,
            textAlign: "center",
          }}
        >
          Get in Touch
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "#555",
            marginBottom: 4,
            textAlign: "center",
            maxWidth: 600,
          }}
        >
          Feel free to reach out to me via phone, email, or LinkedIn.
          <br />
          I’d love to connect and discuss opportunities or collaborations!
        </Typography>
        <Divider sx={{ width: "60%", marginBottom: 4 }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <PhoneIcon sx={{ color: "#1976d2" }} />
            <Typography variant="h6" sx={{ color: "#555" }}>
              (425) 985-4606
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <EmailIcon sx={{ color: "#1976d2" }} />
            <Typography variant="h6" sx={{ color: "#555" }}>
              <Link
                href="mailto:lennardszyperski@gmail.com"
                sx={{ textDecoration: "none", color: "#1976d2" }}
              >
                lennardszyperski@gmail.com
              </Link>
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LinkedInIcon sx={{ color: "#1976d2" }} />
            <Typography variant="h6" sx={{ color: "#555" }}>
              <Link
                href="https://www.linkedin.com/in/lennard-szyperski-765718255/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ textDecoration: "none", color: "#1976d2" }}
              >
                linkedin.com/in/lennardszyperski
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
}
