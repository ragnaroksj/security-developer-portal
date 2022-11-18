import { expect, it, describe } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import Home, { getStaticProps } from '../pages/index'

describe('home', () => {
  it('renders homepage correctly', () => {
    const allPostsData = [
      {id: 'a', date: '2022-01-02', title: 'a'},
      {id: 'b', date: '2022-01-02', title: 'b'}
    ];
  
    const result = render(<Home allPostsData={allPostsData}/>)
    expect(result).toMatchSnapshot()
  });

  it('getStaticProps', async () => {
    const localeSetting = {locale: 'en'};
    const result = await getStaticProps(localeSetting);
    
    expect(result).toMatchSnapshot();
  })
})