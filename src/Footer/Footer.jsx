import React from 'react';
const posts = [
  {
    id: 1,
    title: 'Commodo Muso Magna Cosmopolis',
    author: 'by Halo Themes on Dec 20,2021',
    description: 'Nam tempus turpis at metus scelerisque placerat nulla deumantos sollicitudin felis. Pellentesque diam dolor, elementum et lobortis at, mollis ut risus. Sedcuman des faucibus sullamcorper mattis fusce molestie elit a lorem tempus scelerisque blandit est cursus....',
    imageUrl: 'https://new-ella-demo.myshopify.com/cdn/shop/articles/blog1_570x.jpg?v=1640051895',
  },
  {
    id: 2,
    title: 'Deumnto Sollicitudin Delo Milencelos',
    author: 'by Halo Themes on Dec 20,2021',
    description: 'Nam tempus turpis at metus scelerisque placerat nulla deumantos sollicitudin felis. Pellentesque diam dolor, elementum et lobortis at, mollis ut risus. Sedcuman des faucibus sullamcorper mattis fusce molestie elit a lorem tempus scelerisque blandit est cursus....',
    imageUrl: 'https://new-ella-demo.myshopify.com/cdn/shop/articles/blog2_570x.jpg?v=1640051855',
  },
];

function Footer() {
  return (
    <div className="container block w-full max-w-full px-4">
      <div className="header text-center">
        <h3 className="title text-[#0b0335] text-xl font-extrabold tracking-tighter mb-[7px]">
          <span className="bg-transparent">LATEST POSTS</span>
        </h3>
        <div className="rte subtext-blog text-[#3c3c3c] text-[12px]">Phasellus lorem malesuada ligula pulvinar commodo</div>
      </div>
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 px-[125px]">
          {posts.map(post => (
            <div key={post.id} className="bg-white rounded-lg  overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img className="min-w-fit h-90 object-cover " src={post.imageUrl} alt={post.title} ></img>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 text-[#1d5dd9]">{post.title}</h3>
                <p className="text-[#888888] text-xs mb-[13px]">{post.author}</p>
                <p className="text-[#5d5c5c] mb-[6px] text-xs leading-7">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}

export default Footer