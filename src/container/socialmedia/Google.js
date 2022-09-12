import React from "react";
import { GoogleLoginButton } from "react-social-login-buttons";
import GoogleLogin from "react-google-login";
// import { googleLogin } from "../../store/actions/user/auth";
// import { useDispatch, useSelector } from "react-redux";

const GoogleLogins = () => {
  //   const dispatch = useDispatch();
  const responseGoogle = async (response) => {
    //     const tokenId = response.tokenId;
    //     const user = { tokenId };
    //     dispatch(googleLogin(user));
  };
  //   const locale = useSelector((state) => state.locale);

  return (
    <GoogleLogin
      clientId={process.env.GOOGLE_CLIENT_ID}
      autoLoad={false}
      render={(renderProps) => (
        <GoogleLoginButton
          onClick={() => {
            renderProps.onClick();
          }}
          disabled={renderProps.disabled}
        >
          Google login
        </GoogleLoginButton>
      )}
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GoogleLogins;
