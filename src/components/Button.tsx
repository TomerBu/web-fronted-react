
type ButtonProps = {
    text: string
    color: string
}

const Button = (props: ButtonProps) => {
  return (
    <div >
      {props.color}
      {props.text}
    </div>
  );
};

export default Button;
