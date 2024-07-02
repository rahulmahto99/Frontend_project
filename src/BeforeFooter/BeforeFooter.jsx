import React from 'react';
import { FaShoppingFast, FaShieldAlt, FaStar, FaHeadset } from 'react-icons/fa';
import Feature from './Feature';
const posts = [
  {
    id: 1,
    title: 'Commodo Muso Magna Cosmopolis',
    author: 'by Halo Themes on Dec 20,2021',
    description: 'Nam tempus turpis at metus scelerisque placerat nulla deumantos sollicitudin felis. Pellentesque diam dolor, elementum et lobortis at, mollis ut risus. Sedcuman des faucibus sullamcorper mattis fusce molestie elit a lorem tempus scelerisque blandit est cursus....',
    imageUrl: 'https://new-ella-demo.myshopify.com/cdn/shop/articles/blog1_570x.jpg?v=1640051895',
    view: 'View Details',
  },
  {
    id: 2,
    title: 'Deumnto Sollicitudin Delo Milencelos',
    author: 'by Halo Themes on Dec 20,2021',
    description: 'Nam tempus turpis at metus scelerisque placerat nulla deumantos sollicitudin felis. Pellentesque diam dolor, elementum et lobortis at, mollis ut risus. Sedcuman des faucibus sullamcorper mattis fusce molestie elit a lorem tempus scelerisque blandit est cursus....',
    imageUrl: 'https://new-ella-demo.myshopify.com/cdn/shop/articles/blog2_570x.jpg?v=1640051855',
    view: 'View Details',
  },
];
const features = [
  {
    icon: FaShoppingFast,
    title: 'Free Standard Delivery',
    description: 'Metus tellus multiricies a quam sit amet lorem diam libero de cosmopolis.'
  },
  {
    icon: FaShieldAlt,
    title: 'Secure Shopping',
    description: 'Metus tellus multiricies a quam sit amet lorem diam libero de cosmopolis.'
  },
  {
    icon: FaStar,
    title: 'Shop With Confidence',
    description: 'Metus tellus multiricies a quam sit amet lorem diam libero de cosmopolis.'
  },
  {
    icon: FaHeadset,
    title: '24/7 Help Center',
    description: 'Metus tellus multiricies a quam sit amet lorem diam libero de cosmopolis.'
  }
];

function BeforeFooter() {
  return (
    <>
    <div className="flex justify-between max-w-[1200px] mx-auto  min-h-32  items-center">
      <div className="before_footer_a block">
        <div className="header text-center">
          <h3 className="title text-[#0b0335] text-xl font-extrabold tracking-tighter mb-[7px]">
            <span className="bg-transparent">LATEST POSTS</span>
          </h3>
          <div className="rte subtext-blog text-[#3c3c3c] text-[12px]">Phasellus lorem malesuada ligula pulvinar commodo</div>
        </div>
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2  ">
            {posts.map(post => (
              <div key={post.id} className="bg-white rounded-lg  overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img className="min-w-fit h-90 object-cover hover:scale-105 transform transition-transform duration-500 ease-in " src={post.imageUrl} alt={post.title} ></img>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-[#1d5dd9]">{post.title}</h3>
                  <p className="text-[#888888] text-xs mb-[13px]">{post.author}</p>
                  <p className="text-[#5d5c5c] mb-[6px] text-xs leading-7">{post.description}</p>
                  <a className="text-[#5d5c5c] mb-[6px] text-xs leading-7 hover:underline hover:text-[#1d5dd9]" href="https://new-ella-demo.myshopify.com/blogs/blog-home9/commodo-muso-magna-cosmopolis">{post.view}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="before_footer_b mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <Feature
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
    </>
  )
}

export default BeforeFooter