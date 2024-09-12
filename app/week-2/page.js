/*Part 2 - Step 3*/
import React from 'react';
import StudentInfo from './student-info';
import Link from 'next/link';


/*Part 2 - Step 1*/
export default function Page() {
    return (
        /*Part 2 - Step 3*/
      <main>
        <div>
            <h1>Shopping List</h1>
            <h1>Student Information</h1>    
            <StudentInfo />
            <Link href="http://localhost:3000/">
              Back
            </Link>
        </div>
      </main>
    );
  }