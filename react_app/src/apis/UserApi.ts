import { AxiosError, AxiosResponse } from "axios";
import User from "../models/user";
import axiosClient from "./ApiUtils";

const _responseHandler = ( response: AxiosResponse ) =>
    response.status === 200 ? response.data : {}
const _errorHandler = ( error: AxiosError ) =>
    error.response?.data ? ( error.response?.data as any ).error : error

export const login = ( user: User ) => axiosClient
    .post( '/users/login', user )
    .then( _responseHandler )
    .catch( _errorHandler )

export const register = ( user: User ) => axiosClient
    .post( '/users/register', user )
    .then( _responseHandler )
    .catch( _errorHandler )

export const logout = () => axiosClient
    .get( '/users/logout' )
    .then( _responseHandler )
    .catch( _errorHandler )

export const sessionCheck = () => axiosClient
    .get( '/users/check' )
    .then( _responseHandler )
    .catch( _errorHandler )
