import React, { useState, useEffect } from "react";
import { fetchTemplates } from "../services/apiFunctions";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Pagination, Stack } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { RWebShare } from "react-web-share";

const TemplatesList = () => {
  const [templates, setTemplates] = useState([]);
  const [page, setPage] = useState(1);
  const templatesPerPage = 15;

  const fetchData = async () => {
    try {
      const resp = await fetchTemplates();
      const sortedTemplates = resp.sort(
        (a, b) => b.views.length - a.views.length
      );
      setTemplates(sortedTemplates);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]); // Fetch data when the page changes

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Ready Templates</h1>
      <Stack
        spacing={2}
        sx={{ width: "80%", margin: "auto", fontSize: "8rem" }}
      >
        <Pagination
          count={Math.ceil(templates.length / templatesPerPage)}
          page={page}
          onChange={(event, value) => setPage(value)}
          color="primary"
        />
      </Stack>
      {templates
        .slice((page - 1) * templatesPerPage, page * templatesPerPage)
        .map((template) => (
          <Card
            sx={{
              display: "flex",
              border: "2px solid black",
              width: "80%",
              margin: "auto",
              marginBottom: "8px",
              justifyContent: "space-between",
            }}
            key={template._id}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  {template.fileName}
                </Typography>
              </CardContent>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Button>
                <Link
                  to={`/template/${encodeURIComponent(template.fileName)}`}
                  style={{
                    fontSize: "20px",
                    border: "none",
                    outline: "none",
                    backgroundColor: "transparent",
                    color: "#034f84",
                    padding: "8px 16px",
                  }}
                >
                  View
                </Link>
              </Button>
              <RWebShare
                data={{
                  text: "Visit our open source application 'LinkFree'. View/Download various templates and get a chance to contribute to the original LinkFree repository ",
                  url: `/template/${encodeURIComponent(template.fileName)}`,
                  title: `${template.fileName}`,
                }}
                onClick={() => console.log("shared successfully!")}
              >
                <button
                  style={{
                    fontSize: "20px",
                    border: "none",
                    outline: "none",
                    backgroundColor: "transparent",
                    color: "#034f84",
                    padding: "8px 16px",
                  }}
                >
                  Share 🔗
                </button>
              </RWebShare>
              <Button>
                <VisibilityIcon />
                <span style={{ marginLeft: "10px" }}>
                  {template.views.length}
                </span>
              </Button>
            </Box>
          </Card>
        ))}
    </div>
  );
};

export default TemplatesList;
