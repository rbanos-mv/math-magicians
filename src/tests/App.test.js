import renderer from 'react-test-renderer';
import { render, fireEvent, screen } from '@testing-library/react';
import App from '../App';
import Home from '../pages/Home';
import CalcPage from '../pages/CalcPage';

describe('Test the App components', () => {
  it('renders the App correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the Home page correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the Calculator page correctly', () => {
    const tree = renderer.create(<CalcPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('shows the home page when clicking the navbar link', () => {
    const { container } = render(<App url="/" />);
    fireEvent.click(screen.getByText('Calculator'));
    fireEvent.click(screen.getByText('Home'));
    expect(container.getElementsByClassName('home')[0]).toHaveTextContent('Welcome to our page!');
  });

  it('shows the calculator page when clicking the navbar link', () => {
    const { container } = render(<App url="/" />);
    fireEvent.click(screen.getByText('Calculator'));
    expect(container.getElementsByClassName('calcpage')[0]).toHaveTextContent(
      "Let's do some math!",
    );
  });

  it('shows the quote page when clicking the navbar link', () => {
    const { container } = render(<App url="/" />);
    fireEvent.click(screen.getByText('Quote'));
    expect(container.getElementsByClassName('quote')[0]).toBeTruthy();
  });

  it('performs math operation on calculator', () => {
    const { container } = render(<CalcPage />);
    expect(container.getElementsByClassName('calcpage')[0]).toHaveTextContent(
      "Let's do some math!",
    );

    fireEvent.click(screen.getByText('7'));
    fireEvent.click(screen.getByText('×'));
    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByText('='));
    expect(container.getElementsByClassName('previous')[0]).toHaveTextContent('63');
  });
});
