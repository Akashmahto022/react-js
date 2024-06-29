import React, {useState, useEffect} from 'react'
import appwriteService from '../appwrite/config'
import {Container, PostCard} from '../components/index'

const AllPost = () => {
    const [post, setPost] = useState([])

    useEffect(()=>{
        appwriteService.getAllPost([])
        .then((posts)=>{
            if (posts) {
                setPost(posts.documents)
            }
        })
    },[])

  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
            {post.map((posts)=>(
                <div key={posts.$id}>
                <PostCard  post={posts}/>
                </div>
            ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPost