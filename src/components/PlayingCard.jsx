import React from 'react';
import { Card } from 'antd';

export default function PlayingCard({ suit, rank }) {
  // This component is currently not in use
  // To implement card flip functionality, consider using CSS animations
  // or a React 19 compatible flip library
  
  return (
    <Card
      styles={{
        body: {
          padding: 0,
        }
      }}
      hoverable
    >
      <img 
        src={`/svg_playing_cards/fronts/${suit}_${rank}.svg`} 
        alt={`${rank} of ${suit}`} 
        style={{ width: '100%', height: 'auto' }} 
      />
    </Card>
  );
}

