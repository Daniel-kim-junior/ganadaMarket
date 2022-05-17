import styled from '@emotion/styled';
import Avatar from 'components/atoms/My/Avartar/Avatar';
import ImageInput from 'components/atoms/My/ImageInput';
import LinkButton from 'components/atoms/My/LinkButton';
import Text from 'components/atoms/My/Text';
import { User } from 'types/Entity/UserAPI';

interface ProfileHeaderProps {
  user: User;
  onClickImage: React.MouseEventHandler<HTMLElement>;
  onChangeImage: React.ChangeEventHandler<HTMLInputElement>;
  newImage: string;
  forwardedRef: React.RefObject<HTMLInputElement>;
}
function ProfileHeader({
  user,
  onClickImage,
  onChangeImage,
  newImage,
  forwardedRef,
}: ProfileHeaderProps) {
  return (
    <StyledBox>
      <ProfileAvatar src={user.profileImageUrl} />
      <ProfileDetail>
        <Text size={24} strong>
          {user.userNickname}
        </Text>
        <ProfileButtonBox>
          <LinkButton onClick={onClickImage} href="/">
            이미지 변경
          </LinkButton>
          <LinkButton href="/">삭제</LinkButton>
        </ProfileButtonBox>
        <ImageInput
          onChange={onChangeImage}
          value={newImage}
          forwardedRef={forwardedRef}
        />
      </ProfileDetail>
    </StyledBox>
  );
}

const StyledBox = styled.div`
  display: flex;
  align-items: center;
  padding: 50px 0 38px;
  border-bottom: 1px solid #ebebeb;
  background-color: #fff;
`;

const ProfileAvatar = styled(Avatar)`
  margin-right: 18px;
  flex: none;
  overflow: hidden;
`;

const ProfileButtonBox = styled.div`
  margin-top: 8px;
  font-size: 0;
  a {
    margin-top: 8px;
  }
  a + a {
    margin-left: 8px;
  }
`;

const ProfileDetail = styled.div``;
export default ProfileHeader;
