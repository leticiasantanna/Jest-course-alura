import { useSetRecoilState } from "recoil";
import { participantsListState } from "../atom";

export const AddParticipants = () => {
  const setList = useSetRecoilState(participantsListState);
  return (participantName: string) => {
    return setList((actualList) => [...actualList, participantName]);
  };
};
