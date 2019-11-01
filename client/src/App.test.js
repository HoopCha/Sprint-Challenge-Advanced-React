import React from 'react';
import App from './App';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(rtl.cleanup);

it('renders without crashing', () => {
  const wrapper = rtl.render(<App/>)
});

it('renders the first person', async () => {
  const { getByText } = rtl.render(<App/>)
  const element = await rtl.waitForElement(() => getByText("Alex Morgan"));
  expect(element).toBeInTheDocument();
})

it('renders the last person', async () => {
  const { getByText } = rtl.render(<App/>)
  const element = await rtl.waitForElement(() => getByText("Tierna Davidson"));
  expect(element).toBeInTheDocument();
})

it('renders the country', async () => {
  const { getByText } = rtl.render(<App/>)
  const element = await rtl.waitForElement(() => getByText("Country: Norway"));
  expect(element).toBeInTheDocument();
})

it('darkmode turns on', () => {
  const { getByTestId, getByText } = rtl.render(<App />);
  rtl.fireEvent.click(getByText("."));
  expect(getByTestId("dark")).toHaveTextContent("On");
});