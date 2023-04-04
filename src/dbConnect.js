import { initializeApp, cert} from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

import { credentials } from '../credentials.js';

initializeApp({
  credential: cert(credentials)
});

export const db = getFirestore();

