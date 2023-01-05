import { ReactNode } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  color: red;
`;

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
  <StyledButton
    type="button"
    className="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-900 text-white hover:bg-slate-700 -my-2.5 ml-8"
    data-testid={dataTestId}
    {...props}
  >
    ✔{children}
  </StyledButton>
);

export { Button };
