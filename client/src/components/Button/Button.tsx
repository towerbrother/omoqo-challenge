import Link, { LinkProps as NextLinkProps } from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type CustomProps = {
  className?: string;
};

type LinkProps = CustomProps &
  NextLinkProps & {
    type: "link";
    children: ReactChildren;
  };
type AnchorProps = CustomProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { type: "anchor" };
type ButtonProps = CustomProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    type: "button" | "reset" | "submit";
  };

type Props = LinkProps | AnchorProps | ButtonProps;

type ReactChild = string | ReactNode;
type ReactChildren = ReactChild | ReactChild[];

const AnchorButton = (props: AnchorProps) => {
  const { type, children, className, ...rest } = props;

  return (
    <button className={className}>
      <a {...rest}>{children}</a>
    </button>
  );
};

const LinkButton = (props: LinkProps) => {
  const { type, children, className, ...rest } = props;

  return (
    <button className={className}>
      <Link {...rest}>{children}</Link>
    </button>
  );
};

const DefaultButton = (props: ButtonProps) => {
  const { children, ...rest } = props;

  return <button {...rest}>{children}</button>;
};

export const Button = (props: Props) => {
  if (props.type === "anchor") {
    return <AnchorButton {...props} />;
  }

  if (props.type === "link") {
    return <LinkButton {...props} />;
  }

  return <DefaultButton {...props} />;
};

export default Button;
