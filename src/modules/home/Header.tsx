import { Box, SxProps, Theme } from "@mui/material";

export const Header = () => {
  return (
    <Box className="Header" sx={sx}>
      フッター
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Header" : {
    width: "100%",
  },
};