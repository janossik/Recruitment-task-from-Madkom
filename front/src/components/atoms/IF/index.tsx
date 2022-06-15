import { IFProps } from "./IF.types";

const IF = ({ condition, children }: IFProps) =>
  condition ? <>{children}</> : null;

export default IF;
