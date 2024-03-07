import { AuthNavigation } from 'src/common/components';
import BaseLayout from '../base-layout';
import { ImageContainer } from './index.styled';
import lockImage from 'src/common/assets/team-finder-sign-up-image.svg';

const AuthLayout = () => {
  return (
    <BaseLayout navigationSlot={<AuthNavigation />}>
      <ImageContainer src={lockImage} />
    </BaseLayout>
  );
};

export default AuthLayout;
