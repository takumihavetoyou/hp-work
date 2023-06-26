import { Box, SxProps, Theme } from "@mui/material";
import Mainvisualimg  from "../../resources/home/mainvisual_backgraound.png";

export const Mainvisual = () => {
  return (
    <Box className="Mainvisual" sx={sx}>
        <Box className="img1">
        <Box className="text1">安心<span　className="span1">と</span>信頼<span className="span1">✖︎</span><br></br>高度<span className="span1">な</span>技術力</Box>
        <Box className="text2">高品質な開発を標準に。</Box>
        </Box>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Mainvisual" : {
    width: "100%",
  },
  ".img1": {
    backgroundImage: `url(${Mainvisualimg})`,
    height: 700,
  },
  ".text1": {
    color: "#ffffff",
    paddingTop:"340px",
    paddingLeft:"100px",
    fontSize: "80px",
    fontWeight: 500,
    fontFamily:"Noto Sans JP",
  },
  ".text2": {
    color: "#ffffff",
    paddingLeft:"100px",
    fontSize:"60px",
    fontFamily:"Noto Sans JP",
    fontStyle:"normal",
    fontWeight: 500,
  },
  ".span1": {
    fontSize:"40px",
  },
};