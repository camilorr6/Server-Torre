const axios = require('axios');
const { fetchBasicInfo } = require('../../modules/bioModules');

describe("fetchBasicInfo", () => {
    it("should return filtered data from bio", async () => {
        axios.get = jest.fn((url) => {
            return {
                data: {
                    person: {
                        username: "Test Username",
                        name: "Test Name",
                        picture: "Test Picture",
                        summaryOfBio: "Test Summary"
                    }
                }
            }
        });

        const bioBasicInfo = await fetchBasicInfo("Test Username");

        expect(bioBasicInfo).toMatchObject({
            username: "Test Username",
            name: "Test Name",
            picture: "Test Picture",
            summaryOfBio: "Test Summary"
        });
    });
});
