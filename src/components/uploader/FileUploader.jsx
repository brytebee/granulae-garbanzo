import React, { useState } from "react";
import PropTypes from "prop-types";

const FileUploader = ({ picker }) => {
  const [file, setFile] = useState("");

  const handleSelection = (event) => {
    const selected = event.target.files[0];
    setFile(selected);
  };

  function onSubmit() {
    console.log(file);
  }
  return (
    <div onBlur={onSubmit}>
      <div>
        <label for="doc_uploads">{picker}</label>
      </div>
      <input
        type="file"
        id="doc_uploads"
        name="doc_uploads"
        accept=".pdf, .doc, .docx"
        // multiple // ONLY IF YOU WANT THE USER TO SELECT/UPLOAD MULTIPLE FILES.
        style={{ opacity: "0" }}
        onChange={handleSelection}
      />
    </div>
  );
};

FileUploader.propTypes = {
  picker: PropTypes.node.isRequired,
};

export default FileUploader;
