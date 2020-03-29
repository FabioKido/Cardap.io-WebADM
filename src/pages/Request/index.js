import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from "../../services/api"
import Layout from '../../components/Layout';
import image from "../../assets/icons/open-outline.svg";

const RequestAll = () => {
  const [requests, setRequests] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantAtual, setRestaurantAtual] = useState('');

  useEffect(() => {
    async function loadRequests() {
      if(restaurantAtual){
        const response = await api.get(`/requests/${restaurantAtual}`);

        setRequests(response.data.data);
        console.log(response.data.data);
      }
    }
console.log(restaurantAtual);
    loadRequests();
  }, [restaurantAtual]);

  useEffect(() => {
    async function loadRestaurant() {

      const response = await api.get('/user-restaurants');

      setRestaurants(response.data.data);
      console.log(response.data.data);
    }

    loadRestaurant()
  }, []);

  return (
    <Layout>
      <div className="antialiased font-sans bg-purple-200">
        <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">
                <div>
                    <h2 className="text-2xl font-semibold leading-tight text-gray-600">Todos os Pedidos</h2>
                </div>
                <div className="my-2 flex sm:flex-row flex-col">
                    <div className="flex flex-row mb-1 sm:mb-0">
                        <div className="relative">
                            <select
                                value={restaurantAtual}
                                onChange={event => setRestaurantAtual(event.target.value)}
                                className="appearance-none h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                {restaurants.map(restaurant => (<option key={restaurant._id}>{ restaurant.name }</option>))}
                            </select>
                            <div
                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="block relative">
                        <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-500">
                                <path
                                    d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                                </path>
                            </svg>
                        </span>
                        <input placeholder="Pesquisar"
                            className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
                    </div>
                </div>
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Cliente
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Data
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Preço
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                              {requests.map(request => (
                                <tr key={ request._id }>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 w-10 h-10">
                                                <Link to='#'>
                                                  <img className="w-full h-full rounded-full"
                                                      src={image}
                                                      alt="Abrir" />
                                                </Link>
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    { request.name }
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">{ request.createdAt.split(':') }</p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            Falta na API
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        {request.concluded && <span
                                              className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                              <span aria-hidden
                                                  className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                              <span className="relative">Concluído</span>
                                          </span>
                                        }
                                        {!request.concluded && <span
                                              className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                              <span aria-hidden
                                                  className="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                                              <span className="relative">Em andamento</span>
                                          </span>
                                        }
                                    </td>
                                </tr>
                              ))}
                            </tbody>
                        </table>
                        <div
                            className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                            <span className="text-xs xs:text-sm text-gray-900">
                                Todos os pedidos referentes a esse estabelecimento
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </Layout>
  );
}

export default RequestAll;
