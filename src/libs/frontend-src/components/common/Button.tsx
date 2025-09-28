import Link from "next/link";
import React, { ReactNode } from "react";

type ButtonMainType = "Outline" | "Filled";

type ButtonThemeType =
  | "Primary"
  | "Secondary"
  | "Success"
  | "Warning"
  | "Danger";

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  isLink?: boolean;
  mainType?: ButtonMainType;
  theme?: ButtonThemeType;
  onClick?: () => void;
  href?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  const classes = ``;

  return props.isLink ? (
    <Link className={classes} href={props?.href || ""}>
      {props.children}
    </Link>
  ) : (
    <button className={classes} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
