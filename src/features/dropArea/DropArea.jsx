import React, { useState } from "react";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import "./DropArea.css";

const { Dragger } = Upload;
export const DropArea = ({ setCurrentDisplay }) => {
  const [fileList, setFileList] = useState([]);
  const draggerProps = {
    fileList,
    name: "file",
    multiple: false,
    action: "https://whois.nomada.cloud/upload",
    method: "POST",
    headers: {
      Nomada: "YjgxMTE1MTUtZjQ4OC00NTUxLWI5M2EtM2I3NTlkNTdhYTg4",
    },
    beforeUpload(file) {
      const type = file.type.toLowerCase();
      if (type === "image/jpeg" || type === "image/png") {
        return true;
      }
      message.error(
        "Unsupported file type. Check that file type is either JPG or PNG."
      );
      return false;
    },
    onChange(info) {
      const { status, response } = info.file;

      //If file type is not accepted, avoid adding file to fileList
      if (!status) {
        setFileList(info.fileList.filter((file) => !!file.status));
        return;
      }

      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }

      if (status === "done") {
        // Check if there are no error.
        if (response && response.error === "") {
          message.success(
            `We recognized ${response.actorName} in ${info.file.name}.`
          );
          setCurrentDisplay({ type: "details", actorName: response.actorName });
          return;
        } else {
          message.error(
            `We couldn't recognize an actor in the photo ${info.file.name}, try again.`
          );
          setFileList(
            info.fileList.map((file) => {
              if (file.uid === info.file.uid) {
                return {
                  ...file,
                  status: "error",
                  response: "We couldn't recognize an actor for this file",
                };
              }
              return file;
            })
          );
          return;
        }
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
      setFileList(info.fileList);
    },
  };

  return (
    <div className="DropArea">
      <h1>Who is this actor?</h1>
      <Dragger {...draggerProps}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Click or drag an image</p>
        <p className="ant-upload-hint">
          Select the photo of a famous actor to know who they are and what
          movies they have.
        </p>
      </Dragger>
    </div>
  );
};
