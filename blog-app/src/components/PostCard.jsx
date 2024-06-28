import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

const PostCard = ({
    $id,
    title,
    featuredImage
}) => {
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-200 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.previewFile(featuredImage)} alt={title} className='rounded-xl'/>
            </div>
            <h2 className='text-2xl font-bold text-gray-800'>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard