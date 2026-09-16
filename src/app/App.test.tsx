import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App.tsx'

describe('App', () => {
  it('renders the identity and semantic section headings', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { level: 1, name: 'Emma Tong' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'About' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'My Journey' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Elsewhere' }),
    ).toBeInTheDocument()
  })

  it('renders the professional links exactly once', () => {
    render(<App />)

    for (const label of ['GitHub', 'LinkedIn', 'Resume']) {
      expect(screen.getAllByRole('link', { name: label })).toHaveLength(1)
    }
  })

  it('renders the journey in chronological order', () => {
    render(<App />)

    const journey = screen.getByRole('region', { name: 'My Journey' })
    const cities = within(journey)
      .getAllByRole('heading', { level: 3 })
      .map((heading) => heading.textContent)

    expect(cities).toEqual(['Shanghai', 'Cupertino', 'New York City'])
  })

  it('provides a primary and two supporting placeholders per city', () => {
    render(<App />)

    for (const prefix of ['SHANGHAI', 'CUPERTINO', 'NYC']) {
      expect(screen.getByText(`[${prefix}_PRIMARY]`)).toBeInTheDocument()
      expect(screen.getByText(`[${prefix}_DETAIL_1]`)).toBeInTheDocument()
      expect(screen.getByText(`[${prefix}_DETAIL_2]`)).toBeInTheDocument()
      expect(screen.getByText(`[${prefix}_CAPTION]`)).toBeInTheDocument()
    }
  })
})
