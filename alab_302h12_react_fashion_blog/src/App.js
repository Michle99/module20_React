import './App.css';
import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Article from './Article';
import Footer from './Footer';

const App = () => {
  const articleData = [
    {
      date: '11/12/20',
      title: 'On the Street in Brooklyn',
      image: '/images/blog-image-1.jpg',
      paragraph_title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nisi ac quam facilisis venenatis. Nulla facilisi. Sed nec nulla at augue luctus pellentesque. Vestibulum gravida augue ut odio consectetur, non ullamcorper enim vulputate. Etiam ac commodo lectus. Duis vel justo at tortor interdum viverra eu sit amet arcu.',
      paragraph_name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nisi ac quam facilisis venenatis. Nulla facilisi. Sed nec nulla at augue luctus pellentesque. Vestibulum gravida augue ut odio consectetur, non ullamcorper enim vulputate. Etiam ac commodo lectus. Duis vel justo at tortor interdum viverra eu sit amet arcu.',
      paragraph_begin: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nisi ac quam facilisis venenatis. Nulla facilisi. Sed nec nulla at augue luctus pellentesque. Vestibulum gravida augue ut odio consectetur, non ullamcorper enim vulputate. Etiam ac commodo lectus. Duis vel justo at tortor interdum viverra eu sit amet arcu.',
      paragraph_mid: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nisi ac quam facilisis venenatis. Nulla facilisi. Sed nec nulla at augue luctus pellentesque. Vestibulum gravida augue ut odio consectetur, non ullamcorper enim vulputate. Etiam ac commodo lectus. Duis vel justo at tortor interdum viverra eu sit amet arcu.',
      paragraph_end: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nisi ac quam facilisis venenatis. Nulla facilisi. Sed nec nulla at augue luctus pellentesque. Vestibulum gravida augue ut odio consectetur, non ullamcorper enim vulputate. Etiam ac commodo lectus. Duis vel justo at tortor interdum viverra eu sit amet arcu.',
      continues: 'Continues...'
    },
    {
      date: '11/11/20',
      title: 'Vintage in Vogue',
      image: '/images/blog-image-2.jpg',
      paragraph_title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nisi ac quam facilisis venenatis. Nulla facilisi. Sed nec nulla at augue luctus pellentesque. Vestibulum gravida augue ut odio consectetur, non ullamcorper enim vulputate. Etiam ac commodo lectus. Duis vel justo at tortor interdum viverra eu sit amet arcu.',
      paragraph_name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nisi ac quam facilisis venenatis. Nulla facilisi. Sed nec nulla at augue luctus pellentesque. Vestibulum gravida augue ut odio consectetur, non ullamcorper enim vulputate. Etiam ac commodo lectus. Duis vel justo at tortor interdum viverra eu sit amet arcu.',
      paragraph_begin: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nisi ac quam facilisis venenatis. Nulla facilisi. Sed nec nulla at augue luctus pellentesque. Vestibulum gravida augue ut odio consectetur, non ullamcorper enim vulputate. Etiam ac commodo lectus. Duis vel justo at tortor interdum viverra eu sit amet arcu.',
      paragraph_mid: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nisi ac quam facilisis venenatis. Nulla facilisi. Sed nec nulla at augue luctus pellentesque. Vestibulum gravida augue ut odio consectetur, non ullamcorper enim vulputate. Etiam ac commodo lectus. Duis vel justo at tortor interdum viverra eu sit amet arcu.',
      paragraph_end: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nisi ac quam facilisis venenatis. Nulla facilisi. Sed nec nulla at augue luctus pellentesque. Vestibulum gravida augue ut odio consectetur, non ullamcorper enim vulputate. Etiam ac commodo lectus. Duis vel justo at tortor interdum viverra eu sit amet arcu.',
      continues: 'Continues...'
    },
  ];

  return (
    <div>
      <Header />
      <Nav />
      { articleData.map((article, index) => (
        <Article key={index} {...article} />
        
      ))}
      <Footer />
    </div>
  );
};

export default App;

