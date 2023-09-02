"use client";

import React from "react";
import Link from "next/link";
import DeleteUser from "@/components/delete/Delete";
export default function DeleteAcc() {
  return (
    <div>
      <Link href="/profile">
        <button>Back</button>
      </Link>
      <h2>Are you sure?</h2>
      <button onClick={DeleteUser}>Yes, delete my account</button>
    </div>
  );
}
