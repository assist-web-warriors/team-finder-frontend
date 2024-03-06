import BaseLayout from '../base-layout';
import { ImageContainer } from './index.styled';

const AuthLayout = () => {
  return <BaseLayout navigationSlot={<nav />}>{<ImageContainer />}</BaseLayout>; // todo add auth navigation component
};

export default AuthLayout;
