const { fetchBasicInfo } = require('../modules/bioModules');

const getBasicInfo = async (req, res) => {
  try {
    console.log("inside")
    const { username } = req.params;
    const basicInfo = await fetchBasicInfo(username);
    console.log(basicInfo)
    res.json(basicInfo);
  } catch (error) {
    console.error('Error fetching basic info:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getBasicInfo,
};
