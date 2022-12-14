import {
    selectIsConnectedToRoom,
    useHMSActions,
    useHMSStore,
} from "@100mslive/react-sdk";


function Header() {
    const isConnected = useHMSStore(selectIsConnectedToRoom)
    const hmsActions = useHMSActions();


  return (
    <header>
      <span
       className="logo"
      >
        TobySolutions
      </span>
      {
        isConnected && (
            <button
             id="leave-btn"
             className="btn-danger"
             onClick={() => hmsActions.leave()}
            >
             Leave Room
            </button>
        )
      }
    </header>
  )
}

export default Header
