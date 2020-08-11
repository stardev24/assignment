import React from 'react';
import { render,queryByAttribute,fireEvent } from '@testing-library/react';
import SearchBar from '../components/Search';
import userEvent from "@testing-library/user-event";

test('renders Search Component', () => {

  const searchCmp = render(<SearchBar />);

  expect(searchCmp.getByRole("combobox")).toBeTruthy()

});
