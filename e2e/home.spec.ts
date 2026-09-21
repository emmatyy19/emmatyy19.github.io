import { AxeBuilder } from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

test('homepage loads', async ({ page }) => {
  await page.goto('/')

  await expect(
    page.getByRole('heading', { level: 1, name: 'Emma Tong' }),
  ).toBeVisible()
  await expect(page.getByRole('heading', { name: 'About' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'My Journey' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Education' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Elsewhere' })).toBeVisible()

  for (const city of ['Shanghai', 'Cupertino', 'New York City']) {
    await expect(page.getByRole('heading', { name: city })).toBeVisible()
  }

  const golfTab = page.getByRole('tab', { name: 'Golf' })
  const crochetTab = page.getByRole('tab', { name: 'Crochet' })

  await expect(golfTab).toHaveAttribute('aria-selected', 'true')
  await crochetTab.click()
  await expect(crochetTab).toHaveAttribute('aria-selected', 'true')
  await expect(
    page.getByRole('img', {
      name: 'The same crochet piece gathered into a bouquet of purple tulips',
    }),
  ).toBeVisible()
  await expect(page.getByRole('button', { name: 'Resume' })).toBeVisible()

  const accessibilityScan = await new AxeBuilder({ page }).analyze()
  expect(accessibilityScan.violations).toEqual([])
})

test('mobile layout does not overflow horizontally', async ({ page }) => {
  for (const width of [320, 390]) {
    await page.setViewportSize({ width, height: 844 })
    await page.goto('/')
    await page.evaluate(() => document.fonts.ready)

    const dimensions = await page.evaluate(() => ({
      documentWidth: document.documentElement.scrollWidth,
      viewportWidth: document.documentElement.clientWidth,
    }))

    expect(dimensions.documentWidth).toBeLessThanOrEqual(
      dimensions.viewportWidth,
    )
  }
})
