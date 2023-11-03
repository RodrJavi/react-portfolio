const Button = ({ children, outline, className = "", link, self }) => {
  return (
    <a
      className={`${outline ? "button-outline" : "button"} ${className}`}
      href={link}
      target={`${self ? "_self" : "_blank"}`}>
      {children}
    </a>
  );
};

export default Button;
