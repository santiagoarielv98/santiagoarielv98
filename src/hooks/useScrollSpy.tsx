import React from "react";

export default function useScrollSpy() {
  const hash = window.location.hash.slice(1);
  const [activeSection, setActiveSection] = React.useState(hash);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      document.querySelectorAll("section[id]").forEach((el) => {
        const { offsetTop, offsetHeight } = el as HTMLElement;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(el.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  React.useEffect(() => {
    document.getElementById(hash)?.scrollIntoView();
  }, [hash]);

  return activeSection;
}
