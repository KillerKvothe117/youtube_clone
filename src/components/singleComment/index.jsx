import React from "react";
import {
  CommentContainer,
  Details,
  Name,
  Date,
  Text,
} from "./singleComment.style";
import { Avatar } from "../comments/comments.style";
import pfp from "../../assets/pfp.jpg";

const Comment = () => {
  return (
    <CommentContainer>
      <Avatar src={pfp} />
      <Details>
        <Name>
          Killer Kvothe <Date>1 day ago</Date>
        </Name>
        <Text>
          Magna aute do elit deserunt laborum aliqua nulla consequat. Mollit
          adipisicing consequat occaecat irure pariatur fugiat occaecat laborum
          elit duis pariatur pariatur elit in. In anim voluptate aliqua eu irure
          ea eu commodo Lorem Lorem do consectetur dolore. Exercitation
          cupidatat labore ex Lorem. Cupidatat consequat ea quis ut commodo
          laboris exercitation.
        </Text>
      </Details>
    </CommentContainer>
  );
};

export default Comment;
