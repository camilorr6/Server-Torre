const { fetchBasicInfo, fetchStrengths, fetchSkillDetails } = require('../modules');

const getBasicInfo = async (req, res) => {
  try {
    const { username } = req.params;
    console.log(req.params)
    const basicInfo = await fetchBasicInfo(username);
    res.json(basicInfo);
  } catch (error) {
    console.error('Error fetching basic info:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getStrengths = async (req, res) => {
  try {
    const { username } = req.params;
    const strengths = await fetchStrengths(username);
    res.json(strengths);
  } catch (error) {
    console.error('Error fetching strengths:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

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
  getBasicInfo,
  getStrengths,
  getSkillDetails,
};
