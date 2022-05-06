import styled from '@emotion/styled';
import React from 'react';
import LinkButton from '../../atoms/my/LinkButton';
import Text from '../../atoms/my/Text';
import TitleBar from '../../molecules/my/TitleBar';

function MyAddressContainer() {
  return (
    <Container>
      <TitleContent>
        <TitleBar title="주소록" size={29} />
        <ButtonBox>
          <AddButton href="">
            <span>+ 새 배송지 추가</span>
          </AddButton>
        </ButtonBox>
      </TitleContent>
    </Container>
  );
}
const Container = styled.div`
  min-height: 315px;
`;

const TitleContent = styled.div`
  display: flex;
  padding: 5px 0 6px;
`;
const ButtonBox = styled.div`
  margin-left: auto;
  padding-left: 30px;
  flex-shrink: 0;
`;
const AddButton = styled(LinkButton)`
  margin-right: 0;
  padding: 0 14px;
  line-height: 32px;
  border-radius: 10px;
  border: 1px solid #222;
  font-size: 12px;
  letter-spacing: -0.06px;
  text-decoration: none;
  color: rgba(34, 34, 34, 0.5);
  margin-top: 0;
`;
// const MyList = styled.div`
// `;

export default MyAddressContainer;
