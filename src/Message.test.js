import { render, screen } from '@testing-library/react'
import Message from "./components/message/Message";
import '@testing-library/jest-dom'

test("Example 1 renders successfully", () => {
    render(<Message/>);

    const element = screen.getByText(/Leave a Comment/i);

    expect(element).toBeInTheDocument(); //assertion
})