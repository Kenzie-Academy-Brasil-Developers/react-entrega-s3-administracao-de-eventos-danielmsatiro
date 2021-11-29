import { TemplateList } from "../../components/TemplateList";
import { useWedding } from "../../providers/wedding";

export const WeddingList = () => {
  const { wedding, removeFromWedding } = useWedding();

  return (
    <TemplateList eventList={wedding} removeFromEvent={removeFromWedding} />
  );
};
