import { getGifs } from "../../helpers/getGifs";

describe("getGifs", () => {
  test("Debe de retornar un array de Gifs", async () => {
    const gifsArray = await getGifs("One Punch");
    expect(gifsArray.length).toBeGreaterThan(0);
    expect(gifsArray[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });

});
