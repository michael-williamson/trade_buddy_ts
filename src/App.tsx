import React, { useState } from "react";
import { Route } from "react-router";
import "./App.css";
import { AttachAuthHeader } from "./services/http";
import { ProtectedRoute } from "./auth/protected-route";
import Main from "./components/Main";
import Dashboard from "./components/dashboardComponents/Dashboard";
import { EnterTrades } from "./components/formComponents/EnterTrades";
import { TradeTable } from "./components/tableComponents/TradeTable";
import { Footer } from "./components/Footer";
import { TradeTableModal } from "./components/tableComponents/TradeTableModal";
import { Analysis } from "./components/analysisComponents/Analysis";
import { AnalysisModal } from "./components/analysisComponents/AnalysisModal";

function App() {
  const [isToken, setIsToken] = useState(false);
  //this sets a default auth header to axios;
  AttachAuthHeader(setIsToken);

  return (
    <div className="App">
      <Route exact path="/" component={Main} />
      <ProtectedRoute
        exact
        path="/dashboard"
        component={isToken ? Dashboard : Main}
      />
      <ProtectedRoute
        exact
        path="/enter-trades/:id?"
        component={isToken ? EnterTrades : Main}
      />
      <ProtectedRoute
        exact
        path="/trade-table"
        component={isToken ? TradeTable : Main}
      />
      <ProtectedRoute
        exact
        path="/trade-table-modal/:id"
        component={isToken ? TradeTableModal : Main}
      />
      <ProtectedRoute
        exact
        path="/analysis"
        component={isToken ? Analysis : Main}
      />
      <ProtectedRoute
        exact
        path="/analysis-modal"
        component={isToken ? AnalysisModal : Main}
      />
      <Footer />
    </div>
  );
}

export default App;
