import React from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
const currentUser = auth.currentUser;

export default currentUser;