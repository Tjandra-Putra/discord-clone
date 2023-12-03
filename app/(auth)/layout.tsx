const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  // This is the layout for the auth pages, like login and signup.
  return <div className="h-full flex items-center justify-center">{children}</div>;
};

export default AuthLayout;
