// src/utils/uploadQuizData.js
// import { doc, setDoc } from "firebase/firestore";
// import { db } from "../firebase";
// import quizData from "../../public/data/quiz.json"

// const uploadQuizData = async () => {
//   try {
//     for (let topic of quizData.quizData) {
//       await setDoc(doc(db, "quizzes", topic.id), topic);
//       console.log("Uploaded:", topic.id);
//     }
//     alert("All quiz data uploaded 🔥");
//   } catch (err) {
//     console.error(err);
//   }
// };

// export default uploadQuizData;
