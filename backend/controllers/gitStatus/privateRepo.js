const axios = require("axios");

exports.getPrivateStatus = async (req, res) => {
  let repoOwner = req.query.repoOwner;
  let repoName = req.query.repoName;
  let githubToken = req.query.githubToken;
  try {
    // Fetch files from GitHub
    const response = await axios.get(
      `https://api.github.com/repos/${repoOwner}/${repoName}/contents`,
      {
        headers: {
          Authorization: `Bearer ${githubToken}`,
        },
      }
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
