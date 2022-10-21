
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder()
.withCapabilities(Capabilities.chrome())
.build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)

    let drawCards = await driver.findElement(By.id('draw'))
    await drawCards.click()
    await driver.sleep(2000)

    let addDuo = await driver.findElement(By.className('bot-btn'))
    await addDuo.click()
    await driver.sleep(2000)
})