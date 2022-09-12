import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

import { FacebookLoginButton } from "react-social-login-buttons";
// import { useDispatch, useSelector } from "react-redux";
// import { facebookLogin } from "../../store/actions/user/auth";

const FacebookLogins = () => {
  //   const dispatch = useDispatch();
  //   const responseFacebook = async (response) => {
  //     const tokenId = await response;
  //     dispatch(await facebookLogin(tokenId));
  //   };

  return (
    <FacebookLogin
      appId={process.env.Facebook_ID}
      fields="name,email,picture"
      //       callback={responseFacebook}
      render={(renderProps) => (
        <FacebookLoginButton onClick={renderProps.onClick}>
          Facebook login
        </FacebookLoginButton>
      )}
    />
  );
};

export default FacebookLogins;
