import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '.'

const HEADER_TEXT = 'J.B Bungalows menu'

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(new RegExp(HEADER_TEXT, 'gi'))
  expect(linkElement).toBeInTheDocument()
})
