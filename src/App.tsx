import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useMemo,
  useState
} from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Data from "./test.json";
import { Navbar } from "./components/Navbar/Navbar";
import { ItemList } from "./components/ItemList/ItemList";
import { ProductInfo } from "./components/ProductInfo/ProductInfo";
import { SalesInfo } from "./components/SalesInfo/SalesInfo";
import { AppData, Item } from "./types";

interface GlobalContext {
  data: AppData;
  activeItem: Item | null;
  setActiveItem: Dispatch<SetStateAction<Item | null>>;
}

export const AppContext = createContext<GlobalContext>({} as GlobalContext);

function App() {
  const [data] = useState<AppData>(Data);
  const [activeItem, setActiveItem] = useState<Item | null>(null);

  const context: GlobalContext = useMemo(() => {
    return {
      data,
      activeItem,
      setActiveItem
    };
  }, [data, activeItem]);

  console.log(data);
  return (
    <AppContext.Provider value={context}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <div className="main">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => (
                    <>
                      <img
                          alt={data.CompanyName}
                          src={`http://images.repzio.com/productimages/${data.ManufacturerID}/logo${data.ManufacturerID}_lg.jpg?width=100`}
                          className="company__img"
                      />
                      <SalesInfo salesRep={data.SalesRep} message={data.Message}/>
                      <div className="company">
                        <h2 className="company-name">
                          {data.CompanyName} (
                          {data.items ? data.items.length : 0})
                        </h2>
                      </div>
                      {data.items && <ItemList items={data.items} {...props} />}
                    </>
                  )}
                />
                <Route path="/products/:productId" component={ProductInfo} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
