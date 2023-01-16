import { useRef, useState } from "react";
import { AddParticipants } from "../../state/hooks/addParticipants";
import Button from "../Button";

import * as Styles from "./styles";

const Form = () => {
  const [name, setName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const addInList = AddParticipants();

  const addParticipant = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addInList(name);
    setName("");
    inputRef.current?.focus();
  };

  return (
    <>
      <Styles.Container onSubmit={addParticipant}>
        <input
          ref={inputRef}
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Adicione os nomes dos participantes"
        />
        <Button title="Adicionar" maxWidth={150} disabled={!name} />
      </Styles.Container>
    </>
  );
};

export default Form;
