import StyledLink from '../components/atoms/changgun/NavLink';

function TestPage() {
  return (
    <>
      <StyledLink to="/" $isActive>
        hi
      </StyledLink>
      <StyledLink to="/my" $isActive>
        hi
      </StyledLink>
    </>
  );
}

export default TestPage;
