import SignUpForm from "../../component/sign-up-form/sign-up-form.component";
import {
  signInWithGooglePopup,
  creatUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = function () {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await creatUserDocumentFromAuth(user);
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span> Sign-In To Start Exploring </span>;
      <button onClick={logGoogleUser}>sign in with google</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
