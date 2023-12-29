const axios = require("axios");

exports.getPublicStatus = async (req, res) => {
  let repoOwner = req.query.repoOwner;
  let repoName = req.query.repoName;
  try {
    // Fetch files from GitHub (public repository, no need for authorization)
    const response = await axios.get(
      `https://api.github.com/repos/${repoOwner}/${repoName}/contents`
    );
    res.json({
      message: "Updates checked.",
      data: {
        ...response.data,
      },
    });
  } catch (error) {
    if (!repoName || !repoOwner)
      res.status(500).json({ error: "Invalid Repo credentials." });
    console.error(error);
    res.status(500).json({ error: "Internal server error." });
  }
};
