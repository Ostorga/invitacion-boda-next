import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

export function getAdminFirestore() {
  const projectId = process.env.FIREBASE_PROJECT_ID || "invitacion-oscar-damaris";
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY;

  if (!clientEmail || !privateKey) {
    throw new Error(
      "Firebase Admin configuration is incomplete. Set FIREBASE_CLIENT_EMAIL and FIREBASE_PRIVATE_KEY.",
    );
  }

  if (!clientEmail.endsWith(".gserviceaccount.com")) {
    throw new Error(
      "FIREBASE_CLIENT_EMAIL must be the service account email ending in .gserviceaccount.com.",
    );
  }

  const normalizedPrivateKey = privateKey.replace(/\\n/g, "\n");
  if (
    !normalizedPrivateKey.includes("-----BEGIN PRIVATE KEY-----") ||
    !normalizedPrivateKey.includes("-----END PRIVATE KEY-----")
  ) {
    throw new Error(
      "FIREBASE_PRIVATE_KEY must contain the complete PEM private key from the Firebase service account JSON.",
    );
  }

  const app =
    getApps()[0] ??
    initializeApp({
      credential: cert({
        projectId,
        clientEmail,
        privateKey: normalizedPrivateKey,
      }),
    });

  return getFirestore(app, "(default)");
}