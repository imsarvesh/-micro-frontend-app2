import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: string;
  "data-testid"?: string;
}

const Button = ({
  children,
  className,
  "data-testid": dataTestId,
  ...props
}: Props) => (
  <button
    type="button"
    data-testid={dataTestId}
    {...props}
  >
    ✔{children}
  </button>
);

export { Button };
