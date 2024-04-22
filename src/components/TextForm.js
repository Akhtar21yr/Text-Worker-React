import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpCase = () => {
    setText(text.toUpperCase());
  };

  const handleLoCase = () => {
    setText(text.toLowerCase());
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    const ctext = document.getElementById('MyBox');
    ctext.select();
    navigator.clipboard.writeText(ctext.value);
  };

  const handleExtraSpaces = () => {
    const newText = text.split(/[ \t\n]+/).join(' ');
    setText(newText);
  };

  const handleClear = () => {
    setText('');
  };

  const wordCount = text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length;

  return (
    <>
      <div className="mb-3 container">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }}
          value={text}
          onChange={handleOnChange}
          placeholder="Enter Your Text Here"
          id="MyBox"
          rows="8"
        />
        <button className="btn btn-primary mt-2 mx-1" onClick={handleUpCase}>
          Convert To UpperCase
        </button>
        <button className="btn btn-primary mt-2 mx-1" onClick={handleLoCase}>
          Convert To LowerCase
        </button>
        <button className="btn btn-primary mt-2 mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mt-2 mx-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mt-2 mx-1" onClick={handleClear}>
          Clear Text
        </button>
      </div>

      <div className="container">
        <h3>Your Text Summary</h3>
        <p>{wordCount} words and {text.length} characters</p>
        <p>{0.008 * wordCount} minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : 'Enter something to preview'}</p>
      </div>
    </>
  );
}
