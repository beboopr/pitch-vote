import { useContext } from "react";
import { UserContext } from "../../App";
import "./welcome-banner.css";

export default function WelcomeBanner() {
  const { user } = useContext(UserContext);
  return (
    <div className="welcome-banner-container">
      <h1 className="welcome-banner-h1">
        Welcome {user.displayName}
      </h1>
    </div>
  );
}
