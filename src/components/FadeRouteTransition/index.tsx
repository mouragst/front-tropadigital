import React from "react";
import { useLocation } from "react-router-dom";
import { FadeDiv } from "./styles";
import { FadeRouteTransitionContext } from "@/context/TransitionContext";

export const FadeRouteTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [prevChildren, setPrevChildren] = React.useState<React.ReactNode>(null);
  const [nextChildren, setNextChildren] = React.useState<React.ReactNode>(null);
  const [showTransition, setShowTransition] = React.useState(false);
  const [slideOut, setSlideOut] = React.useState(false);
  const [slideIn, setSlideIn] = React.useState(false);
  const [fadeOut, setFadeOut] = React.useState(false);
  const [fadeIn, setFadeIn] = React.useState(false);

  const triggerMenuToLogin = (nextContent: React.ReactNode, cb: () => void) => {
    setPrevChildren(children);
    setNextChildren(null);
    setShowTransition(true);
    setSlideOut(true);
    setSlideIn(false);
    setFadeOut(false);
    setFadeIn(false);

    setTimeout(() => {
      setSlideOut(false);
      setPrevChildren(null);
      setNextChildren(nextContent);
      setSlideIn(true);

      setTimeout(() => {
        setSlideIn(false);
        setShowTransition(false);
        cb();
      }, 500);
    }, 500);
  };

  const triggerLoginToMenu = (nextContent: React.ReactNode, cb: () => void) => {
    setPrevChildren(children);
    setNextChildren(null);
    setShowTransition(true);
    setFadeOut(true);
    setSlideOut(false);
    setSlideIn(false);
    setFadeIn(false);

    setTimeout(() => {
      cb();
      setNextChildren(nextContent);
      setFadeIn(true);

      setTimeout(() => {
        setFadeOut(false);
        setPrevChildren(null);

        setTimeout(() => {
          setFadeIn(false);
          setShowTransition(false);
        }, 500);
      }, 200);
    }, 100);
  };

  React.useEffect(() => {
    if (
      showTransition === false &&
      nextChildren &&
      children &&
      (children as React.ReactElement)?.type === (nextChildren as React.ReactElement)?.type
    ) {
      setNextChildren(null);
    }
  }, [children, nextChildren, showTransition]);

  React.useEffect(() => {
    setSlideIn(false);
    setSlideOut(false);
    setFadeIn(false);
    setFadeOut(false);
    setShowTransition(false);
    setPrevChildren(null);
    setNextChildren(null);
  }, [location.pathname]);

  return (
    <FadeRouteTransitionContext.Provider value={{ triggerMenuToLogin, triggerLoginToMenu }}>
      {showTransition && prevChildren && (
        <FadeDiv
          $animate={true}
          $slideOut={slideOut}
          $slideIn={false}
          $fadeOut={fadeOut}
          $fadeIn={false}
          style={{ position: "absolute", width: "100%" }}
        >
          {prevChildren}
        </FadeDiv>
      )}
      {showTransition && nextChildren && (
        <FadeDiv
          $animate={true}
          $slideOut={false}
          $slideIn={slideIn}
          $fadeOut={false}
          $fadeIn={fadeIn}
          style={{ position: "relative", width: "100%" }}
        >
          {nextChildren}
        </FadeDiv>
      )}
      {!showTransition && (
        <FadeDiv
          $animate={false}
          $slideOut={false}
          $slideIn={false}
          $fadeOut={false}
          $fadeIn={false}
          style={{ position: "relative", width: "100%" }}
        >
          {children}
        </FadeDiv>
      )}
    </FadeRouteTransitionContext.Provider>
  );
};