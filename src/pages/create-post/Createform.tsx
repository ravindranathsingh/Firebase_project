import React from 'react'
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection} from "firebase/firestore";
import { db, auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

interface CreateformData {
  title: string;
  description: string;
}

export const Createform = () => {
  const [ user ] = useAuthState(auth);
  const navigate = useNavigate();
  const schema = yup.object().shape({
    title: yup.string().required("You must add title."),
    description: yup.string().required("You must write something.")

  });
  const {register, handleSubmit, formState: { errors }} = useForm<CreateformData>({
    resolver: yupResolver(schema),
  });

  const repostRef = collection(db, "repost");

  const onCreatePost = async (data: any) => {
    await addDoc(repostRef, {
      ...data,
      username: user?.displayName,
      userId: user?.uid
    });
    navigate("/");
  };
  return (
    <form onSubmit={handleSubmit(onCreatePost)}>
      <input placeholder="Title" {...register("title")}/>
      <p style={{color:"red"}}>{errors.title?.message}</p>
      <input placeholder="Description" {...register("description")}/>
      <p style={{color:"red"}}>{errors.description?.message}</p>
      <input type="submit" />
    </form>
  );
}

export default Createform