import "@testing-library/react";
import { fireEvent, render, screen } from "../../utils/test-util";
import Form from ".";
import { RecoilRoot } from "recoil";
import { debug } from "console";

describe("Form Tests", () => {
  it("Quando input está vazio, não podem ser incluidos novos participantes", () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Adicione os nomes dos participantes"
    );
    const botao = screen.getByRole("button");

    expect(input).toBeInTheDocument();
    expect(botao).toBeDisabled();
  });

  it("Adicionar um participante com nome preenchido", () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Adicione os nomes dos participantes"
    );
    const botao = screen.getByRole("button");

    fireEvent.change(input, {
      target: {
        value: "Maria Joana",
      },
    });
    fireEvent.click(botao);

    expect(input).toHaveFocus();
    expect(input).toHaveValue("");
  });
  it("Erro ao ter nome duplicado", () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Adicione os nomes dos participantes"
    );
    const botao = screen.getByRole("button");

    fireEvent.change(input, {
      target: {
        value: "Maria Joana",
      },
    });
    fireEvent.click(botao);
    fireEvent.change(input, {
      target: {
        value: "Maria Joana",
      },
    });
    fireEvent.click(botao);
    const errorMessage = screen.getByRole("alert");

    expect(errorMessage.textContent).toBe("Não é permitido nome duplicado!");
    console.debug();
  });
});
