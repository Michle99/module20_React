// Article.js
import React from 'react';
import styled from 'styled-components';

const ArticleContainer = styled.article`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ArticleDate = styled.p`
  color: #888;
`;

const ArticleTitle = styled.h2`
  color: #333;
`;

const ArticleImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

const ArticleParagraph = styled.p`
//   text-indent: 2em;
`;

const ContinuesParagraph = styled.p`
//   text-indent: 2em;
//   float: right;
  color: red;
`;
const ArticleParagraphTitle = styled.p`
    position: relative;
    &:first-letter {
        color: tomato;
        font-size: 6em;
        line-height: 0.5em;
        float: left;
        margin-right: 10px;
        top: 0;
        left: 0;
        position: absolute;
    }
`;

const Article = ({ date, title, image, 
        paragraph_title, paragraph_name, 
        paragraph_begin, paragraph_mid, paragraph_end,
        continues
    }) => {
  return (
    <ArticleContainer>
      <ArticleDate>{date}</ArticleDate>
      <ArticleTitle>{title}</ArticleTitle>
      <ArticleImage src={image} alt={title} />
      <ArticleParagraphTitle>{paragraph_title}</ArticleParagraphTitle>
      <ArticleParagraph>{paragraph_name}</ArticleParagraph>
      <ArticleParagraph>{paragraph_begin}</ArticleParagraph>
      <ArticleParagraph>{paragraph_mid}</ArticleParagraph>
      <ArticleParagraph>{paragraph_end}</ArticleParagraph>
      <ContinuesParagraph>{continues}</ContinuesParagraph>
      <br/>
      <hr/>
      
    </ArticleContainer>
    
  );
};

export default Article;
