const axios = require('axios');
const { fetchStrengths } = require('../../modules/strengthModules');

describe("fetchStrengths", () => {
    it("should return filtered data from strengths", async () => {
        axios.get = jest.fn((url) => {
            return {
                data: {
                    strengths: [
                        {
                            id: "Test id 1",
                            name: "Test name 1",
                            proficiency: "Test proficiency 1"
                        },
                        {
                            id: "Test id 2",
                            name: "Test name 2",
                            proficiency: "Test proficiency 2"
                        }
                    ]
                }
            }
        });

        const strengthsResult = [
            {
                id: "Test id 1",
                name: "Test name 1",
                proficiency: "Test proficiency 1"
            },
            {
                id: "Test id 2",
                name: "Test name 2",
                proficiency: "Test proficiency 2"
            }
        ]

        const strengthsInfo = await fetchStrengths("Test Username");

        expect(strengthsInfo).toMatchObject(strengthsResult);
    });
});
