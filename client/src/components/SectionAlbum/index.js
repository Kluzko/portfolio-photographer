import React from "react";
import { Albums } from "./Albums";
import { Wrapper } from "./style";
import { Text } from "./Text";

const SectionAlbums = React.memo(() => (
  <Wrapper>
    <Text />
    <Albums />
  </Wrapper>
));

export default SectionAlbums;
