import { TemplateList } from "../../components/TemplateList";
import { useGraduation } from "../../providers/graduation";

export const GraduationList = () => {
  const { graduation, removeFromGraduation } = useGraduation();

  return (
    <TemplateList
      eventList={graduation}
      removeFromEvent={removeFromGraduation}
    />
  );
};
