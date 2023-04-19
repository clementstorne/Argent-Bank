/** Style */
import "../main.scss";

/** Store */
import { useSelector, useDispatch } from "react-redux";
import { userToUpdateToggle } from "../store/userSlice";

/** Components */
import UpdateForm from "../components/UpdateForm";

export default function Header() {
  const dispatch = useDispatch();

  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
  const toUpdate = useSelector((state) => state.user.toUpdate);

  function handleUserUpdate(e) {
    e.preventDefault();
    dispatch(userToUpdateToggle());
  }

  return (
    <>
      {toUpdate === false ? (
        <div className="header">
          <h1>
            Welcome back
            <br />
            {firstName} {lastName}!
          </h1>
          <button className="edit-button" onClick={handleUserUpdate}>
            Edit Name
          </button>
        </div>
      ) : (
        <div className="header">
          <h1>Welcome back</h1>
          <UpdateForm />
        </div>
      )}
    </>
  );
}
