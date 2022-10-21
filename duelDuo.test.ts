
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
    await driver.sleep(2000)

    let drawCards = await driver.findElement(By.id('draw'))
    await drawCards.click()
    expect(displayed).toBe(true)
    await driver.sleep(2000)

    let addDuo1 = await driver.findElement(By.className('bot-btn'))
    await addDuo1.click()
    expect(displayed).toBe(true)
    await driver.sleep(2000)

    let addDuo2 = await driver.findElement(By.className('bot-btn'))
    await addDuo2.click()
    expect(displayed).toBe(true)
    await driver.sleep(2000)

    let time2Duel = await driver.findElement(By.id('duel'))
    await time2Duel.click()
    await driver.sleep(2000)
})