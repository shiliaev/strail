import {render, fireEvent, screen, findByTestId} from '@testing-library/react'
import {Button} from "./Button";
import renderer from 'react-test-renderer'

const buttonText = 'Lorem ipsum dolor sit amet';
const customElementType = 'div';

describe('Button', () => {
    it('should has correct children text', async () => {
        render(<Button>{buttonText}</Button>);
        expect(screen.getByTestId('Button__children')).toHaveTextContent(buttonText);
    })

    it('should has correct element type', async () => {
        const {container}=render(<Button as={customElementType}>{buttonText}</Button>);
        expect(container.tagName).toMatch(customElementType.toUpperCase());
    })

    it('should call onClick when clicked', async () => {
        const onClick = jest.fn();
        render(<Button onClick={onClick}>{buttonText}</Button>);
        fireEvent.click(screen.getByText(buttonText));
        expect(onClick).toBeCalledTimes(1);
    })

    it('should has children', async () => {
        const tree = renderer.create(<Button><div/></Button>);
        expect(tree).toMatchSnapshot();
    })

    it('should has left slot', async () => {
        const tree = renderer.create(<Button left={<div />} />);
        expect(tree).toMatchSnapshot();
    })

    it('should has right slot', async () => {
        const tree = renderer.create(<Button right={<div />} />);
        expect(tree).toMatchSnapshot();
    })
})
