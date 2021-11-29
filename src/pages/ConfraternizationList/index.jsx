import { TemplateList } from "../../components/TemplateList";
import { useConfraternization } from "../../providers/confraternization";

export const ConfraternizationList = () => {
  const { confraternization, removeFromConfraternization } =
    useConfraternization();

  return (
    <TemplateList
      eventList={confraternization}
      removeFromEvent={removeFromConfraternization}
    />
  );
};
