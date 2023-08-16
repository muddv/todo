import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { waitFor } from "@testing-library/react";

import { TestApp } from "./test-utils";
import { customRender } from "./test-utils";

describe("Application renders", () => {
  it("displays controls", () => {
    customRender(<TestApp />);
    expect(screen.getByText("Filter by"));
  });
});

// Basic CRUD test
describe("Able to create, edit and delete items", () => {
  it("'Add new' shows creation dialog", async () => {
    customRender(<TestApp />);
    const addButton = screen.getByText("Add new");
    await userEvent.click(addButton);
    expect(screen.getByText("Create new TODO"));
  });

  it("Creates new todo", async () => {
    customRender(<TestApp />);
    await waitFor(() => {
      expect(screen.getByText("delectus aut autem"));
    });
    const addButton = screen.getByText("Add new");
    await userEvent.click(addButton);
    const input = screen.getByPlaceholderText("My amazing todo");
    const createButton = screen.getByText("Create");
    await userEvent.type(input, "test todo").then(async () => {
      await userEvent.click(createButton);
      expect(screen.getByText("test todo"));
    });
  });

  it("Changes name of item", async () => {
    customRender(<TestApp />);
    await waitFor(() => {
      expect(screen.getByText("delectus aut autem"));
    });
    const editInput = screen.getAllByPlaceholderText("Cool new title")[0];
    const confirmButton = screen.getAllByText("Confirm")[0];
    await userEvent.type(editInput, "new test name").then(async () => {
      await userEvent.click(confirmButton);
      expect(screen.getByText("new test name"));
    });
  });

  it("Deletes item", async () => {
    customRender(<TestApp />);

    await waitFor(async () => {
      expect(screen.getByText("delectus aut autem"));
      const deleteButton = screen.getAllByText("delete task")[0];
      await userEvent.click(deleteButton);
      expect(screen.queryByText("delectus aut autem")).toBeNull();
    });
  });
});
