import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { test, vi } from 'vitest';
import { AppContext } from '../../src/context/AppContext';
import DropdownInput from '../../src/components/DropdownInput';

test('<DropdownInput />', () => {
  test('DropdownInput changes value on input change', async () => {
    const setSearchTerm = vi.fn();
    const setLoading = vi.fn();
    render(
      <AppContext.Provider
        value={{
          searchTerm: '',
          setSearchTerm,
          options: [],
          activeOptionIndex: -1,
          setActiveOptionIndex: vi.fn(),
          isOpen: false,
          setIsOpen: vi.fn(),
          loading: false,
          setLoading,
        }}
      >
        <DropdownInput />
      </AppContext.Provider>
    );
    const input = screen.getByPlaceholderText('Enter login URL or app name');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(setSearchTerm).toHaveBeenCalledWith('test');
    expect(setLoading).toHaveBeenCalledWith(true);
  });
});
