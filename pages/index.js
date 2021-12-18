import Head from 'next/head';
import { PostCard, Categories, PostWidget, SideAd } from '../components';
import { FeaturedPosts } from '../sections';
import { getPosts } from '../services';

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Blog App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <FeaturedPosts posts={posts} />
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map(post => <PostCard post={post.node} key={post.title} />)} 
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='relative top-0 mb-5'>
            <PostWidget />
            <Categories />
          </div>
          <div className='lg:sticky relative top-6'>
            <SideAd />
          </div>
        </div>
      </div> 
    </div>
  )
}

export async function getStaticProps(){
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }
}