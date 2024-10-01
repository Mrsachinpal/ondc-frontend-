import * as React from 'react';
import Alert from '@mui/material/Alert';
import './Alertt.css'; 

export default function Alertt(props) {
  const { variant, severity, children, position } = props;
  
  
  const className = `alert ${position}`;

  return (
    <Alert className={className} variant={variant} severity={severity}>
      {children}
    </Alert>
  );
}
