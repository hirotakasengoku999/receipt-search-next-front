import Layout from "../components/Layout";
import Link from "next/link";
import React, { useState } from "react";

const Receipt = () => {
    const [code, setCode] = useState("");
    const [allcodes, setAllcodes] = useState([]);
    return (
      <Layout title="receipt search">
        <div className="mb-6">
          <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">レセ電コード</label>
          <div className="relative">
              <input type="number" id="search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="レセ電コード" onChange={evt=>{setCode(evt.target.value)}}/>
              <Link href={`/posts/${code}`}>
                <button className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">検索</button>
              </Link>
          </div>
        </div>
      </Layout>
    )
}

export default Receipt