import { BeersProvider } from "./beers";
import { ConfraternizationListProvider } from "./confraternization";
import { GraduationListProvider } from "./graduation";
import { WeddingListProvider } from "./wedding";

export const Providers = ({ children }) => {
  return (
    <BeersProvider>
      <ConfraternizationListProvider>
        <GraduationListProvider>
          <WeddingListProvider>{children}</WeddingListProvider>
        </GraduationListProvider>
      </ConfraternizationListProvider>
    </BeersProvider>
  );
};
