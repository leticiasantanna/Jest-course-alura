import "@testing-library/react";
import { render, screen } from "../../utils/test-util";
import React from "react";
import Form from ".";

it("Quando input está vazio, não podem ser incluidos novos participantes", () => {
  render(<Form />);

  const input = screen.getByPlaceholderText(
    "Adicione os nomes dos participantes"
  );

  expect(input).toBeInTheDocument();
});
