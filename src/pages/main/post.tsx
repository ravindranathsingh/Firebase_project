import React, { useEffect, useState } from 'react'
import { Post as IPost} from "./Main"
import { addDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { auth, db } from '../../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

interface Props {
    post: IPost;
}

interface Like {
    userId: string;
}

export const Post = (props: Props) => {
    const { post } = props;
    const [ user ] = useAuthState(auth);

    const [like, setLike] = useState<Like[] | null>(null);

    const likesRef = collection(db, "likes");

    const likesDoc = query(likesRef, where("postId", "==", post.id));
    const getLikes = async () => {
        const data = await getDocs(likesDoc);
        setLike(data.docs.map((doc) => ({ userID: doc.data().userId })));
    };

  const addLike = async (data: any) => {
    await addDoc(likesRef, {userId: user?.uid, postId: post.id});
  };

  useEffect(() => {
    getLikes();
  }, [])
  return (
    <div>
        <div className='title'>
            <h1> {post.title } </h1>
        </div>
        <div className='body'>
            <p>{post.description}</p>
        </div>
        <div className='footer'>
            <p>@{post.username}</p>
            <button onClick={addLike}> &#128077; </button>
            {like && <p> Likes: {like} </p> }
        </div>
    </div>
  )
};

export default Post;