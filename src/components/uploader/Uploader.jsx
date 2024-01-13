import React, { useState } from "react";

const Uploader = () => {
  const [file, setFile] = useState("");

  const handleFile = (data) => {
    data.preventDefault();
    setFile(data.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    const normFile = { file: file };
    console.log(formData.get("file"), { normFile });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input multiple type="file" name="picture" onChange={handleFile} />
      <button type="submit">Upload</button>
    </form>
  );
};

export default Uploader;
