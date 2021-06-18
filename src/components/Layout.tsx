import React from 'react';

import ScrollArrow from './ScrollArrow';


type Props = {
  title: string;
  children: any;
}
const Layout: React.FC<Props> = ({ title, children }) => {

  document.title = `Thoth Finance - ${title}`;

  return(
    <>
      <main>
        {children}
        <ScrollArrow />
      </main>
    </>
  )
    
}


export default Layout;