import React, { Component, useEffect, useState } from "react";
import { getUsers } from "./userServices";
import { loginUser } from "./userServices";

export function getAllUsers() {
  var users = [];

  getUsers().then((res) => {
    users = res;
  });

  return (
    <div>
      {users.map((data) => (
        <div key={data.username}>{data.username}</div>
      ))}
    </div>
  );
}
