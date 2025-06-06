import React from "react";

export const FadeRouteTransitionContext = React.createContext<{
  triggerMenuToLogin?: (nextContent: React.ReactNode, cb: () => void) => void;
  triggerLoginToMenu?: (nextContent: React.ReactNode, cb: () => void) => void;
}>({});