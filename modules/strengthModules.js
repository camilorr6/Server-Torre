const axios = require('axios');

const fetchStrengths = async (username) => {
  const response = await axios.get(`https://torre.bio/api/bios/${username}`);
  const strengths = response.data.strengths;
  const processedStrengths = strengths.map((strength) => ({
    id: strength.id,
    name: strength.name,
    proficiency: strength.proficiency,
  }));
  return processedStrengths;
};

module.exports = {
  fetchStrengths,
};
