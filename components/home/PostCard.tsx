"use client"
import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion"
const PostCard = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl bg-gradient-to-br from-black to-stone-500">
  <div className="card-body">
    <h2 className="card-title">Start your post</h2>
    <p>Your material goes here ! Ready to 🚀</p>
    <div className="card-actions justify-end">
      
      <motion.button
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      style={{ backgroundColor: 'grey', color: 'white',border: 'none',borderRadius: '20px', padding: '10px 20px', cursor: 'pointer' }}
    ><Link href="/create">
      Create
      </Link>
    </motion.button>
    </div>
  </div>
</div>
  )
}

export default PostCard