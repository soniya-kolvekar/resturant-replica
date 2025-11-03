"use client";
import React from "react";
export default function SafeHydrate({ children }) {
  const [isMounted, setIsMounted] = React.useState(false);
  React.useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;
  return <>{children}</>;
}