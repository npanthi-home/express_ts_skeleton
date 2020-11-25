import { AnySrvRecord } from "dns";

const defaultBuilder = (error: any) => ({
  name: error.id,
  message: error.message,
});

export const buildError = (type: string) => (code: number) => (error: any) => {
  if (type === error.id || type === error.name) {
    return defaultBuilder(error);
  } else {
    return error;
  }
};

export const buildCustomError = (type: string) => (code: number) => (
  builder: Function
) => (error: any) => {
  if (type === error.id || type === error.name) {
    return builder(error);
  } else {
    return error;
  }
};
