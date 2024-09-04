import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';

function BlogCard() {
  const texts = [
    'Practice Advice',
    "Featured Posts",
    'Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics'
  ];

  const cards = [
    {
      image: "/blog-1.png",  // Replace with the actual path to the first image
      tags: ['Google', 'Trending', 'New'],
      title: 'Loudest à la Madison #1 (L\'integral)',
      description: 'We focus on ergonomics and meeting you where you work. It\'s only a keystroke away.',
      date: '22 April 2021',
      comments: '10 comments'
    },
    {
      image: "/blog-2.png",   // Replace with the actual path to the second image
      tags: ['Google', 'Trending', 'New'],
      title: 'Loudest à la Madison #2 (L\'integral)',
      description: 'We focus on ergonomics and meeting you where you work. It\'s only a keystroke away.',
      date: '22 April 2021',
      comments: '10 comments'
    },
    {
      image: "/blog-3.png",  // Replace with the actual path to the third image
      tags: ['Google', 'Trending', 'New'],
      title: 'Loudest à la Madison #3 (L\'integral)',
      description: 'We focus on ergonomics and meeting you where you work. It\'s only a keystroke away.',
      date: '22 April 2021',
      comments: '10 comments'
    }
  ];

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {texts.map((text, index) => (
        <h2 key={index}>{text}</h2>
      ))}

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
        {cards.map((card, index) => (
          <div key={index} style={{ border: '1px solid #ddd', borderRadius: '8px', width: '300px', textAlign: 'left' }}>
            <img src={card.image} alt={card.title} style={{ width: '100%', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }} />
            <div style={{ padding: '20px' }}>
              <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                {card.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} style={{ backgroundColor: '#f1f1f1', padding: '5px', borderRadius: '5px', fontSize: '12px' }}>{tag}</span>
                ))}
              </div>
              <h3 style={{ margin: '10px 0' }}>{card.title}</h3>
              <p style={{ color: '#555', fontSize: '14px', marginBottom: '10px' }}>{card.description}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#999', fontSize: '12px', marginBottom: '10px' }}>
                <span>{card.date}</span>
                <span><FontAwesomeIcon icon={faCommentAlt} /> {card.comments}</span>
              </div>
              <a href="#" style={{ textDecoration: 'none', color: '#007BFF', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '5px' }}>
                Learn More <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogCard;
