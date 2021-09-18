import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ColorValue = ({ color, small }) => {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <CopyToClipboard text={color} onCopy={() => setIsCopied(true)}>
      {small === true ? (
        <small className="copy">{color}</small>
      ) : (
        <p className="copy">{color}</p>
      )}
    </CopyToClipboard>
  );
};

export default ColorValue;
