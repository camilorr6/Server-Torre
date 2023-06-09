const axios = require('axios');

const fetchBasicInfo = async (username) => {
  const response = await axios.get(`https://torre.bio/api/bios/${username}`);
  const person = response.data.person;
  const basicInfo = {
    username: person.username,
    name: person.name,
    picture: person.picture,
    summaryOfBio: person.summaryOfBio,
  };
  return basicInfo;
};

module.exports = {
  fetchBasicInfo,
};
