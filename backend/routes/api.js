const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const archiver = require("archiver");
const TemplateModel = require("../models/Template");

// Template Directory to communicate to dom
const TEMPLATE_DIR = "Templates";

router.post("/download", (req, res) => {
  const folderName = req.body.folderName;

  if (!folderName) {
    return res.status(400).json({ error: "Folder name is required." });
  }

  const folderPath = path.join(TEMPLATE_DIR, folderName);

  if (!fs.existsSync(folderPath)) {
    return res.status(404).json({ error: "Folder not found." });
  }

  const zipFileName = `${folderName}.zip`;

  res.attachment(zipFileName);
  const archive = archiver("zip", {
    zlib: { level: 9 },
  });

  archive.pipe(res);
  archive.directory(folderPath, false);
  archive.finalize();
});

// router.get("/templates", (req, res) => {
//   fs.readdir(TEMPLATE_DIR, (err, files) => {
//     if (err) {
//       return res.status(500).json({ message: err });
//     } else {
//       return res.status(200).json({ templates: files });
//     }
//   });
// });

router.get("/templates", async (req, res) => {
  try {
    const templates = await TemplateModel.find();
    res.status(200).json(templates);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/create-records", (req, res) => {
  fs.readdir(TEMPLATE_DIR, (err, files) => {
    if (err) {
      return res.status(500).json({ message: err });
    } else {
      // Extract file names
      const fileNames = files.map((file) => ({ fileName: file }));

      // Insert file names into MongoDB using insertMany
      TemplateModel.insertMany(fileNames);
      return res.status(500).json({ message: "Inserted Models Successfully!" });
    }
  });
});

router.get("/template/:name", (req, res) => {
  const encodedTemplateName = req.params.name;
  const templateName = decodeURIComponent(encodedTemplateName);
  const templatePath = path.join(TEMPLATE_DIR, templateName);

  // Read the contents of the template directory
  fs.readdir(templatePath, (err, files) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Error reading template directory" });
    }

    // Find a case-insensitive match for the README file
    const readmeFile = files.find((file) => file.toLowerCase() === "readme.md");

    if (!readmeFile) {
      return res
        .status(500)
        .json({ error: "README.md not found in the template directory" });
    }

    // Construct the path to the README file
    const readmePath = path.join(templatePath, readmeFile);

    // Read the contents of the README file
    fs.readFile(readmePath, "utf-8", (err, data) => {
      if (err) {
        return res.status(500).json({ error: "Error reading README.md" });
      }

      // Send the contents of README.md to the frontend
      res.status(200).json({ readmeContent: data });
    });
  });
});
router.post("/template/:name", async (req, res) => {
  try {
    const encodedTemplateName = req.params.name;
    const templateName = decodeURIComponent(encodedTemplateName);
    const ip = req.ip;

    // Find the template by fileName
    const template = await TemplateModel.findOneAndUpdate(
      { fileName: templateName },
      {
        $addToSet: {
          views: ip,
        },
      }
    );
    return res.status(204).json({ updatedtemplate: template });
  } catch (error) {
    console.error("Error adding IP to views:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
