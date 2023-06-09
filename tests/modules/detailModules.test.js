const axios = require('axios');
const { fetchSkillDetails } = require('../../modules/detailModules');

describe("fetchSkillDetails", () => {
    it("should return filtered data from skill details", async () => {
        axios.get = jest.fn((url) => {
            return {
                data: {
                    strengths: [
                        {
                            id: "Test id 1",
                            name: "Test name 1",
                            proficiency: "Test proficiency 1",
                            weight: "Test weight 1",
                            recommendations: "Test recommendations 1"
                        },
                        {
                            id: "Test id 2",
                            name: "Test name 2",
                            proficiency: "Test proficiency 2",
                            weight: "Test weight 2",
                            recommendations: "Test recommendations 2"
                        }
                    ]
                }
            }
        });

        const strengthDetailsResult = {
            id: "Test id 1",
            name: "Test name 1",
            proficiency: "Test proficiency 1",
            weight: "Test weight 1",
            recommendations: "Test recommendations 1"
        }

        const strengthsInfo = await fetchSkillDetails("Test Username", "Test id 1");

        expect(strengthsInfo).toMatchObject(strengthDetailsResult);
    });
});
