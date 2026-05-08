"use client";
import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";

/** Light-bg routes: switch <body> to ivory. List of route prefixes. */
const LIGHT_ROUTES = [
  "/about",
  "/journal",
  "/originals",
  "/find-my-product",
  "/request-a-product",
  "/legal",
  "/contact",
  "/cart",
];

export function BodyTheme() {
  const loc = useLocation();
  useEffect(() => {
    const isLight = LIGHT_ROUTES.some((p) => loc.pathname === p || loc.pathname.startsWith(p + "/"));
    document.body.classList.toggle("bg-light", isLight);
  }, [loc.pathname]);
  return null;
}
