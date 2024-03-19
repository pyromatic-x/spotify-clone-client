import { Box, ListItem, styled } from "@mui/material";

export const PopoverContent = styled(Box)(({ theme }) => ({
  padding: "4px",
}));

export const StyledPopoverItem = styled(ListItem, {
  shouldForwardProp: (prop) => prop !== "disabled",
})<{ disabled?: boolean }>(({ theme, disabled }) => ({
  padding: "8px 12px",
  cursor: disabled ? "auto" : "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "transparent",
  borderRadius: "2px",
  minHeight: "40px",
  fontSize: "14px",

  ...(!disabled && {
    "&:hover": {
      backgroundColor: theme.palette.background.popoverHighlight,
    },
  }),

  "& > p": {
    fontSize: "inherit",

    ...(disabled && {
      fontSize: "12px",
      fontWeight: 500,
      color: theme.palette.secondary.main,
    }),
  },
}));

StyledPopoverItem.defaultProps = {
  disablePadding: true,
};
