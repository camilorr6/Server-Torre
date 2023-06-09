const { fetchSkillDetails } = require('../modules/detailModules');

const getSkillDetails = async (req, res) => {
  try {
    const { username, skillId } = req.params;
    const skillDetails = await fetchSkillDetails(username, skillId);
    res.json(skillDetails);
  } catch (error) {
    console.error('Error fetching skill details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getSkillDetails,
};
