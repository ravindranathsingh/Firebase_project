import React, { useEffect } from 'react'
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useState } from "react";
import { Post } from "./post";

export interface Post {
  id: string;
  userId: string;
  title: string;
  username: string;
  description: string;
}

export const Main = () => {
  const [repostList, setRepostList] = useState<Post[] | null>(null);
  const repostRef = collection(db, "repost");
  const getPosts = async () => {
    const data = await getDocs(repostRef)
    setRepostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})) as Post[]
    );
  };
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div>{repostList?.map((post) => <Post post={post}/>)}</div>
  );
}