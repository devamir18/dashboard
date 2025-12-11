import { useState } from "react";


const Staff = () => {
  const [staffList, setStaffList] = useState([
    { id: 1, name: "Mr idris", position: "Manager", email: "john@company.com" },
    { id: 2, name: "Ephraim", position: "Developer", email: "jane@company.com" },
     { id: 2, name: "Abuka", position: "Developer", email: "jane@company.com" },
  ]);

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editStaff, setEditStaff] = useState({ id: "", name: "", position: "", email: "" });
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [newStaff, setNewStaff] = useState({ name: "", position: "", email: "" });

  const [selectedStaff, setSelectedStaff] = useState(null); 
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  const addStaff = () => {
    if (!newStaff.name || !newStaff.position || !newStaff.email) return;

    setStaffList([
      ...staffList,
      { id: Date.now(), ...newStaff }
    ]);

    setNewStaff({ name: "", position: "", email: "" });
  };

  const deleteStaff = (id) => {
    setStaffList(staffList.filter((s) => s.id !== id));
  };

  
  const sortedStaff = [...staffList].sort((a, b) => {
    return sortOrder === "asc"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name);
  });


           const openEditModal = (staff) => {
    setEditStaff(staff);
    setEditModalOpen(true);
  };

  
  const updateStaff = () => {
    setStaffList(
      staffList.map((s) =>
        s.id === editStaff.id ? editStaff : s
      )
    );
    setEditModalOpen(false);
  };

  const filteredStaff = sortedStaff.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    <div>
    {/* <Sidebar/> */}
    </div>
    <div className="w-full h-screen bg-teal-50 md:max-w-6xl float-right ">
      <h1 className="text-2xl font-bold mb-6 px-16 py-4 text-slate-800">Staff Management</h1>
      <div className="bg-teal-50 p-4 rounded shadow mb-6 md:ml-12">
        <h2 className="text-xl font-semibold mb-3">Add Staff</h2>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <input
            placeholder="Name"
            className="border p-2 rounded border-slate-300"
            value={newStaff.name}
            onChange={(e) => setNewStaff({ ...newStaff, name: e.target.value })}
          />
          <input
            placeholder="Position"
            className="border p-2 rounded border-slate-300"
            value={newStaff.position}
            onChange={(e) => setNewStaff({ ...newStaff, position: e.target.value })}
          />
          <input
            placeholder="Email"
            className="border p-2 rounded border-slate-300"
            value={newStaff.email}
            onChange={(e) => setNewStaff({ ...newStaff, email: e.target.value })}
          />
        </div>
        <button
          onClick={addStaff}
          className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-500 hover:scale-105"
        >
          Add Staff
        </button>
      </div>

      
      <div className="flex justify-between items-center mb-4 md:ml-12">
        <input
          placeholder="Search staff..."
          className="border p-2 rounded w-1/2 border-slate-300"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2 mx-12 rounded border-slate-300"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Sort A → Z</option>
          <option value="desc">Sort Z → A</option>
        </select>
      </div>

      
    <div className="md:max-w-6xl ml-12 rounded">
        <table className="w-full bg-teal-50 rounded-3xl shadow-xl ">
        <thead className="rounded-3xl">
          <tr className="text-left">
            <th className="p-3">Name</th>
            <th className="p-3">Position</th>
            <th className="p-3">Email</th>
            <th className="p-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStaff.map((staff) => (
            <tr key={staff.id} className="divide-y-1 divide-slate-100">
              <td className="p-3 font-medium hover:bg-white">{staff.name}</td>
              <td className="p-3">{staff.position}</td>
              <td className="p-3">{staff.email}</td>
              <td className="p-3 text-center space-x-2">
              
                <button
                  onClick={() => {
                    setSelectedStaff(staff);
                    setIsModalOpen(true);
                  }}
                  className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Profile
                </button>

               
                <button
                  onClick={() => deleteStaff(staff.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
                  <button
                      onClick={() => openEditModal(staff)}
                      className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      Edit
                    </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

     
      {isModalOpen && selectedStaff && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-40">
          <div className="bg-white p-6 rounded shadow-lg w-80">
            <h2 className="text-xl font-semibold mb-4">Staff Profile</h2>

            <p><strong>Name:</strong> {selectedStaff.name}</p>
            <p><strong>Position:</strong> {selectedStaff.position}</p>
            <p><strong>Email:</strong> {selectedStaff.email}</p>

            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

       {editModalOpen && (
          <div className="fixed inset-0 flex justify-center items-center bg-black/85 bg-opacity-40">
            <div className="bg-white p-6 rounded shadow-lg w-100 bg-gradient-to-b from-slate-900 to-teal-700">
              <h2 className="text-xl font-semibold text-white mb-4">Edit Staff</h2>

              <input
                className="p-2 bg-white/25 text-white rounded w-full mb-2"
                value={editStaff.name}
                onChange={(e) => setEditStaff({ ...editStaff, name: e.target.value })}
              />
              <input
                className="bg-white/25 p-2 text-white rounded w-full mb-2"
                value={editStaff.position}
                onChange={(e) => setEditStaff({ ...editStaff, position: e.target.value })}
              />
              <input
                className="bg-white/25 p-2 rounded text-white w-full mb-2"
                value={editStaff.email}
                onChange={(e) => setEditStaff({ ...editStaff, email: e.target.value })}
              />

              <button
                onClick={updateStaff}
                className="w-full bg-teal-600 text-white py-2 rounded hover:bg-green-700 mb-2"
              >
                Save Changes
              </button>

              <button
                onClick={() => setEditModalOpen(false)}
                className="w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
    </div>
    </>
  );
};

export default Staff;

