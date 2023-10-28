import SignUpForm from "../../component/sign-up-form/sign-up-form.component";
import SignInForm from "../../component/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss";
const Authentication = function () {
  return (
    <div className="authentication-container">
      <SignInForm />
      <br></br>
      <SignUpForm />
    </div>
  );
};

export default Authentication;
