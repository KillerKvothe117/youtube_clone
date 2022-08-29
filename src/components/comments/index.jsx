import React from "react";
import { Container, NewComment, Avatar, Input } from "./comments.style";
import pfp from "../../assets/pfp.jpg";
import Comment from "../singleComment";

const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src={pfp} />
        <Input placeholder="Add a comment..." />
      </NewComment>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  );
};

export default Comments;
