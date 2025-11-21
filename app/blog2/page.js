"use client";
import React from 'react';
import RestanHeader from '../components/RestanHeader/page.js';
import RestanFooter from '../components/RestanFooter/page.js';
import SafeHydrate from '../components/SafeHydrate/page.js';

const accentColor = "#A0845F";



const HeroSection = () => (
  <div className="relative w-full h-[40vh] min-h-[300px] md:h-[550px] bg-black text-white overflow-hidden">
    <RestanHeader accentColor={accentColor} />
    <img
      src="https://restan-nextjs.vercel.app/assets/img/shape/5.jpg"
      alt="Background"
      className="absolute inset-0 w-full h-full object-cover opacity-90"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30"></div>
    <div className="relative w-full h-full flex flex-col items-center justify-center pt-16 px-4 text-center">
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-['Cormorant_Garamond'] font-extrabold mb-2 md:mb-4 tracking-tight leading-tight">
        Blog Single
      </h2>
      <p className="text-xs sm:text-sm md:text-lg text-white/70 font-light tracking-wide">
        <a href="/" className='hover:text-[#A0845F] transition-colors'>Home</a> &gt; blog-single
      </p>
    </div>
  </div>
);

const Blockquote = () => (
  <div className="w-full bg-[#111111] text-white p-6 sm:p-10 md:p-16 my-8 md:my-12 relative overflow-hidden rounded-lg">
    <div className="relative z-10">
      <p className="text-lg sm:text-xl md:text-2xl italic font-light leading-relaxed font-['Cormorant_Garamond'] text-center md:text-left">
        “Celebrated share of first to worse. Weddings and any opinions suitable smallest nay. Houses or months settle remove ladies appear. Engrossed suffering supposing he recommend do eagerness.”
      </p>
    </div>
    
    <span className="absolute -bottom-2 right-2 text-[80px] md:-bottom-5 md:right-10 md:text-[150px] leading-none font-serif opacity-10 pointer-events-none text-white">
      ❝
    </span>
  </div>
);

const AuthorBioCard = ({ authorBio }) => (
  <div className="w-full border border-gray-200 dark:border-gray-800 p-6 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 mt-10 md:mt-14 bg-white dark:bg-[#1a1a1a] shadow-sm rounded-xl">
    <div className="shrink-0">
      <img 
        src={authorBio.image} 
        alt={authorBio.name} 
        className="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover border-2 border-gray-100 dark:border-gray-700"
        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/150x150/A0B969/ffffff?text=MS"; }}
      />
    </div>
    <div className="text-center md:text-left flex-grow w-full">
      <h5 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3 font-['Cormorant_Garamond']">{authorBio.name}</h5>
      <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
        {authorBio.description}
      </p>
    </div>
  </div>
);

const Comment = ({ comment }) => (
  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 py-6 sm:py-8 border-b border-gray-100 dark:border-gray-800 last:border-0 bg-white dark:bg-[#1a1a1a] p-5 sm:p-6 rounded-xl mb-6 shadow-sm">
    <div className="shrink-0 mx-auto sm:mx-0">
      <img 
        src={`https://placehold.co/80x80/e0e0e0/333333?text=${comment.author.charAt(0)}`} 
        alt={comment.author} 
        className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full object-cover"
      />
    </div>
    <div className="flex-grow text-center sm:text-left w-full">
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-baseline mb-3 gap-2">
        <div>
          <h6 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">{comment.author}</h6>
          <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 block mt-1">{comment.date}</span>
        </div>
        <button className="text-[10px] sm:text-xs font-bold text-white bg-[#111] hover:bg-[#A0845F] px-3 py-1.5 sm:px-4 sm:py-2 rounded transition-colors uppercase tracking-wider">
          ↩ Reply
        </button>
      </div>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">{comment.text}</p>
    </div>
  </div>
);

const SinglePostPage = ({ post }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
    
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 w-full overflow-x-hidden">
      
        <div className="mb-8 md:mb-12 rounded-xl overflow-hidden shadow-lg w-full">
           <img 
              src={post.imageUrl} 
              alt={post.title} 
              className="w-full h-auto object-cover max-h-[250px] sm:max-h-[400px] md:max-h-[600px]" 
              onError={(e) => { e.target.onerror = null; e.target.src = "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F1.jpg&w=828&q=75"; }}
            />
        </div>

        
        <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-6 font-medium uppercase tracking-wide">
            <div className="flex items-center gap-1 sm:gap-2">
               <span>👤</span> <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
               <span>📅</span> <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
               <span>💬</span> <span>{post.comments.length} Comments</span>
            </div>
        </div>

      
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 dark:text-white font-['Cormorant_Garamond'] mb-6 md:mb-8 leading-tight break-words">
            {post.title}
        </h1>

        <div className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-loose space-y-6 mb-10 text-justify sm:text-left">
            <p>Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Gay direction neglected but supported yet her.</p>
            
            <p>Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.</p>
        </div>

  
        <Blockquote />

        <div className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-loose space-y-6 mb-12 text-justify sm:text-left">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white font-['Cormorant_Garamond'] mt-8 mb-4">Conduct replied off led whether?</h3>
            <ul className="space-y-3 list-disc list-inside marker:text-[#A0845F]">
                <li>Pretty merits waited six</li>
                <li>General few civilly amiable pleased account carried.</li>
                <li>Continue indulged speaking</li>
                <li>Narrow formal length my highly</li>
                <li>Occasional pianoforte alteration unaffected impossible</li>
            </ul>
        </div>
        
       
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-8 border-y border-gray-200 dark:border-gray-800 gap-6 w-full">
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <span className="text-base md:text-lg font-bold text-gray-900 dark:text-white font-['Cormorant_Garamond'] mr-2">Tags:</span>
            {post.tags.map(tag => (
              <span key={tag} className="px-3 py-1.5 text-xs md:text-sm text-gray-600 bg-[#f4f4f4] dark:bg-[#222] dark:text-gray-300 hover:bg-[#A0845F] hover:text-white transition-colors cursor-pointer rounded-md">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <span className="text-base md:text-lg font-bold text-gray-900 dark:text-white font-['Cormorant_Garamond']">Share:</span>
            <div className="flex gap-2">
              {['Fb', 'Tw', 'Li', 'In'].map((icon, index) => (
                <a key={index} href="#" className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-[#f4f4f4] dark:bg-[#222] rounded-full text-gray-600 dark:text-gray-400 hover:bg-[#A0845F] hover:text-white transition-all">
                  <span className="text-[10px] md:text-xs font-bold">{icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center py-8 gap-4 sm:gap-6 border-b border-gray-200 dark:border-gray-800 w-full">
          <a href="#" className="group flex items-center gap-3 w-full sm:w-1/2 justify-start p-3 border border-gray-100 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-[#111] transition-colors">
             <div className="shrink-0 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center border border-gray-300 dark:border-gray-600 text-gray-400 group-hover:bg-[#A0845F] group-hover:text-white group-hover:border-[#A0845F] transition-all rounded">❮</div>
             <div className="min-w-0">
                 <span className="block text-[10px] text-gray-400 uppercase tracking-wider">Previous Post</span>
                 <span className="text-sm md:text-lg font-bold text-gray-900 dark:text-white group-hover:text-[#A0845F] transition-colors truncate block">{post.prevPost}</span>
             </div>
          </a>
          <a href="#" className="group flex items-center justify-end gap-3 w-full sm:w-1/2 text-right p-3 border border-gray-100 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-[#111] transition-colors">
             <div className="min-w-0">
                 <span className="block text-[10px] text-gray-400 uppercase tracking-wider">Next Post</span>
                 <span className="text-sm md:text-lg font-bold text-gray-900 dark:text-white group-hover:text-[#A0845F] transition-colors truncate block">{post.nextPost}</span>
             </div>
             <div className="shrink-0 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center border border-gray-300 dark:border-gray-600 text-gray-400 group-hover:bg-[#A0845F] group-hover:text-white group-hover:border-[#A0845F] transition-all rounded">❯</div>
          </a>
        </div>
    
        <AuthorBioCard authorBio={post.authorBio} />
  
        <div className="mt-12 md:mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white font-['Cormorant_Garamond'] mb-8 md:mb-10">
            3 Comments
          </h3>
          <div className="space-y-6">
            {post.comments.map(comment => (
              <Comment key={comment.id} comment={comment} />
            ))}
          </div>
        </div>
        
       
        <div className="mt-12 md:mt-20 mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white font-['Cormorant_Garamond'] mb-6 md:mb-8">
            Leave a comment
          </h3>
          <form className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="w-full">
                <input 
                  type="text" 
                  placeholder="Name *" 
                  required 
                  className="w-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] p-3 md:p-4 text-gray-900 dark:text-white focus:border-[#A0845F] focus:ring-1 focus:ring-[#A0845F] outline-none transition-colors rounded-md text-sm md:text-base"
                />
              </div>
              <div className="w-full">
                <input 
                  type="email" 
                  placeholder="Email *" 
                  required 
                  className="w-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] p-3 md:p-4 text-gray-900 dark:text-white focus:border-[#A0845F] focus:ring-1 focus:ring-[#A0845F] outline-none transition-colors rounded-md text-sm md:text-base"
                />
              </div>
            </div>
            <textarea
              placeholder="Comment"
              rows="6"
              className="w-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] p-3 md:p-4 text-gray-900 dark:text-white focus:border-[#A0845F] focus:ring-1 focus:ring-[#A0845F] outline-none transition-colors resize-none rounded-md text-sm md:text-base"
            ></textarea>
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 md:px-10 md:py-4 bg-[#8D7350] text-white font-bold hover:bg-black transition duration-300 shadow-md rounded-md uppercase tracking-widest text-sm"
            >
              Post Comment
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

const STATIC_POST = {
  id: 1,
  title: "Conduct replied off led whether?",
  author: "John Baus",
  date: "12 August, 2024",
  imageUrl: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F1-full.jpg&w=1920&q=75",
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
      author: "Bubhan Prova",
      date: "28 Feb, 2023",
      text: "Delivered ye sportsmen zealously arranging frankness estimable as. Nay any article enabled musical shyness yet sixteen yet blushes. Entire its the did figure wonder off.",
    },
    {
      id: 102,
      author: "Mickel Jones",
      date: "15 Mar, 2023",
      text: "Delivered ye sportsmen zealously arranging frankness estimable as. Nay any article enabled musical shyness yet sixteen yet blushes."
    }
  ]
};

export default function Page() {
  return (
    <SafeHydrate>
        <div className={`min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300 w-full overflow-x-hidden`}>
        <HeroSection/>
        
        <main> 
            <SinglePostPage post={STATIC_POST} />
        </main>

        <RestanFooter/>
        
        <div className="fixed bottom-6 right-6 w-10 h-10 md:bottom-8 md:right-8 md:w-12 md:h-12 rounded-full shadow-lg flex items-center justify-center cursor-pointer bg-white hover:bg-[#A0845F] hover:text-white transition duration-300 text-gray-700 z-50 border border-gray-200" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="text-xl">↑</span>
        </div>
        </div>
    </SafeHydrate>
  );
}