import styled from "styled-components";

import { Comp } from "lib";

const Hello = styled.div`
  color: blue;
`;

function HomePage() {
  return (
    <Hello>
      Welcome to Next.js!
      <Comp />
    </Hello>
  );
}

export default HomePage;
