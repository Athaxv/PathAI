"use client";

import React from "react";
import MDEditor from "@uiw/react-md-editor";

const CoverLetterPreview = ({ coverLetter }) => {
  // console.log("coverLetter:", coverLetter);

  return (
    <div className="py-4">
      <MDEditor value={coverLetter?.content ?? ""} preview="preview" height={500} width={500} />
    </div>
  );
};

export default CoverLetterPreview;