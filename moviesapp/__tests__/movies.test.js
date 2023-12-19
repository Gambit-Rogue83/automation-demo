const { By, Builder, Browser, until} = require("selenium-webdriver");

let driver

beforeEach(async () =>{
    driver = await new Builder().forBrowser(Browser.CHROME).build()
});

afterEach(async () =>{
    await driver.quit()
});

describe("Test movie app", () =>{
    it("can add a movie", async() =>{
        const movie = 'John Wick'
        await driver.get("http://localhost:3000/")
        await driver.findElement(By.css('input[name="movieTitle"]')).sendKeys(movie)
        await driver.sleep(2000)
        await driver.findElement(By.xpath('//button[@type="submit"]')).click()
        const addedMovie = await driver.wait(until.elementLocated(By.css('label[for="movie-0"]')), 1000)
        await driver.sleep(2000)
        expect(await addedMovie.getText()).toBe(movie)
    })
})
