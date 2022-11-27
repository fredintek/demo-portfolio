import { useRef, useState, useEffect } from "react";
import Theme from "./theme/Theme";
import {
  About,
  Contact,
  Faq,
  FloatingNav,
  Footer,
  Header,
  NavBar,
  Portfolio,
  Services,
  Testimonials,
} from "./sections";
import { useThemeContext } from "./context/themeContext";

function App() {
  const mainRef = useRef();
  const [showFloatingNav, setShowFloatingNav] = useState(true);
  const [siteYPosition, setSiteYPosition] = useState(0);
  const { themeState } = useThemeContext();

  const showFloatingNavHandler = () => {
    setShowFloatingNav(true);
  };

  const hideFloatingNavHandler = () => {
    setShowFloatingNav(false);
  };

  // now check if floating nav should be shown or not
  const floatingNavToggleHandler = () => {
    if (
      siteYPosition < mainRef?.current.getBoundingClientRect().y - 20 ||
      siteYPosition > mainRef?.current.getBoundingClientRect().y + 20
    ) {
      showFloatingNavHandler();
    } else {
      hideFloatingNavHandler();
    }

    setSiteYPosition(mainRef?.current.getBoundingClientRect().y);
  };

  useEffect(() => {
    const checkYPosition = setInterval(floatingNavToggleHandler, 2000);

    return () => clearInterval(checkYPosition);
  }, [siteYPosition]);

  // console.log(showFloatingNav);
  // console.log(mainRef.current.getBoundingClientRect());

  return (
    <main
      className={`${themeState.primary} ${themeState.background}`}
      ref={mainRef}
    >
      <Theme />
      <NavBar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
      {showFloatingNav && <FloatingNav />}
    </main>
  );
}

export default App;
