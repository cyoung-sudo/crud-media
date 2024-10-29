import { describe, expect, it, afterEach, beforeEach, vi } from 'vitest';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// Imports
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { routesConfig } from '../../routes/routesConfig.tsx';
import AuthAPI from '../../apis/AuthAPI.ts';

describe('Login', () => {
  beforeEach(() => {
    window.scrollTo = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('calls the login-api request w/ the correct arguments', async () => {
    vi.mock('../../apis/AuthAPI.ts', () => ({
      default: {
        getAuthUser: vi.fn().mockResolvedValue({data: {success: true}}),
        login: vi.fn().mockResolvedValue({data: {success: true}})
      }
    }));

    vi.mock('../../apis/OtherAPI.ts', () => ({
      default: {
        ping: vi.fn().mockResolvedValue({data: {success: true}})
      }
    }))

    const router = createMemoryRouter(routesConfig, {
      initialEntries: ["/auth/login"],
    });

    render(<RouterProvider router={router} />);

    await waitForElementToBeRemoved(() => screen.getByText("Loading..."));

    const usernameInput = screen.getByLabelText("Username");
    const passwordInput = screen.getByLabelText("Password");
    const submitButton = screen.getByText("Submit");

    await userEvent.type(usernameInput, "Bob");
    await userEvent.type(passwordInput, "pass123");
    await userEvent.click(submitButton);

    expect(AuthAPI.login).toHaveBeenCalledWith("Bob", "pass123");
  });
});