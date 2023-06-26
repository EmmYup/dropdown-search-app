import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { test } from 'vitest';
import AppCard from '../../src/components/AppCard';
import { Application } from '../../src/types';

const appMock: Application = {
  id: '1',
  name: 'App Test',
  domains: ['test.com'],
};

test('<AppCard />', () => {
  test('Default displays an AppCard in its normal state.', () => {
    render(<AppCard app={appMock} loading={false} />);

    expect(screen.getByText('App Test')).toBeInTheDocument();
    expect(screen.getByText('test.com')).toBeInTheDocument();
  });

  test('Active displays an AppCard as if it were selected (with light blue background).', () => {
    const { container } = render(
      <AppCard app={appMock} loading={false} isActive />
    );

    expect(container.firstChild).toHaveClass('bg-blue-100');
  });

  test('Loading muestra un AppCard en estado de carga (con el spinner).', () => {
    render(<AppCard loading={true} />);

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  test('Clickable displays an AppCard that triggers an action when clicked on.', () => {
    const handleClick = spy();

    render(<AppCard app={appMock} loading={false} onClick={handleClick} />);

    fireEvent.click(screen.getByText('App Test'));

    expect(handleClick.calls.length).toBe(1);
  });

  test('No results found', () => {
    render(<AppCard loading={false} showNoResultsMessage={true} />);

    expect(screen.getByText('No results found')).toBeInTheDocument();
  });
});
