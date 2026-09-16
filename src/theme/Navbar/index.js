import React from 'react';
import OriginalNavbar from '@theme-original/Navbar';

const EMBEDDED = process.env.AXIOWL_DOCS_EMBEDDED === '1';

export default function Navbar(props) {
  if (EMBEDDED) {
    return null;
  }
  return <OriginalNavbar {...props} />;
}
