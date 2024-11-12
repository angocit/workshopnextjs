'use client'
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([])
  useEffect(()=>{
    (async()=>{  //IIFE
        try {
            const {data} = await axios.get('https://workshop.webopsagency.com/wp-json/wp/v2/posts?_fields=id,title')
            setPosts(data)
        } catch (error) {
          
        }
    })()
  },[])
  return (
      <>
        {
          posts.map(post=>(
            <div key={post.id} className="item">
                <h3>{post.title?.rendered}</h3>
            </div>
          ))
        }
      </>
  );
}
