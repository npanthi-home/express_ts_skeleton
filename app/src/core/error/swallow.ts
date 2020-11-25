import rescue from "./rescue";

const swallow = (type: string) => (fail: Function) =>  (fn: Function) => {
  try {
    return fn();
  } catch (error) {
    rescue(error, type);
    return fail(error);
  }
};

export default swallow;
