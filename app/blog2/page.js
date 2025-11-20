"use client";
import React, { useState, useEffect } from 'react';
import RestanHeader from '../components/RestanHeader/page.js';
import RestanFooter from '../components/RestanFooter/page.js';

const UserIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
);

const accentColor = "#A0845F";

    const HeroSection = () => (
        <div className="relative w-full h-[500px] sm:h-[550px] md:h-[600px] bg-black text-white overflow-hidden">
            <RestanHeader accentColor={accentColor} />

            <img
                src="https://restan-nextjs.vercel.app/assets/img/shape/5.jpg"
                alt="Assortment of sushi dishes"
                className="absolute inset-0 w-full h-full object-cover opacity-90"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30"></div>

            <div className="relative w-full h-full flex flex-col items-center justify-center pt-24 text-center px-4">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-['Cormorant Garamond'] font-extrabold mb-4">
                    Blog Single
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-white/70">
                    <a href="#" className='style={{ color: "#fff"}}'>Home</a> &gt; blog-single
                </p>
            </div>
        </div>
    );

const STATIC_POST = {
  id: 1,
  title: "Conduct replied off led whether?",
  author: "John Baus",
  date: "12 August, 2024",
  readTime: "7 min",
  imageUrl: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F1-full.jpg&w=1920&q=75",
  content: `
Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Gay direction neglected but supported yet her.

New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.
`,
  tags: ["Algorithm", "Data science"],
  prevPost: "Discovery incommode",
  nextPost: "Discovery incommode",
  authorBio: {
    name: "Md Sohag",
    description: "Grusus mal suada faicis ioli Lorem ipsum dolor sit amet amorition consectetur elit. Vesti at bulum nec at odio sea the dumm ipsum ipsum that dolorous risus mal suada and ladoriort it to the perfectus elit. All the Lorem ipsum generators on the Internet tend. Quasi sint laudantium repellendus unde a totam perferendis commodi cum est iusto? Minima, laborum.",
    image: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F1.jpg&w=828&q=75"
  },
  comments: [
    {
      id: 101,
      author: "Bubkhan Prova",
      date: "28 Feb, 2023",
      text: "Delivered ye sportsmen zealously arranging frankness estimable as. Nay any article enabled musical shyness yet sixteen yet blushes. Entire its the did figure wonder off. sportsmen zealously arranging to the main pint. Discourse unwilling am no described dejection incommode no listening of. Before nature his parish boy.",
      
    },
    {
      id: 102,
      author: "Mickel Jones",
      date: "15 Mar, 2023",
      text: "Delivered ye sportsmen zealously arranging frankness estimable as. Nay any article enabled musical shyness yet sixteen yet blushes. Entire its the did figure wonder off. sportsmen zealously arranging to the main pint. Discourse unwilling am no described dejection incommode no listening of. Before nature his parish boy."
    }
  ]
};



const AuthorBioCard = ({ authorBio }) => (
  <div className="border border-gray-200 dark:border-gray-700 p-6 rounded-xl flex items-center space-x-6 mt-10 bg-gray-50 dark:bg-gray-800">
    <img 
      src={authorBio.image} 
      alt={authorBio.name} 
      className="w-24 h-24 rounded-full object-cover border-4 border-yellow-600"
      onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/100x100/A0B969/ffffff?text=MS"; }}
    />
    <div>
      <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{authorBio.name}</h5>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        {authorBio.description}
      </p>
    </div>
  </div>
);

const Comment = ({ comment }) => (
  <div className="flex space-x-4 py-6 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
    <img 
      src={`https://placehold.co/60x60/888888/ffffff?text=${comment.author.charAt(0)}`} 
      alt={comment.author} 
      className="w-14 h-14 rounded-full object-cover flex-shrink-0"
    />
    <div className="flex-grow">
      <div className="flex justify-between items-start">
        <div>
          <h6 className="text-base font-semibold text-gray-900 dark:text-white">{comment.author}</h6>
          <span className="text-xs text-gray-500 dark:text-gray-400">{comment.date}</span>
        </div>
        <button className="text-sm text-yellow-600 font-medium border border-gray-300 dark:border-gray-700 px-3 py-1 rounded-full">
          Reply
        </button>
      </div>
      <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{comment.text}</p>
    </div>
  </div>
);

const SinglePostPage = ({ post }) => {
  const contentBlocks = post.content.trim().split('\n\n').filter(block => block.trim() !== '');

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl">
          
          <div className="p-8">
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
              <span className="mr-4">{post.date}</span>
              <UserIcon size={16} className="mr-1 text-yellow-600"/>
              <span>{post.author}</span>
            </div>
            
            <img 
              src={post.imageUrl} 
              alt={post.title} 
              className="w-full h-auto object-cover rounded-lg shadow-xl" 
              onError={(e) => { e.target.onerror = null; e.target.src = "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F1.jpg&w=828&q=75"; }}
            />
          </div>

          <div className="p-8 pt-4 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            {contentBlocks.map((paragraph, index) => (
              <p key={index} className="leading-relaxed">{paragraph.trim()}</p>
            ))}
          </div>
          
        </div>

        <div className="flex flex-wrap justify-between items-center mt-8 py-4 border-y border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">Tags:</span>
            {post.tags.map(tag => (
              <span key={tag} className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full dark:text-gray-300 dark:bg-gray-700">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center space-x-3 text-sm font-semibold text-gray-900 dark:text-white">
            <span>Share:</span>
            <div className="flex space-x-2">
              {['Fb', 'Tw', 'Li'].map((icon, index) => (
                <a key={index} href="#" className="p-2 border border-gray-300 dark:border-gray-700 rounded-full text-gray-600 dark:text-gray-400 hover:bg-yellow-600 hover:text-black transition-colors text-xs font-bold">
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-6">
          <a href="#" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-yellow-600 transition-colors flex items-center space-x-1">
            &larr; <span className="hidden sm:inline">PREVIOUS POST</span>
            <span className="text-gray-900 dark:text-white ml-2">{post.prevPost}</span>
          </a>
          <a href="#" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-yellow-600 transition-colors flex items-center space-x-1">
            <span className="text-gray-900 dark:text-white mr-2">{post.nextPost}</span>
            <span className="hidden sm:inline">NEXT POST</span> &rarr;
          </a>
        </div>
        
        <AuthorBioCard authorBio={post.authorBio} />
        
        <div className="mt-12">
          <h4 className="text-xl font-extrabold text-gray-900 dark:text-white mb-6">
            {post.comments.length} Comments
          </h4>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 space-y-4">
            {post.comments.map(comment => (
              <Comment key={comment.id} comment={comment} />
            ))}
          </div>
        </div>
        
        <div className="mt-12">
          <h4 className="text-xl font-extrabold text-gray-900 dark:text-white mb-6">
            Leave a comment
          </h4>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="Name *" 
                required 
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 text-gray-900 dark:text-white focus:ring-yellow-600 focus:border-yellow-600 transition-colors"
              />
              <input 
                type="email" 
                placeholder="Email *" 
                required 
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 text-gray-900 dark:text-white focus:ring-yellow-600 focus:border-yellow-600 transition-colors"
              />
            </div>
            <textarea
              placeholder="Comment"
              rows="6"
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 text-gray-900 dark:text-white focus:ring-yellow-600 focus:border-yellow-600 transition-colors"
            ></textarea>
            <button
              type="submit"
              className="px-8 py-3 bg-yellow-600 text-black font-semibold rounded-lg hover:bg-yellow-700 transition duration-150 shadow-md"
            >
              Post Comment
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default function Page() {
   
  return (
    <div className={`min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300`}>
      <HeroSection/>
      
      <main className="pt-[150px]"> 
        <SinglePostPage post={STATIC_POST} />
      </main>

      <RestanFooter/>
      <div className="fixed bottom-8 right-8 w-12 h-12 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition duration-300 text-gray-700 dark:text-white z-50" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <span className="text-xl">↑</span>
            </div>
    </div>
  );
}