import User from "../model/user-schema.js";

export const userSignup = async (request, response) => {
    try{
 
       const exist = await User.findOne({ nmae: request.body.name});
       if(exist){
        return response.status(401).json({ message: 'name already exist'});
       } 

       const user = request.body;
       const newUser = new User(user);
       await newUser.save();

       response.status(200).json({ message: user });
    } catch (error){
       response.status(500).json({ message : error.message });
    }
}