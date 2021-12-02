
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyATGhyCWWtUY5q10iNzLmTdSmGxsotRdQU",
    authDomain: "business-card-maker-73cc2.firebaseapp.com",
    projectId: "business-card-maker-73cc2",
    databaseURL: "https://business-card-maker-73cc2-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);