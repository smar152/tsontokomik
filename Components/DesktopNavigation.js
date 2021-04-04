import MenuLinks from "./menuLinks.js";

export default function DesktopNavigation({ currentPageTitle, language }) {
  return (
    <>
      <div className="d-none d-md-block pt-3">
        <MenuLinks currentPageTitle={currentPageTitle} language={language} />
      </div>
    </>
  );
}
