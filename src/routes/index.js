import { Route, Switch } from "react-router";
import { Beers } from "../pages/Beers";
import { ConfraternizationList } from "../pages/ConfraternizationList";
import { GraduationList } from "../pages/GraduationList";
import { WeddingList } from "../pages/WeddingList";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Beers} />
      <Route
        exact
        path="/confraternization"
        component={ConfraternizationList}
      />
      <Route exact path="/graduation" component={GraduationList} />
      <Route exact path="/wedding" component={WeddingList} />
    </Switch>
  );
};
