import { AxeBuilder } from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

test('homepage loads', async ({ page }) => {
  await page.goto('/')

  await expect(
    page.getByRole('heading', { level: 1, name: 'Emma Tong' }),
  ).toBeVisible()
  await expect(page.getByRole('heading', { name: 'About' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'My Journey' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Elsewhere' })).toBeVisible()

  for (const city of ['Shanghai', 'Cupertino', 'New York City']) {
    await expect(page.getByRole('heading', { name: city })).toBeVisible()
  }

  const accessibilityScan = await new AxeBuilder({ page }).analyze()
  expect(accessibilityScan.violations).toEqual([])
})

test('mobile layout does not overflow horizontally', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')

  const dimensions = await page.evaluate(() => ({
    documentWidth: document.documentElement.scrollWidth,
    viewportWidth: document.documentElement.clientWidth,
  }))

  expect(dimensions.documentWidth).toBeLessThanOrEqual(dimensions.viewportWidth)
})
