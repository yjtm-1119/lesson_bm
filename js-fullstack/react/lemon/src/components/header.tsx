import * as React from 'react';

//ts  @types/react  
//声明  about 是一个无类型的组件 React.StatelessComponent
export const Header: React.StatelessComponent<{}> = () => {
  return (
    <div className="row">
      <h2>Application Header</h2>
    </div>
  );
}