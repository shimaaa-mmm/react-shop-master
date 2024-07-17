import React from 'react';
import { FaHeart, FaComment } from 'react-icons/fa';
import './index.scss';  // Make sure to import your CSS file

const blogPosts = [
  {
    id: 1,
    date: '10 Jan 2018',
    title: 'Cooking Perfect Fried Rice in minutes',
    image: '/public/images/blog-1.webp',
    likes: 15,
    comments: 2,
    description: 'inappropriate behavior ipsum dolor sit amet, consectetur.'
  },
  {
    id: 2,
    date: '10 Jan 2018',
    title: 'Secret of making Heart Shaped eggs',
    image: '/public/images/blog-2.webp',
    likes: 15,
    comments: 2,
    description: 'inappropriate behavior ipsum dolor sit amet, consectetur.'
  },
  {
    id: 3,
    date: '10 Jan 2018',
    title: 'How to check steak if it is tender or not',
    image: '/public/images/blog-3.webp',
    likes: 15,
    comments: 2,
    description: 'inappropriate behavior ipsum dolor sit amet, consectetur.'
  },
  {
    id: 4,
    date: '10 Jan 2018',
    title: 'Seaseme and black seed Flavored Bun Rocks',
    image: '/public/images/blog-4.webp',
    likes: 15,
    comments: 2,
    description: 'inappropriate behavior ipsum dolor sit amet, consectetur.'
  }
];

const BlogSection = () => {
  return (
    <section className="blog-area gap" id="blog">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="menu-content pb-70 col-lg-8">
            <div className="title text-center">
              <h1 className="mb-10">Latest From Our Blog</h1>
              <p className='titre'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
        <div className="row">
          {blogPosts.map(post => (
            <div key={post.id} className="col3 colmd-6 csm-6 single">
              <div className="thumb">
                <img className="img-fluid" src={post.image} alt={post.title} />
              </div>
              <p className="date">{post.date}</p>
              <a href="blog-single.html"><h4 className='title'>{post.title}</h4></a>
              <p className='papa'>{post.description}</p>
              <div className="meta-bottom d-flex justify-content-between">
                <p><FaHeart /> {post.likes} Likes</p>
                <p><FaComment /> {post.comments} Comments</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
