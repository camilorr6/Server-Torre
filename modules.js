const axios = require('axios');

const fetchBasicInfo = async (username) => {
  const response = await axios.get(`https://search.torre.co/api/bios/${username}`);
  const basicInfo = {
    username: response.data.username,
    name: response.data.name,
    picture: response.data.picture,
    summaryOfBio: response.data.summaryOfBio,
  };
  return basicInfo;
};

const fetchStrengths = async (username) => {
  const response = await axios.get(`https://search.torre.co/api/bios/${username}`);
  const strengths = response.data.strengths;
  const processedStrengths = strengths.map((strength) => ({
    id: strength.id,
    name: strength.name,
    proficiency: strength.proficiency,
  }));
  return processedStrengths;
};

const fetchSkillDetails = async (username, skillId) => {
  const response = await axios.get(`https://search.torre.co/api/bios/${username}`);
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
  fetchBasicInfo,
  fetchStrengths,
  fetchSkillDetails,
};
