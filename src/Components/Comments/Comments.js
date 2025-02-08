import React from "react";
import { Button } from "react-bootstrap";
import commentsText from "./Text";
import CommentsItem from "./CommentsItem/CommentsItem";
const Comments = () => (
  <>
    <div className="text-center">
      <h3 className="text-center fs-2 fw-bold pt-5">نظر مشتریان</h3>
      <div className="comments-div">
        {commentsText.map((item, index) => (
          <CommentsItem key={index} {...item} />
        ))}
      </div>
      <Button variant="outline-info">ادامه مطالب</Button>
    </div>
    <hr />
    <hr />
  </>
);

export default Comments;
