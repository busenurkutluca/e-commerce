import React from "react";


function BlogCard() {
  const texts = [
    'Practice Advice',
    "Featured Posts",
    'Problems trying Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics to resolve the conflict between'
  ];

return (
  <div style={{ textAlign: 'center', marginTop: '50px' }}>
    {texts.map((text, index) => (
      <h2 key={index}>{text}</h2>
    ))}
  </div>
);
}





export default BlogCard 