import React, { useState } from 'react';

const DragandDrop = () => {
  const [dragging, setDragging] = useState(false);

  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', 'Dragged item');
    setDragging(true);
  };

  const handleDragEnd = () => {
    setDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const droppedItem = e.dataTransfer.getData('text/plain');
    console.log('Dropped item:', droppedItem);
  };

  return (
    <div
      className={`drop-area ${dragging ? 'dragging' : ''}`}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div
        className="draggable-item"
        draggable
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        Drag me!
      </div>
      {dragging && <div className="drop-here">Drop here</div>}
    </div>
  );
};

export default DragandDrop;
