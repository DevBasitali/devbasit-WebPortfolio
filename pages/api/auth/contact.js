import connectToDB from "@/utils/database";
import User from "@/models/user";

export default async function handler(req, res) {
  if (req.method === 'POST') {

    const { name, email, msg } = req.body;
    try {

      await connectToDB();

        const existingUser = await User.findOne({email});
        if (existingUser) {
          return res.status(400).json({ message: 'Email already exists' });
        }

      const newUser = new User({username:name, email:email, message:msg });
      await newUser.save();

      res.status(201).json({ message: 'Message sucessfully sent!!!' });
    } catch (error) {
      console.error('Error saving data:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Only POST requests are allowed' });
  }
}
