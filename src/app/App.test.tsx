import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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
    expect(
      screen.getByRole('heading', { level: 2, name: 'Education' }),
    ).toBeInTheDocument()
  })

  it('renders the professional links exactly once', () => {
    render(<App />)

    for (const label of ['GitHub', 'LinkedIn', 'Resume']) {
      expect(screen.getAllByRole('link', { name: label })).toHaveLength(1)
    }

    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/emma-t-81bb7917a/',
    )
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
      'href',
      'https://github.com/emmatyy19?tab=repositories',
    )
    expect(screen.getByRole('link', { name: 'Resume' })).toHaveAttribute(
      'href',
      '/documents/emma-resume.pdf',
    )
    expect(screen.getByRole('link', { name: 'Resume' })).toHaveAttribute(
      'download',
      'Emma-Resume.pdf',
    )
  })

  it('renders the approved portrait', () => {
    render(<App />)

    expect(
      screen.getByRole('img', { name: 'Portrait of Emma' }),
    ).toHaveAttribute('src', expect.stringContaining('emma-portrait'))
  })

  it('renders the journey in chronological order', () => {
    render(<App />)

    const journey = screen.getByRole('region', { name: 'My Journey' })
    const cities = within(journey)
      .getAllByRole('heading', { level: 3 })
      .map((heading) => heading.textContent)

    expect(cities).toEqual(['Shanghai', 'Cupertino', 'New York City'])
    expect(
      within(journey).getByText('where family, food, and home began'),
    ).toBeInTheDocument()
    expect(
      within(journey).getByText('where curiosity grew into craft'),
    ).toBeInTheDocument()
    expect(
      within(journey).getByText('where finance met software and AI'),
    ).toBeInTheDocument()
  })

  it('renders the approved personal copy without visible placeholders', () => {
    render(<App />)

    expect(
      screen.getByText(/I build thoughtful AI systems/),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/software engineer working across AI, data/),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/I trade code for golf courses and yarn/),
    ).toBeInTheDocument()
    expect(screen.queryByText(/^\[[A-Z_]+\]$/)).not.toBeInTheDocument()
  })

  it('renders three approved illustrations per city', () => {
    render(<App />)

    const journey = screen.getByRole('region', { name: 'My Journey' })

    expect(within(journey).getAllByRole('img')).toHaveLength(9)

    for (const prefix of ['SHANGHAI', 'CUPERTINO', 'NYC']) {
      expect(screen.queryByText(`[${prefix}_PRIMARY]`)).not.toBeInTheDocument()
      expect(screen.queryByText(`[${prefix}_CAPTION]`)).not.toBeInTheDocument()
    }

    expect(
      within(journey).getByRole('img', {
        name: 'Painted illustration of a New York avenue in autumn',
      }),
    ).toBeInTheDocument()
  })

  it('renders the education journey in chronological order', () => {
    render(<App />)

    const education = screen.getByRole('region', { name: 'Education' })
    const institutions = within(education)
      .getAllByRole('heading', { level: 3 })
      .map((heading) => heading.textContent)

    expect(institutions).toEqual(['NYU Stern', 'Columbia University'])
    expect(within(education).getByText('B.S. in Business')).toBeInTheDocument()
    expect(
      within(education).getByText('M.S. in Computer Science'),
    ).toBeInTheDocument()
    expect(within(education).getByText('Expected 2027')).toBeInTheDocument()
    expect(screen.queryByText('[ACADEMIC_SKETCH]')).not.toBeInTheDocument()
  })

  it('switches between five-image hobby galleries', async () => {
    const user = userEvent.setup()
    render(<App />)

    const golfTab = screen.getByRole('tab', { name: 'Golf' })
    const crochetTab = screen.getByRole('tab', { name: 'Crochet' })

    expect(golfTab).toHaveAttribute('aria-selected', 'true')
    expect(crochetTab).toHaveAttribute('aria-selected', 'false')
    expect(
      screen.getByRole('img', {
        name: 'Emma finishing a golf swing on a coastal course',
      }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('img')).toHaveLength(17)
    expect(screen.queryByText('[GOLF_IMAGE_1]')).not.toBeInTheDocument()
    expect(screen.queryByText('[CROCHET_IMAGE_1]')).not.toBeInTheDocument()

    await user.click(crochetTab)

    expect(crochetTab).toHaveAttribute('aria-selected', 'true')
    expect(
      screen.getByRole('img', {
        name: 'A flat crocheted circle edged with purple tulips',
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('img', {
        name: 'The same crochet piece gathered into a bouquet of purple tulips',
      }),
    ).toBeInTheDocument()
    expect(screen.queryByText('[CROCHET_IMAGE_1]')).not.toBeInTheDocument()
    expect(screen.queryByText('[GOLF_IMAGE_1]')).not.toBeInTheDocument()
  })

  it('supports automatic keyboard activation across hobby tabs', async () => {
    const user = userEvent.setup()
    render(<App />)

    const golfTab = screen.getByRole('tab', { name: 'Golf' })
    const crochetTab = screen.getByRole('tab', { name: 'Crochet' })

    golfTab.focus()
    await user.keyboard('{ArrowRight}')
    expect(crochetTab).toHaveFocus()
    expect(crochetTab).toHaveAttribute('aria-selected', 'true')

    await user.keyboard('{Home}')
    expect(golfTab).toHaveFocus()
    expect(golfTab).toHaveAttribute('aria-selected', 'true')

    await user.keyboard('{End}')
    expect(crochetTab).toHaveFocus()
    expect(crochetTab).toHaveAttribute('aria-selected', 'true')

    await user.keyboard('{ArrowLeft}')
    expect(golfTab).toHaveFocus()
    expect(golfTab).toHaveAttribute('aria-selected', 'true')
  })
})
