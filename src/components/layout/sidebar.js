const Sidebar = () => {
    return (
        <div className="h-screen border-r  text-gray-800 w-64 p-5">
        <h1 className="text-xl font-semibold mb-4">Sidebar Title</h1>
        <ul>
            <li className="mb-2 hover:bg-gray-200 p-2 rounded cursor-pointer">Item 1</li>
            <li className="mb-2 hover:bg-gray-200 p-2 rounded cursor-pointer">Item 2</li>
            <li className="mb-2 hover:bg-gray-200 p-2 rounded cursor-pointer">Item 3</li>
            <li className="mb-2 hover:bg-gray-200 p-2 rounded cursor-pointer">Item 4</li>
        </ul>
    </div>
    );
  };
  
  export default Sidebar;
  