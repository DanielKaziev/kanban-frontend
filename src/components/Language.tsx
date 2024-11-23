import LanguageIcon from "@mui/icons-material/Language";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import i18n from "../i18n";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { IconButton } from "@mui/material";

const languages: Array<string> = ["I18N_RUSSIAN", "I18N_ENGLISH"];

enum Languages {
  RU = "ru",
  EN = "en",
}

const LanguageSwitcher = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);
  const { t } = useTranslation("settings");

  const changeLanguage = (language: Languages) => {
    i18n.changeLanguage(language);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }
    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row" spacing={2}>
      <IconButton ref={anchorRef} aria-label="exit" onClick={handleToggle}>
        <LanguageIcon color="info" />
      </IconButton>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        placement="bottom"
        transition
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  {languages.map((language, index) => (
                    <MenuItem
                      key={index}
                      onClick={(event) => {
                        handleClose(event);
                        changeLanguage(
                          index === 0 ? Languages.RU : Languages.EN
                        );
                      }}
                    >
                      {t(language)}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Stack>
  );
};

export default LanguageSwitcher;
