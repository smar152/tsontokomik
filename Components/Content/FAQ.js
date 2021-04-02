import messages from "../../data/faqStrings";
import { getMessage } from "../../data/util";

const FAQ = ({ language }) => {
  const s = (key) => {
    return getMessage(key, messages, language);
  };
  return (
    <div>
      <div className="faq">{s("howwomen")}</div>
      <div className="faa">{s("andbut")}</div>
    </div>
  );
};

export default FAQ;
