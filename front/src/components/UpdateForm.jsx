/** Style */
import "../main.scss";

/** React */
import { useState } from "react";

/** Store */
import { useSelector, useDispatch } from "react-redux";
import { userUpdate, userToUpdate } from "../store/userSlice";

/** Services */
import UserService from "../services/UserService";

export default function UpdateForm() {
  const dispatch = useDispatch();
  const firstNameStored = useSelector((state) => state.user.firstName);
  const lastNameStored = useSelector((state) => state.user.lastName);

  const [firstName, setFirstName] = useState(firstNameStored);
  const [lastName, setLastName] = useState(lastNameStored);

  function updateProfile(e) {
    e.preventDefault();

    const credentials = {
      firstName,
      lastName,
    };

    UserService.updateUserData(credentials)
      .then((res) => {
        dispatch(userUpdate(res.data));
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function cancel(e) {
    e.preventDefault();

    dispatch(userToUpdate());
  }

  return (
    <form id="update-form" action="" onSubmit={updateProfile}>
      <div className="update-input-container">
        <input
          className="update-input"
          type="text"
          id="firstName"
          placeholder={firstNameStored}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          className="update-input"
          type="text"
          id="lastName"
          placeholder={lastNameStored}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="update-button-container">
        <button className="update-button" type="submit">
          Save
        </button>
        <button className="update-button" onClick={cancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}
