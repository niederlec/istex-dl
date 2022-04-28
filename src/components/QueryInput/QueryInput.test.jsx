import React from 'react';
import { describe, expect, it } from 'vitest';
import { customRender as render, screen } from '../../test/utils';
import QueryInput from './QueryInput';
import { queryModes } from '../../config';

describe('Tests for the QueryInput component', () => {
  it('Renders the query string text', () => {
    render(<QueryInput currentQueryMode={queryModes[0]} />);
    const titleElement = screen.getByText(new RegExp(queryModes[0], 'i'));
    expect(titleElement).toBeInTheDocument();
  });
});
