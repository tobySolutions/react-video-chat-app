import { useEffect } from "react";
import JoinForm from "./JoinForm";
import Conference from "./Conference";
import Footer from "./Footer";
import Header from "./Header";

import {
  useHMSActions,
  selectIsConnectedToRoom,
  useHMSStore,
} from "@100mslive/react-sdk";

function App() {
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  const hmsActions = useHMSActions();

  useEffect(() => {
    window.onunload = () => {
      if (isConnected) {
        hmsActions.leave();
      }
    };
  }, [hmsActions, isConnected]);

  return (
    <div className="App">
      <Header />
      {isConnected ? (
        <>
          <Conference />
          <Footer />
        </>
      ) : (
        <div className="form">
          <JoinForm />
        </div>
      )}
    </div>
  );
}

export default App;
