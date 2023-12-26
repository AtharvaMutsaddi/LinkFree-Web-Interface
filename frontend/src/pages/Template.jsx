import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReadMe, updateViews } from "../services/apiFunctions";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { Button, Typography } from "@mui/material";

const Template = () => {
  const { encodedName } = useParams();
  const [readMe, setReadMe] = useState("");
  const fetchData = async () => {
    try {
      const resp = await getReadMe(encodedName);
      setReadMe(resp.readmeContent);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
    updateViews(encodedName)
  }, [encodedName]);

  const handleButtonClick = async () => {
    const folderName=decodeURIComponent(encodedName)
    try {
      const response = await fetch(`http://${process.env.HOSTNAME || "localhost"}:${process.env.PORT || 3001}/api/download`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ folderName }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error);
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${folderName}.zip`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  return (
    <div>
      <Typography variant="h2" mt={2} mb={2} ml={3}>
        {decodeURIComponent(encodedName)}
      </Typography>
      <div
        style={{
          width: "80%",
          margin: "auto",
          textAlign: "center",
          padding: "3em",
        }}
      >
        <Button
          variant="contained"
          style={{ fontSize: "25px" }}
          onClick={handleButtonClick}
        >
          Download?
        </Button>
      </div>
      <div
        style={{
          width: "80%",
          margin: "auto",
          border: "2px solid black",
          padding: "2rem",
          background: '#202020',
          color:'white'
        }}
      >
        {readMe ? (
          <>
            <h2>Read Me</h2>
            <Markdown
              rehypePlugins={[rehypeHighlight]}
              remarkPlugins={[remarkGfm]}
            >
              {readMe}
            </Markdown>
          </>
        ) : (
          <h3>This Theme Doesn't have a ReadMe</h3>
        )}
      </div>
      <br />
    </div>
  );
};

export default Template;