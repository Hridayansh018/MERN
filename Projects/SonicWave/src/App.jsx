import React from 'react';
import Header from './header';
import Sidebar from './sidebar';
import PlayBack from './playback';
import Right from './right';
import MusicGrid from './musicgrid';

function App() {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen flex flex-col">
      <Header className="inset-x-0" />
      <div className="flex-grow grid grid-cols-12">
        <Sidebar className="col-span-2" />
        <MusicGrid className="col-span-7" />
        <Right className="col-span-3" />
      </div>
      {/* You can uncomment and position the PlayBack component if needed */}
      {/* <PlayBack className="fixed bottom-0 w-full" /> */}
    </div>
  );
}

export default App;
