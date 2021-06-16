import React from 'react';


type Props = {
  title: string;
  children: any;
}
const Layout: React.FC<Props> = ({ title, children }) => {

  document.title = `Thoth Finance - ${title}`;

  return(
    <>
      <main>{children}</main>
    </>
  )
    
}


export default Layout;