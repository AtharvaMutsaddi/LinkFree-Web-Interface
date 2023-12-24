import React, { useState } from "react";
import { useEffect } from "react";
import { fetchTemplates } from "../services/apiFunctions";
import { Link } from "react-router-dom";
// import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
const TemplatesList = () => {
  const [templates, setTemplates] = useState([]);
  const fetchData = async () => {
    try {
      const resp = await fetchTemplates();
      setTemplates(resp);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    fetchData();
  }, [templates]);

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h3>Ready Templates</h3>
      {templates.map((template) => (
        <Card
          sx={{
            display: "flex",
            border: "2px solid black",
            width: "80%",
            margin: "auto",
            marginBottom: "8px",
            justifyContent:'space-between'
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
          <Box sx={{ display: "flex"}}>
            <Button>
              <Link to={`/template/${encodeURIComponent(template.fileName)}`}>
                View
              </Link>
            </Button>
            <Button>Share</Button>
            <Button>
              <VisibilityIcon />
              <span style={{ marginLeft: "10px" }}>{template.views.length}</span>
            </Button>
          </Box>
        </Card>
      ))}
    </div>
  );
};

export default TemplatesList;
