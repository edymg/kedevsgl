/* not implemented yet */
declare module "react-google-recaptcha" {
  import * as React from "react";

  interface ReCAPTCHAProps {
    sitekey: string;
    onChange?: (token: string | null) => void;
    onExpired?: () => void;
    onErrored?: () => void;
    theme?: "light" | "dark";
    size?: "compact" | "normal" | "invisible";
  }

  class ReCAPTCHA extends React.Component<ReCAPTCHAProps> { }

  export default ReCAPTCHA;
}
