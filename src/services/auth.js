import api from '../services/api';

export const TOKEN_KEY = "x-access-token";

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getUser = () => localStorage.getItem("userIn");

export const login = (token, user) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem("userIn", user );
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem("userIn");
};

export const permission = async () => {
	const user = getUser();
	const resGroup = await api.get(`/group/${user}`);
	const resPermission = await api.get(`/permission/${resGroup.data.data.permission}`);

	let emailPermission = resPermission.data.data.email;
	let createPermission = resPermission.data.data.create;
	let editPermission = resPermission.data.data.edit;

}