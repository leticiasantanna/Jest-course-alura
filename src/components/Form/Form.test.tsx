import { render, screen } from "@testing-library/react";
import React from "react";
import Form from ".";

test("Quando input está vazio, não podem ser incluidos novos participantes", () => {
  render(<Form />);

  const input = screen.getByPlaceholderText(
    "Adicione os nomes dos participantes"
  );
  const button = screen.getByRole("button");

  expect(input).toBeInTheDocument();
  expect(button).toBeDisabled();
});
