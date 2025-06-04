import React, { useState, useEffect } from "react";
import {
  Box,
  ImageList,
  ImageListItem,
  Modal,
  IconButton,
  Fade,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"; // Add this import

const itemData = [
  {
    img: "https://res.cloudinary.com/dcuh2fjgt/image/upload/v1747951930/IMG_8213_cg30wi.jpg",
    title: "Skull and Flowers 1",
    author: "Lennard Szyperski",
  },
  {
    img: "https://res.cloudinary.com/dcuh2fjgt/image/upload/v1747951931/IMG_9250_ytuxo0.jpg",
    title: "Skull and Flowers 2",
    author: "Lennard Szyperski",
  },
  {
    img: "https://res.cloudinary.com/dcuh2fjgt/image/upload/v1747951932/IMG_8362_eab0k4.jpg",
    title: "Skull and Flowers 3",
    author: "Lennard Szyperski",
  },
  {
    img: "https://res.cloudinary.com/dcuh2fjgt/image/upload/v1747951933/IMG_8236_uypki7.jpg",
    title: "Skull and Flowers 4",
    author: "Lennard Szyperski",
  },
  {
    img: "https://res.cloudinary.com/dcuh2fjgt/image/upload/v1747951801/IMG_0653_yrt2sw.jpg",
    title: "Fall Tree",
    author: "Lennard Szyperski",
  },
  {
    img: "https://res.cloudinary.com/dcuh2fjgt/image/upload/v1747951800/IMG_0685_wm4uzc.jpg",
    title: "Alfred Sketch",
    author: "Lennard Szyperski",
  },
  {
    img: "https://res.cloudinary.com/dcuh2fjgt/image/upload/v1747951801/IMG_0673_tj8w6i.jpg",
    title: "Musician Sketch",
    author: "Lennard Szyperski",
  },
  {
    img: "https://res.cloudinary.com/dcuh2fjgt/image/upload/v1747951813/IMG_6306_btn9qo.jpg",
    title: "Portrait Sketch",
    author: "Lennard Szyperski",
  },
  {
    img: "https://res.cloudinary.com/dcuh2fjgt/image/upload/v1747951812/IMG_6307_vag6sd.jpg",
    title: "Eyes Practice",
    author: "Lennard Szyperski",
  },
  {
    img: "https://res.cloudinary.com/dcuh2fjgt/image/upload/v1747951813/IMG_6304_cemhu2.jpg",
    title: "Torso Sketch",
    author: "Lennard Szyperski",
  },
  {
    img: "https://res.cloudinary.com/dcuh2fjgt/image/upload/v1747951930/IMG_8005_lkufyg.jpg",
    title: "Skater Girl Cartoon",
    author: "Lennard Szyperski",
  },
  {
    img: "https://res.cloudinary.com/dcuh2fjgt/image/upload/v1747951933/IMG_9425_mbnq3a.jpg",
    title: "Watercolor Portrait",
    author: "Lennard Szyperski",
  },
  {
    img: "https://res.cloudinary.com/dcuh2fjgt/image/upload/v1747951963/IMG_7197_h3oq4n.jpg",
    title: "Sweatshirt Sketch",
    author: "Lennard Szyperski",
  },
  {
    img: "https://res.cloudinary.com/dcuh2fjgt/image/upload/v1747951985/IMG_9426_ixfa5h.jpg",
    title: "Clothing Sketch",
    author: "Lennard Szyperski",
  },
  {
    img: "https://res.cloudinary.com/dcuh2fjgt/image/upload/v1747952030/IMG_6440_woc112.jpg",
    title: "Lips Practice",
    author: "Lennard Szyperski",
  },
];

export default function PortfolioImageList() {
  const [open, setOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);
  const [modalTitle, setModalTitle] = useState("");

  const handleOpen = (img, title) => {
    setModalImg(img);
    setModalTitle(title);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const [showFade, setShowFade] = useState(false);

  useEffect(() => {
    setShowFade(true);
  }, []);

  return (
    <Fade in={showFade} timeout={500}>
      <Box
        sx={{
          width: "100%",
          maxWidth: 1200,
          height: 1000,
          overflowY: "scroll",
        }}
      >
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              onClick={() => handleOpen(item.img, item.title)}
              sx={{ cursor: "pointer" }}
            >
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
              {/* <ImageListItemBar
              title={item.title}
              //   subtitle={item.author}
            /> */}
            </ImageListItem>
          ))}
        </ImageList>
        <Modal
          open={open}
          onClose={handleClose}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              outline: "none",
              maxWidth: "95vw",
              maxHeight: "95vh",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 2,
              position: "relative",
            }}
          >
            <IconButton
              onClick={handleClose}
              sx={{
                alignSelf: "flex-end",
                color: "#fff",
                backgroundColor: "rgba(0,0,0,0.5)",
                "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
                zIndex: 1,
              }}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <img
              src={modalImg}
              alt={modalTitle}
              style={{
                maxWidth: "90vw",
                maxHeight: "80vh",
                objectFit: "contain",
                borderRadius: 8,
                background: "transparent",
                margin: "auto",
                display: "block",
              }}
            />
            <Box sx={{ color: "#fff", mt: 2, fontSize: 18 }}>{modalTitle}</Box>
          </Box>
        </Modal>
      </Box>
    </Fade>
  );
}
