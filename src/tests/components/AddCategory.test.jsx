import { AddCategory } from "../../components/AddCategory";
import { render, screen, fireEvent } from "@testing-library/react";

describe("AddCategory", () => {
  test("Debe cambiar el valor del input", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: "Saitama" } });
    screen.debug();
    expect(input.value).toBe("Saitama");
  });

  test("Debe de llamar onNewCategory si el input tiene valor", () => {
    const inputValue = "Saitama";
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    expect(input.value).toBe("");
    /* expect(onNewCategory).toHaveBeenCalled(); */
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test("No debe llamar a onNewCategory si no hay input", () => {
    const inputValue = "";
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    expect(input.value).toBe(inputValue);
    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
