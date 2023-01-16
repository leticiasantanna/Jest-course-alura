import Button from "../Button";

const Form = () => {
  return (
    <>
      <form>
        <input type="text" placeholder="Adicione os nomes dos participantes" />
        <Button title="Adicionar" maxWidth={150} />
      </form>
    </>
  );
};

export default Form;
