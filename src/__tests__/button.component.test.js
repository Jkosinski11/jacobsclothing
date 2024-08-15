import { render, screen } from '@testing-library/react';
import Button, { BUTTON_TYPES_CLASSES } from '../components/button.component';

describe('button tests', () => {
	test('should render base button when nothing is passed', () => {
		render(<Button />);

		render(<Button buttonType={BUTTON_TYPES_CLASSES.google} />);
		expect(screen.getByRole('button')).toHaveStyle('background-color: black');
		expect(screen.getByRole('button')).not.toBeDisabled();
	});

	test('should render google button when google button type is passed', () => {
		render(<Button buttonType={BUTTON_TYPES_CLASSES.google} />);

		const buttonElement = screen.getByRole('button');
		expect(buttonElement).toHaveStyle('background-color: #4285f4');
	});
	test('should render inverted button when inverted button type is passed', () => {
		render(<Button buttonType={BUTTON_TYPES_CLASSES.inverted} />);

		const buttonElement = screen.getByRole('button');
		expect(buttonElement).toHaveStyle('background-color: white');
	});

	test('should be disabled if button is loading', () => {
		render(<Button isLoading={true} />);

		const buttonElement = screen.getByRole('button');
		expect(buttonElement).toBeDisabled;
	});
});
