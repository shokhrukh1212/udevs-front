import React from "react";
import { Box, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Badge from "@mui/material/Badge";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ButtonComponent from "components/Button";
import CheckIcon from "@mui/icons-material/Check";
import { CommentProps } from "types/common";

const Comment: React.FC<CommentProps> = ({ comment }) => {
  return (
    <Box component="div">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography component={"span"} sx={{ mr: 3 }}>
              Коментарии(1)
            </Typography>
            <Badge badgeContent={`+${comment.length}`} color="primary"></Badge>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          {comment.map((item, index) => (
            <Typography key={index} variant="body2">
              {item}
            </Typography>
          ))}
        </AccordionDetails>
      </Accordion>

      <ButtonComponent
        text="Готово"
        startIcon={<CheckIcon />}
        variant="outlined"
        styles={{ width: "100%", borderWidth: 2, mt: 2 }}
      />
    </Box>
  );
};

export default Comment;
