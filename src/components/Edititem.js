import { useState, useEffect } from 'react';
import firebase from 'firebase/app';

function EditItem({ itemId }) {
  const [item, setItem] = useState({});

  useEffect(() => {
    // Fetch the item data from Firebase
    const itemRef = firebase.database().ref(`items/${itemId}`);
    
    itemRef.on('value', (snapshot) => {
      const data = snapshot.val();
      setItem(data);
    });

    // Clean up the listener when component unmounts
    return () => {
      itemRef.off();
    };
  }, [itemId]);

  // Render the form with item data for editing
  return (
    <div>
      <input
        type="text"
        value={item.name}
        onChange={(e) => setItem({ ...item, name: e.target.value })}
      />
      {/* Add more input fields for other properties */}
      <button onClick={handleSave}>Save</button>
    </div>
  );
}
export default EditItem;