/*Part 2 - Step 2*/

import React from 'react';
import Link from 'next/link';

const StudentInfo = () => {
  return (
    <div>
      <h1>Carson Yang</h1> 
      <p>
        Check out my GitHub repository:{" "}
        <Link href="https://github.com/caryang2004">
          GitHub Link
        </Link>
      </p>
    </div>
  );
};

export default StudentInfo;