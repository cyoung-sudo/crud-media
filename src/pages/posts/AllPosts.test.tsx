import { describe, expect, it, afterEach, beforeEach, vi } from 'vitest';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// Imports
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { routesConfig } from '../../routes/routesConfig.tsx';

describe('AllPosts', () => {
  beforeEach(() => {
    window.scrollTo = vi.fn();

    vi.mock('../../apis/AuthAPI.ts', () => ({
      default: {
        getAuthUser: vi.fn().mockResolvedValue({data: {success: true}})
      }
    }));

    vi.mock('../../apis/OtherAPI.ts', () => ({
      default: {
        ping: vi.fn().mockResolvedValue({data: {success: true}})
      }
    }))

    vi.mock('../../apis/PostAPI.ts', () => ({
      default: {
        getAll: vi.fn().mockResolvedValue({
          data: {
            success: true,
            posts: new Array(11).fill({
              _id: "id",
              userId: "userId",
              username: "username",
              title: "title",
              text: "text",
              createdAt: new Date()
            }).flat()
          }
        })
      }
    }));
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('correctly requests & displays all posts', async () => {
    const router = createMemoryRouter(routesConfig);
    router.navigate("/posts")

    const { container } = render(<RouterProvider router={router} />);

    await waitForElementToBeRemoved(() => screen.getByText("Loading..."));

    // Assertions
    expect(screen.getByRole("heading", { level: 1, name: /Posts/i }));
    expect(container.getElementsByClassName("postsList-post").length).toBe(10);
    const firstPost = container.getElementsByClassName("postsList-post")[0];
    expect(firstPost.childNodes[0]).toHaveTextContent("title");
  });

  it('correctly displays posts on page change', async () => {
    const router = createMemoryRouter(routesConfig);
    router.navigate("/posts")

    const { container } = render(<RouterProvider router={router} />);

    await waitForElementToBeRemoved(() => screen.getByText("Loading..."));

    expect(container.getElementsByClassName("postsList-post").length).toBe(10);

    const prevPageBtn = screen.getByTestId("allPosts-prevPage");
    const nextPageBtn = screen.getByTestId("allPosts-nextPage");

    // Click next-page button
    await userEvent.click(nextPageBtn);

    // Assert page content
    expect(container.getElementsByClassName("postsList-post").length).toBe(1);

    // Click prv-page button
    await userEvent.click(prevPageBtn);

    // Assert page content
    expect(container.getElementsByClassName("postsList-post").length).toBe(10);
  });
});