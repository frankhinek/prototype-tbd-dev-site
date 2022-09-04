import React from 'react';

export default function BlankLines({lineCount}) {
  const result = [];
  for (let i = 0; i < lineCount; i++) {
    result.push(<br />)
  }
  return (
    <p>{result}</p>
  );
}