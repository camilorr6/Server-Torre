const axios = require('axios');

const fetchSkillDetails = async (username, skillId) => {
  const response = await axios.get(`https://torre.bio/api/bios/${username}`);
  const skills = response.data.strengths;
  const skill = skills.find((s) => s.id === skillId);
  const skillDetails = {
    id: skill.id,
    name: skill.name,
    proficiency: skill.proficiency,
    weight: skill.weight,
    recommendations: skill.recommendations,
  };
  return skillDetails;
};

module.exports = {
  fetchSkillDetails,
};
