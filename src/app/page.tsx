"use client";
import Link from 'next/link'
import { Header, Footer } from "./components";
import Counter from "./Counter"
import Todos from './Todos';
export default function Home() {
  return (
    <main>
      <Todos/>
      <Counter/>
      <h1 className='bg-indigo-300 text-white text-center'>Hello World</h1>
      
      <Link href="/blog" className='bg-red-400 text-white p-2 mt-7 rounded-md block w-40 text-center' >Go to Blog
      </Link>
    </main>
    

  )
}
