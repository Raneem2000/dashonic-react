// import axios from 'axios';
// import React, { useContext, useEffect, useState } from 'react';
// import { Oval } from 'react-loader-spinner';
// import CategoPagination from '../../../components/CategoPagination';
// import { User } from '../../Website/context/UserContext';

// function Catego() {
//   const [catego, setCatego] = useState([]);
//   const [runUseEffect, setRunUseEffect] = useState(0);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(30);
//   const [isLoading, setIsLoading] = useState(true);

//   const totalPages = Math.ceil(catego.length / itemsPerPage);
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = catego.slice(indexOfFirstItem, indexOfLastItem);

//   const context = useContext(User);
//   const token = context.auth;
//   console.log(token);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setIsLoading(true);

//         const response = await axios.get('http://5.182.17.33:6060/api/Item/categories/all', {
//           headers: {
//             Accept: 'application/json',
//             Authorization: 'Bearer ' + token,
//           },
//         });
//         console.log(response.data.data);
//         setCatego(response.data.data);
//         setIsLoading(false);
//       } catch (error) {
//         console.error('حدث خطأ:', error);
//       }
//     };

//     fetchData();
//   }, [runUseEffect]);

//   const filteredCatego = catego.filter((cat) => {
//     return (
//       cat.brandName ? cat.brandName.toLowerCase().includes(searchTerm.toLowerCase()) : '' ||
//       cat.catName ? cat.catName.toLowerCase().includes(searchTerm.toLowerCase()) : ''
//     );
//   });

//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <>
//       <div style={{ padding: '0.3rem 0.3rem' }}>
//         <CategoSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
//         <div className='table-container'>
//           {isLoading ? (
//             <div className='loading'>
//               <Oval color="#00BFFF" height={80} width={80} />
//             </div>
//           ) : (
//             <CategoTable data={searchTerm ? filteredCatego : currentItems} />
//           )}
//         </div>
//         <CategoPagination totalPages={totalPages} currentPage={currentPage} paginate={paginate} />
//       </div>
//     </>
//   );
// }

// export default Catego;
