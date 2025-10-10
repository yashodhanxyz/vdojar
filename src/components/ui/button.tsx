import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "ghost" | "surface";

type AnchorButtonProps = {
  href: string;
  icon?: ReactNode;
  variant?: ButtonVariant;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "type" | "href">;

type NativeButtonProps = {
  href?: undefined;
  icon?: ReactNode;
  variant?: ButtonVariant;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "href">;

type ButtonProps = AnchorButtonProps | NativeButtonProps;

export function Button({
  className,
  children,
  variant = "primary",
  icon,
  ...rest
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60";
  const styles = {
    primary: "bg-accent text-accent-foreground hover:bg-accent/90",
    ghost: "bg-transparent text-white/80 hover:bg-white/10",
    surface: "bg-surface/80 text-foreground hover:bg-surface/60",
  } satisfies Record<NonNullable<ButtonProps["variant"]>, string>;

  const content = (
    <>
      {icon ? <span className="text-lg" aria-hidden>{icon}</span> : null}
      <span>{children}</span>
    </>
  );

  if ("href" in rest && rest.href) {
    const { href, target, rel, ...anchorRest } = rest;
    return (
      <Link
        href={href}
        className={cn(base, styles[variant], className)}
        target={target}
        rel={rel}
        {...anchorRest}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={rest.type ?? "button"}
      className={cn(base, styles[variant], className)}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}
