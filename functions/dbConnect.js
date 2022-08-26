import { initializeApp, credential, getApps } from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';
import { credentials } from 'credentials.js';
import { cert } from 'firebase-admin/app';

export default function dbConnect() {
  if (!getApps().length) {
    initializeApp({
      credential: cert(credentials),
    });
  }
  return getFirestore();
}
