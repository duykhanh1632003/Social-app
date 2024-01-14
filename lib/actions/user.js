import User from "../models/User";
import { connectToDB } from "../mongodb/mongoose";

export const createOrUpdateUser = async (
  id,
  first_name,
  last_name,
  image_url,
  email_address,
  username
) => {
  try {
    await connectToDB();
    const user = await User.findByIdAndUpdate(
      {
        clerkId: id,
      },
      {
        $set: {
          firstName: first_name,
          lastName: last_name,
          profilePhoto: image_url,
          email: email_address[0].email_address,
          username: username,
        },
      },
      { upsert: true, new: true }
    );
    await user.save();
    return user;
  } catch (e) {
    console.log(e);
  }
};

export const deleteUser = async (id) => {
  try {
    await connectToDB();
    await User.findByIdAndDelete({ clerkId: id });
  } catch (e) {
    console.log(e);
  }
};
