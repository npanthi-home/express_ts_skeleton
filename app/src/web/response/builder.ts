import { AnySrvRecord } from "dns";

const defaultBuilder = (error: any) => ({
  name: error.id,
  message: error.message,
});

export const build = (type: string) => (code: number) => (error: any) => {
  console.log(type, error.name);
  if (type === error.id || type === error.name) {
    return defaultBuilder(error);
  } else {
    return error;
  }
};

export const buildCustom = (type: string) => (code: number) => (
  builder: Function
) => (error: any) => {
  console.log(type, error.name);
  if (type === error.id || type === error.name) {
    return builder(error);
  } else {
    return error;
  }
};
