import { render, screen } from '@testing-library/react'
import Hero from '../../components/Hero'

describe('Hero', () => {
  it('renders the name', () => {
    render(<Hero />)
    expect(screen.getByText('Dimitris Sidiropoulos.')).toBeInTheDocument()
  })

  it('renders the greeting', () => {
    render(<Hero />)
    expect(screen.getByText('Hi, my name is')).toBeInTheDocument()
  })

  it('renders CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByText('Get in touch')).toBeInTheDocument()
    expect(screen.getByText('View my work')).toBeInTheDocument()
  })
})
