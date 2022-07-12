import { FC } from 'react';
import { Navigate } from 'react-router-dom';
interface IPrivateWrapper {
  children: React.ReactNode;
}

const PrivateWrapper: FC<IPrivateWrapper> = ({ children }) => {
  const signed = true;
  if (signed) {
    return <>{children}</>;
  }
  return <Navigate to="/" />;
};

export default PrivateWrapper;
