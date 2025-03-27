import React from 'react'

export default function Tags() {
  return (
    <div className="flex justify-center items-center min-h-screen gap-3 bg-gray-100">
  <table className="border border-gray-300 rounded-t-lg overflow-hidden shadow-lg bg-white">

<thead className="bg-pink-800 border  hover:bg-orange-500 border-black">
  <tr>
    <th className="p-4 text-left border-r border-gray-300">Name</th>
    <th className="px-6 py-3 text-left border-r border-gray-300">Age</th>
    <th className="px-6 py-3 text-left">City</th>
  </tr>
</thead>

    <tbody>
      <tr className="border-b hover:bg-slate-500">
        <td className="px-6   hover:bg-neutral-500 py-3">Ali</td>
        <td className="px-6 py-3">22</td>
        <td className="px-6  hover:bg-neutral-500 py-3">Karachi</td>
      </tr>
      <tr className="border-b hover:bg-slate-500">
        <td className="px-6 py-3">Ayesha</td>
        <td className="px-6 py-3">24</td>
        <td className="px-6 py-3">Lahore</td>
      </tr>
    </tbody>
  </table>

  
  <table className=' border  bg-slate-700 rounded-lg overflow-hidden  '>
  <thead className="   ">
  <tr>
    <td className="">
      <input type="text" placeholder="Name" className="border  rounded-tl-lg w-full" />
    </td>
    <td className="">
      <input type="text" placeholder="Father Name" className="border   w-full" />
    </td>
    <td className="">
      <input type="text" placeholder="Contact" className="border  rounded-tr-lg w-full" />
    </td>
  </tr>
  </thead>
  <tbody>
    <tr>
        <td>
            <input type="text" border className='' />
        </td>
    </tr>
  </tbody>
  </table>
</div>

  )
}
