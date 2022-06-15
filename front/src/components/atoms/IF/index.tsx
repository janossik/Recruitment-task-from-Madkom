const IF = ({
  condition,
  children,
}: {
  condition: any;
  children: React.ReactNode;
}) => (condition ? <>{children}</> : null);

export default IF;
