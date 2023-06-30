export default function Search ({setSearch}) {
return (<form class="flex items-center justify-center">
  <label for="default-search" class="sr-only">Search</label>
  <div class="relative flex-grow">
    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
      </svg>
    </div>
    <input type="text" id="default-search" 
    onChange={(e) => setSearch(e.target.value)} 
  // onChange={(entered) => setCategory(Object.keys(categorys).find((key) => categorys[key] === entered.target.value))}
  class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="Search dessert type..." required />
  </div>
  <button type="submit"
   className ="ml-2 text-white bg-indigo-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-indigo-900 dark:hover:bg-indigo-700 dark:focus:ring-purple-800">Search</button>
</form>
)}