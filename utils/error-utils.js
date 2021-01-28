export const parseError = (error, errorType) => {
  const errorObj = {
    message: error.response ? error?.response?.data : `${error?.name} ${error?.message}`,
    code: error.response ? error?.response?.status : null,
    type: errorType,
  };
  return errorObj;
};

export const parseServerError = (error, errorType) => {
  const errorObj = {
    event_type: errorType,
    event_properties: {
      name: error.message,
      message: error.message,
    },
  };
  return errorObj;
};
