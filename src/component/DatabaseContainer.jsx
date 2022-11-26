import React from 'react';
import Database from './Database';

export default function DatabaseContainer() {
  return (
    <div className="database-container">
      <div className="database-tags">
        <div className="database-tag">早餐</div>
      </div>
      <Database />
    </div>
  );
}
