import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

export default function ManageDocument() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  // Load files from localStorage when component mounts
  useEffect(() => {
    const storedFiles = JSON.parse(localStorage.getItem("uploadedFiles")) || [];
    setUploadedFiles(storedFiles);
  }, []);

  // Handle file selection
  const handleInputFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Upload file and store in localStorage
  const uploadFile = () => {
    if (!selectedFile) {
      alert("Please select a file first!");
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);

    reader.onload = () => {
      const newFile = {
        name: selectedFile.name,
        data: reader.result,
      };

      const updatedFilesList = [...uploadedFiles, newFile];
      setUploadedFiles(updatedFilesList);
      localStorage.setItem("uploadedFiles", JSON.stringify(updatedFilesList));
      alert("File uploaded successfully!");
    };

    reader.onerror = (error) => {
      console.error("Error uploading file:", error);
    };
  };

  // Delete a file
  const deleteFile = (index) => {
    const updatedFilesList = uploadedFiles.filter((_, i) => i !== index);
    setUploadedFiles(updatedFilesList);
    localStorage.setItem("uploadedFiles", JSON.stringify(updatedFilesList));
    alert("File deleted successfully!");
  };

  // Download file
  const downloadFile = (file) => {
    const link = document.createElement("a");
    link.href = file.data;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Navbar />
      <h2 className="text-start">My Uploads</h2>

      <table className="table table-info table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>File Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {uploadedFiles.length > 0 ? (
            uploadedFiles.map((file, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{file.name}</td>
                <td>
                  <button
                    className="btn btn-primary mx-1"
                    onClick={() => downloadFile(file)}
                  >
                    Download
                  </button>
                  <button
                    className="btn btn-danger mx-1"
                    onClick={() => deleteFile(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center">
                No files uploaded
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Upload Section */}
      <div className="p-4 border rounded-lg shadow-md w-96 mx-auto mt-10">
        <input type="file" onChange={handleInputFileChange} className="mb-2" />
        <button onClick={uploadFile} className="btn btn-primary">
          Upload File
        </button>
      </div>
    </>
  );
}
