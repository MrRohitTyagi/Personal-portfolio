import { useMemo } from "react";

const RenderBoldText = ({ text, comp: Comp = "li" }) => {
  const parsedText = useMemo(() => {
    let str = text.replace(
      /\*\*(.*?)\*\*/g,
      "<span class='bold-text'>$1</span>"
    );
    return str;
  }, [text]);

  return <Comp dangerouslySetInnerHTML={{ __html: parsedText }} />;
};
export default RenderBoldText;
