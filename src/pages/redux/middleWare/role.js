

export const role = () => {
     return (next) => {
       return (action) => {
           if (action.role === "admin") {
           return next(action);
         }

         return next(action);
       };
     };
};
