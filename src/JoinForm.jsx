import { useState } from "react";
import { useHMSActions } from "@100mslive/react-sdk";

function JoinForm() {
    const hmsActions = useHMSActions();
    const [inputValues, setInputValues] = useState({
        name: "",
        token: "",
    })


    const handleInputChange = (e) => {
        setInputValues((prevValues) => ({
            ...prevValues,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await hmsActions.join({
            userName: inputValues.name,
            authToken: inputValues.token,
        })
    }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Join Room</h2>
      <div className="input-container">
        <input
          required
          value={inputValues.name}
          onChange={handleInputChange}
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
        />
      </div>
      <div className="input-container">
        <input
          required
          value={inputValues.token}
          onChange={handleInputChange}
          id="token"
          name="token"
          type="text"
          placeholder="Auth token"
        />
      </div>
      <button className="btn-primary">Join</button>
    </form>
  );
}

export default JoinForm;
