import { AuthNavContainer, TeamFinderLogo } from './index.styled';
import logo from 'src/common/assets/team-finder-logo.svg';

const AuthNavigation = () => {
  return (
    <AuthNavContainer>
      <TeamFinderLogo src={logo} />
    </AuthNavContainer>
  );
};

export default AuthNavigation;
