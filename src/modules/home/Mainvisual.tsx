import { Box, SxProps, Theme } from "@mui/material";

export const Mainvisual = () => {
  return (
    <Box className="Mainvisual" sx={sx}>
      フッター
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Mainvisual" : {
    width: "100%",
  },
};