import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const getJwtToken = () => {
    return localStorage.getItem('token');
}


export const userApi = createApi({
    reducerPath:"user",
    baseQuery: fetchBaseQuery({
        baseUrl : 'https://83hdq248j9.execute-api.ap-south-1.amazonaws.com/dev',
        credentials: 'include',
        prepareHeaders(headers) {
            const token = getJwtToken();
            if (token) {
              headers.set('Authorization', `${token}`);
            }
            return headers;
          }
    }),
    endpoints(builder){
        return {
            login : builder.mutation({ 
                query: (data) => { 
                  return {
                    url: '/dashboard/login',
                    method: 'POST',
                    body: data,
                  };
                },
            }),
            dashboard : builder.mutation({ 
                query: () => { 
                  return {
                    url: '/dashboard',
                    method: 'GET',
                  };
                },
            }),
            logout : builder.mutation({ 
              query: () => { 
                return {
                  url: '/logout',
                  method: 'POST',
                };
              },
          }),
        }
    }
})


export const {useLoginMutation,useLogoutMutation,useDashboardMutation} = userApi