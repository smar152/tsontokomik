import MenuLinks from "./MenuLinks.js";

export default function DesktopNavigation({ currentPageTitle, language }) {
  return (
    <>
      <div className="d-none d-md-flex pt-3 justify-content-between">
        <MenuLinks currentPageTitle={currentPageTitle} language={language} />
      </div>
    </>
  );
}
