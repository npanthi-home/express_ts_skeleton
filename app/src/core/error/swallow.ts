import rescue from "./rescue";

let swallow = (type: string, fail: Function, fn: Function) => {
  try {
    return fn();
  } catch (error) {
    rescue(error, type);
    return fail(error);
  }
};

export default swallow;
