// import connectToDB from "@/utils/database";
// import User from "@/models/user";

// export default function handler(req, res) {
//   if (req.method === 'POST') {
//     const { name, email, msg } = req.body;
//     res.status(200).json({ message: `Hello, ${name}, ${email}, ${msg}!` });
//   } else {
//     res.status(405).json({ message: 'Only POST requests are allowed' });
//   }
// }

// /pages/api/auth/contact.js
import connectToDB from "@/utils/database";
import User from "@/models/user";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Extract data from request body
    const { name, email, msg } = req.body;

    try {
      // Connect to the database
      await connectToDB();

      // Create a new User document
      const newUser = new User({username:name, email:email, message:msg });

      // Save the user to the database
      await newUser.save();

      // Respond with success
      res.status(201).json({ message: 'Data saved successfully!' });
    } catch (error) {
      console.error('Error saving data:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Only POST requests are allowed' });
  }
}
