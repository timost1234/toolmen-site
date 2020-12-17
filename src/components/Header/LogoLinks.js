import React from "react";
import { useTranslation } from "react-i18next";
import Logo from "assets/img/settings.svg";

const LogoLink = () => {
  const { t } = useTranslation();
  return (
    <a
      className="my-2 text-2xl lg:my-0 tracking-wide focus:no-outline flex items-center font-semibold"
      href="/"
    >
      {/* <img className="w-8 mr-3" src={Logo} alt="logo" /> */}
      {t("header.toolmenLab")}
    </a>
  );
};

export default LogoLink;
