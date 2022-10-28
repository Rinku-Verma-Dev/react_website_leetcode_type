import React from "react";

import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import "./style.css";
import useAuth from "../../routers/useAuthHook/useAuth";

const Header = ({
  title = "",
  onclickProfile,
  onClickLogin,
  onclickHome,
  auth,
}) => {
  auth = useAuth();

  return (
    <>
      <nav className="navigation-bar">
        <div className="left-nav" onClick={onclickHome}>
          <IntegrationInstructionsIcon sx={{ fontSize: 40 }} />
          <span className="title">{title}</span>
        </div>
        <div className="mid-nav">
          <div>Problems</div>
          <div>Category</div>
        </div>
        <div className={`${!auth ? "rigth-nav" : "rigth-nav-prifile"}`}>
          {!auth ? (
            <button onClick={onClickLogin} type="button">
              Sign In
            </button>
          ) : (
            <>
              <button
                className="profile-btn"
                onClick={onclickProfile}
                type="button"
              >
                <AccountCircleIcon />
              </button>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
