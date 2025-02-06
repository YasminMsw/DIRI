import { Middleware } from "@reduxjs/toolkit";
const loggerMiddleware: Middleware = (storeAPI) => (next) => (action) => {
 console.log("� Enviando accción:", action);
 console.log("� Estado anterior:", storeAPI.getState());
 // Llamamos al siguiente middleware o al reducer
 const result = next(action);
 console.log("✅ Nuevo estado:", storeAPI.getState());
 return result;
};
export default loggerMiddleware;