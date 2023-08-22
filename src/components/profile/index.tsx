import React from "react";
import { Content } from "./style";

const Profile = () => {
  return <Content onClick={(e) => e.stopPropagation()}>Profile</Content>;
};

export default Profile;
