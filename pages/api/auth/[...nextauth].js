import User from "@/models/User";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "@/database/_dbconnect";
import bcrypt from 'bcrypt'

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email", placeholder: "Email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        await dbConnect()
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }
        const user = await User.findOne({email:credentials?.email}) 
        if (!user || !user?.password) {
            throw new Error("Invalid credentials")
        }
        if (!(user?.verified)) {
            throw new Error("Email not verified")
        }
        const isCorrectPass = await bcrypt.compare(
            credentials.password,user.password
        )

        if(!isCorrectPass){
            throw new Error("Invalid credentials")
        }
        return user;
      },
    }),
  ],
  session:{
    strategy:'jwt'
  },
  secret:process.env.NEXTAUTH_SECRET,
  debug:process.env.NODE_ENV==='development',
};

export default NextAuth(authOptions);
