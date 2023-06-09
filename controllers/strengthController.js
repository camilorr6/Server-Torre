const { fetchStrengths } = require('../modules/strengthModules');

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

module.exports = {
  getStrengths
};
