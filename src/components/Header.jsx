import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { lOGO, USER_AVATAR } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleClick = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/browse");
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // ...
      } else {
        dispatch(removeUser());
        navigate("/");
        // User is sig
        // ned out
        // ...
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className=" flex  justify-between absolute pt-2  pl-30   z-20 w-screen bg-gradient-to-b from-black">
      <img className="w-46" src={lOGO} alt="logo" />
      {user && (
        <div className="flex items-center gap-5 pr-10">
          <img
            className="w-10 h-10 rounded-sm object-cover"
            src={USER_AVATAR}
            alt=""
          />
          {/* <img
            className="w-10 h-10 rounded-full object-cover"
            src={user.photoURL}
            alt=""
          /> */}
          <button
            className="bg-red-600 rounded-lg p-2 text-white text-lg"
            onClick={handleClick}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
